// Modules
import axios from 'axios'
import Link from 'next/link'
import { Nav, Tabs, Tab, Spinner } from 'react-bootstrap';
import NProgress from 'nprogress'
import { toast } from 'react-toastify';

// Components
import DataViz from '../components/data-viz';
import DiffTable from '../components/diff-table';
import GoingChart from '../components/going-chart'
import Head from '../components/head'
import HorizontalBarChart from '../components/horizontal-bar-chart'
import Menu from '../components/menu';
import MonthChart from '../components/month-chart';
import MultiSelect from '../components/multi-select'
import Stat from '../components/stat'
import YearChartDot from '../components/year-chart-dot';
import YearChart from '../components/year-chart';
import CentralityMap from '../components/centrality-map'

// Utils
import { destination, destinationTouri } from '../test/database'
import { MostCentral } from "../utils/helpers"
import {
  nationalSelectedColors, townshipSelectedColors, statsColors,
  statsBorderColors, departmentsSelectedColors,
  boroughSelectedColors, internationalSelectedColors, touristicColors
} from '../utils/colors'


export default class Destination extends React.Component {

  scope = [
    { key: 0, label: 'Country', colors: internationalSelectedColors },
    { key: 1, label: 'Region', colors: nationalSelectedColors },
    { key: 2, label: 'Department', colors: departmentsSelectedColors, geoJSON: 'https://data.dvrc.fr/api/getGeoJSONhull_dept_gadm36.php', name:'name_2' },
    { key: 2.5, label: 'Touristic', colors: touristicColors, geoJSON: 'https://data.dvrc.fr/api/getGeoJSONbycodetouriIDdata.php', name: 'nom_touri' },
    { key: 3, label: 'Borough', colors: boroughSelectedColors },
    { key: 4, label: 'Township', colors: townshipSelectedColors }
  ]

  state = {
    selectedYear: { value: this.props.year, label: this.props.year },
    data: this.props.data,
    from: this.props.from,
    groupby: this.props.groupby,
    modifyScope: false,
    geoJSON: this.props.geoJSON,
    info: {
      topCountries: this.props.info.topCountries.map(el => {
        return { value: el, label: el }
      }),
      topAreas: this.props.info.topAreas.map(el => {
        return { value: el, label: el }
      }),
      topAges: this.props.info.topAges.map(el => {
        return { value: el, label: el }
      })
    }
  }

  constructor(props) {
    super(props);
    this.selected = JSON.parse(JSON.stringify(this.state.info));
    this.previous = JSON.parse(JSON.stringify(this.state.info));
  }


  static async getInitialProps({ req }) {
    try {
      const year = Number(req.params.year) || 2016
      const limitareas = Number(req.query.limitareas) || 12
      const response = await axios.get(`http://localhost:3000/BM/destination/${year}/${req.params.from}/${req.params.groupby}/annual?limitareas=${limitareas}`);
      const geoJSON = await axios.get(this.scope.find(el => el.key == this.props.groupby).geoJSON)
      return {
        data: response.data,
        info: response.data.TopInfo,
        year: year,
        from: Number(req.params.from),
        groupby: Number(req.params.groupby),
        limitareas: limitareas,
        geoJSON: geoJSON.data
      }
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const monthRes = await this.axiosProgress(`http://localhost:3000/BM/destination/${this.props.year}/${this.props.from}/${this.props.groupby}/monthly?countries=${this.selected.topCountries.map(el => el.value).join()}&areas=${this.selected.topAreas.map(el => encodeURIComponent(el.value)).join()}`);
      const centralRes = await axios.get(`http://localhost:3000/BM/destination/${this.props.year}/${this.props.from}/${this.props.groupby}/centrality?countries=${this.selected.topCountries.map(el => el.value).join()}&areas=${this.selected.topAreas.map(el => encodeURIComponent(el.value)).join()}&limitareas=${this.props.limitareas}`)

      this.setState(prevState => ({
        data: {
          ...prevState.data,
          Monthly: monthRes.data['Monthly'],
          Centrality: centralRes.data['Centrality']
        },
        mostCentral: MostCentral(centralRes.data['Centrality'], this.props.year)
      }))
    } catch (e) {
      console.log(e);
    } finally {
      NProgress.done();
    }
  }

  axiosProgress = (url) => {
    console.log('%c' + url, 'color: blue');;
    NProgress.start();
    return axios.get(url)
      .then(res => {
        return res;
      })
  }

  loading = () => <div><Spinner animation="grow" role="status" variant="primary" /> <span>Loading...</span></div>

  handleCountriesChange = async (newValue, actionMeta) => this.selected.topCountries = newValue

  handleAreasChange = async (newValue, actionMeta) => this.selected.topAreas = newValue

  handleAgesRange = async (newValue, actionMeta) => this.selected.topAges = newValue


  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const link = (`http://localhost:3000/BM/destination/${this.state.selectedYear.value}/${this.props.from}/${this.props.groupby}/annual?countries=${this.selected.topCountries.map(el => el.value).join()}&areas=${this.selected.topAreas.map(el => encodeURIComponent(el.value)).join()}&ages=${this.selected.topAges.value || "-"}`).replace(/\s\s+/g, ' ')
      const res = await this.axiosProgress(link)
      const monthRes = await axios.get(`http://localhost:3000/BM/destination/${this.state.selectedYear.value}/${this.props.from}/${this.props.groupby}/monthly?countries=${this.selected.topCountries.map(el => el.value).join()}&areas=${this.selected.topAreas.map(el => encodeURIComponent(el.value)).join()}`);
      const centralRes = await axios.get(`http://localhost:3000/BM/destination/${this.state.selectedYear.value}/${this.props.from}/${this.props.groupby}/centrality?countries=${this.selected.topCountries.map(el => el.value).join()}&areas=${this.selected.topAreas.map(el => encodeURIComponent(el.value)).join()}&limitareas=${this.props.limitareas}`)
      const geoJSON = await axios.get(this.scope.find(el => el.key == this.props.groupby).geoJSON)

      this.setState(prevState => ({
        modifyScope: false,
        data: {
          TotalReviews: res.data['TotalReviews'],
          Evolution: res.data['Evolution'],
          Monthly: monthRes.data['Monthly'],
          Centrality: centralRes.data['Centrality']
        },
        mostCentral: MostCentral(centralRes.data['Centrality'], this.props.year),
        info: {
          ...prevState.info,
          topAreas: res.data.TopInfo.topAreas.map(el => {
            return { value: el, label: el }
          })
        },
        geoJSON: geoJSON.data
      }));
    } catch (err) {
      this.notify(err.message + "\nImpossible to use 'group by' with this 'from' option.");
    }
    finally {
      NProgress.done();
    }
  }

  notify = (msg) => { toast.error(msg); return '' }

  render() {
    let selectedScope = this.scope.find(el => el.key == this.props.groupby);
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu title="Destination"
            year={this.state.selectedYear.value}
            endUrl={`${this.props.from}/${this.props.groupby}`}
            baseUrl={`destination`}
            description="Statistics on the tourist influence of users (TripAdvisor) by country.">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <label className="col-md-1"><u>Scope:</u></label>
              </div>
              <div className="form-group row">
                <div className="col-md-4">
                  <div className="form-group row">
                    <label className="col-md-2 col-form-label text-muted">From</label>
                    <Nav variant="pills" defaultActiveKey={this.state.from}
                      onSelect={selectedKey => this.setState({ from: selectedKey, modifyScope: true })}>
                      {this.scope
                        .filter(({ key }) => key <= 3 && key != 2.5)
                        .map(({ key, label }) => (
                          <Nav.Item>
                            <Nav.Link eventKey={key}>{label}</Nav.Link>
                          </Nav.Item>
                        ))}
                    </Nav>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-md-2 col-form-label text-muted">Group By</label>
                    <Nav variant="pills" defaultActiveKey={this.state.groupby}
                      onSelect={selectedKey => this.setState({ groupby: selectedKey, modifyScope: true })}>
                      {this.scope
                        .map(({ key, label }) => (
                          <Nav.Item>
                            <Nav.Link eventKey={key}>{label}</Nav.Link>
                          </Nav.Item>
                        ))}
                    </Nav>
                  </div>
                </div>
                {this.state.modifyScope ? this.state.from < this.state.groupby ? (
                  <div className="col-auto ml-auto">
                    <Link href={`/destination/${this.state.selectedYear.value}/${this.state.from}/${this.state.groupby}`}>
                      <a className="btn btn-outline-primary">Update Scope</a>
                    </Link>
                  </div>) : this.notify("Impossible to use 'group by' with this 'from' option.") : ''}
              </div>
              <div className="row">
                <label className="col-md-1"><u>User:</u></label>
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label text-muted">Nationalities</label>
                <MultiSelect class="col-md" isMulti={true} isClearable={true}
                  onChange={this.handleCountriesChange}
                  default={this.state.info.topCountries} name="countries"
                  options={this.state.info.topCountries} />
                <label className="col-md-1 col-form-label text-muted">Ages</label>
                <MultiSelect class="col-md-2" isMulti={false} isClearable={false}
                  onChange={this.handleAgesRange}
                  default={this.state.info.topAges[0]} name="ages"
                  options={this.state.info.topAges} />
              </div>
              <div className="row">
                <label className="col-md-1"><u>Area:</u></label>
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label text-muted">Areas</label>
                <MultiSelect class="col-md" isMulti={true} isClearable={true}
                  onChange={this.handleAreasChange}
                  default={this.state.info.topAreas} name="areas"
                  options={this.state.info.topAreas} />
              </div>
              <div className="form-group row">
                <div className="col-auto ml-auto">
                  <button type="submit" className="btn btn-outline-primary">Update</button>
                </div>
              </div>

            </form>
          </Menu>
        </div>

        <div className="col">
          <Head title="Destination" />
          <div className="row stats">
            <Stat value={this.state.selectedYear['value']} type="Selected Year" background={statsColors['selected-year']} fa="fas fa-calendar-day"></Stat>
            {this.state.mostCentral ? (
              <Stat value={this.state.mostCentral.label} addValue={this.state.mostCentral.value['diff'].value} type="Most central area" background={statsColors['central']} fa="fas fa-award"></Stat>
            ) : <Stat loading={true} type="Most central region" background={statsColors['central']} fa="fas fa-award"></Stat>}
            <Stat value={this.state.data['TotalReviews'][this.state.selectedYear['value']].NB1.toLocaleString()} background={statsColors['outgoing']} addValue={this.state.data['TotalReviews']['diff'].NB1} type="Going value" fa="fas fa-plane"></Stat>
          </div>

          <div className="row">
            <DataViz id="ingoing-outgoing-evolution" title="Ingoing/Outgoing evolution" style={{ borderLeft: statsBorderColors['going'] }}>
              <GoingChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={this.scope.find(el => el.key == this.props.groupby).colors} />
            </DataViz>
          </div>

          <div className="row">
            <DataViz id="ingoing-evolution" title="Ingoing evolution" style={{ borderLeft: statsBorderColors['ingoing'] }}>
              <Tabs defaultActiveKey="year" id="uncontrolled-tab-example">
                <Tab eventKey="year" title="Yearly">
                  <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='Ingoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
                </Tab>
                <Tab eventKey="month" title="Monthly">
                  {this.state.data['Monthly'] ? (
                    <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Ingoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
                  ) : this.loading()}
                </Tab>
              </Tabs>
            </DataViz>

            <DataViz id="outgoing-evolution" title="Outgoing evolution" style={{ borderLeft: statsBorderColors['outgoing'] }}>
              <Tabs defaultActiveKey="year" id="uncontrolled-tab-example">
                <Tab eventKey="year" title="Yearly">
                  <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='Outgoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
                </Tab>
                <Tab eventKey="month" title="Monthly">
                  {this.state.data['Monthly'] ? (
                    <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Outgoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
                  ) : this.loading()}
                </Tab>
              </Tabs>
            </DataViz>
          </div>

          <div className="row">
            <DataViz id="centrality-pagerank" title="Centrality" second="(PageRank)" style={{ borderLeft: statsBorderColors['central'] }}>
              <Tabs defaultActiveKey="map" id="uncontrolled-tab-example">
              <Tab eventKey="map" title="Map">
                  {/* {this.state.data['Centrality'] ? (
                    <CentralityMap zoom={6}
                      geoJSON={this.state.geoJSON}
                      position={[44.8404400, -0.5805000]}
                      evolution={this.state.data['Centrality']}
                      mostCentral={this.state.mostCentral}
                      name={selectedScope.name}
                      year={this.state.selectedYear['value']} />
                  ) : this.loading()} */}
                </Tab>
              <Tab eventKey="bar-chart" title="Bar Chart">
                {this.state.data['Centrality'] ? (
                  <HorizontalBarChart nbItems={Object.keys(this.state.data['Centrality']).length}
                    evolution={this.state.data['Centrality']} year={this.state.selectedYear['value']}
                    type="Rank" colors={this.scope.find(el => el.key == this.props.groupby).colors}
                    step={0.5} valueType=" " />
                ) : this.loading()}
                </Tab>
              </Tabs>
            </DataViz>

            <DataViz id="centrality-evolution" title="Centrality evolution" second="(PageRank Y / Y-2)" style={{ borderLeft: statsBorderColors['central'] }}>
              {this.state.data['Centrality'] ? (
                <YearChartDot height={250} width={50} evolution={this.state.data['Centrality']} var='value' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
              ) : this.loading()}
            </DataViz>
          </div>
        </div>
      </div>
    )
  }
}
