// Modules
import axios from 'axios'
import Link from 'next/link'
import { Nav } from 'react-bootstrap';
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

// Utils
import { MostCentral } from "../utils/helpers"
import {
  nationalSelectedColors, townshipSelectedColors, statsColors,
  statsBorderColors, departmentsSelectedColors,
  boroughSelectedColors, internationalSelectedColors
} from '../utils/colors'


export default class Destination extends React.Component {
  topYear = [
    { value: 2013, label: '2013' },
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' },
    { value: 2017, label: '2017' },
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' }
  ]

  scope = [
    { key: 0, label: 'Country', colors: internationalSelectedColors },
    { key: 1, label: 'Region', colors: nationalSelectedColors },
    { key: 2, label: 'Department', colors: departmentsSelectedColors },
    { key: 3, label: 'Borough', colors: boroughSelectedColors },
    { key: 4, label: 'Township', colors: townshipSelectedColors },
  ]

  state = {
    mostCentral: MostCentral(this.props.data['Centrality'], this.props.year),
    selectedYear: { value: this.props.year, label: this.props.year },
    data: this.props.data,
    from: this.props.from,
    groupby: this.props.groupby,
    modifyScope: false,
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
    const response = await axios.get(`http://localhost:3000/BM/destination/${year}/${req.params.from}/${req.params.groupby}`);
    return {
      data: response.data,
      info: response.data.TopInfo,
      year: year,
      from: Number(req.params.from),
      groupby: Number(req.params.groupby)
    }
    } catch (err) {
      console.log(err);
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

  handleCountriesChange = async (newValue, actionMeta) => this.selected.topCountries = newValue

  handleAreasChange = async (newValue, actionMeta) => this.selected.topAreas = newValue

  handleAgesRange = async (newValue, actionMeta) => this.selected.topAges = newValue
  

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const link = (`http://localhost:3000/BM/destination/${this.state.selectedYear.value}/${this.props.from}/${this.props.groupby}/?countries=${this.selected.topCountries.map(el => el.value).join()}&areas=${this.selected.topAreas.map(el => el.value).join()}&ages=${this.selected.topAges.value || "-"}`).replace(/\s\s+/g, ' ')

        const res = await this.axiosProgress(link)

        this.setState(prevState => ({
          modifyScope: false,
          data: res.data,
          info: {
            ...prevState.info,
            topAreas: res.data.TopInfo.topAreas.map(el => {
              return { value: el, label: el }
            })
          },
          mostCentral: MostCentral(res.data['Centrality'], this.state.selectedYear.value)
        }));
    } catch (err) {
      this.notify(err.message + "\nImpossible to use 'group by' with this 'from' option.");
    }
    finally {
      NProgress.done();
    }
  }

  notify = (msg) => {toast.error(msg); return ''}

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu title="Destination" description="Statistics on the tourist influence of users (TripAdvisor) by country.">

            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <label className="col-md-1"><u>Scope:</u></label>
              </div>
              <div className="form-group row">
                <div className="col-md-5">
                  <div className="form-group row">
                    <label className="col-md-2 col-form-label text-muted">From</label>
                    <Nav variant="pills" defaultActiveKey={this.state.from}
                      onSelect={selectedKey => this.setState({ from: selectedKey, modifyScope: true })}>
                      {this.scope
                        .filter(({ key }) => key <= 3)
                        .map(({ key, label }) => (
                          <Nav.Item>
                            <Nav.Link eventKey={key}>{label}</Nav.Link>
                          </Nav.Item>
                        ))}
                    </Nav>
                  </div>
                </div>
                <div className="col-md-5">
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
                {this.state.modifyScope  ? this.state.from < this.state.groupby ? (
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
            <div className="row">
              <div className="col">
                <Nav variant="tabs" className="justify-content-center" defaultActiveKey={this.state.selectedYear.value}>
                  {this.topYear.map(({ value, label }) => (
                    <Nav.Item key={`nav-navitem-${label}`}>
                      <Nav.Link eventKey={`${label}`} href={`${value}`} key={`nav-navitem-link${label}`}>{label}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </div>
          </Menu>
        </div>

        <div className="col">
          <Head title="Destination" />
          <div className="row stats">
            <Stat value={this.state.selectedYear['value']} type="Selected Year" background={statsColors['selected-year']} fa="fas fa-calendar-day"></Stat>
            <Stat value={this.state.mostCentral.label} addValue={this.state.mostCentral.value['diff'].value} type="Most central area" background={statsColors['central']} fa="fas fa-award"></Stat>
            <Stat value={this.state.data['TotalReviews'][this.state.selectedYear['value']].NB1.toLocaleString()} background={statsColors['going']} addValue={this.state.data['TotalReviews']['diff'].NB1} type="Going value" fa="fas fa-plane"></Stat>
          </div>

          <div className="row">
            <DataViz id="ingoing-outgoing-departments" title="Ingoing/Outgoing per departmens" style={{ borderLeft: statsBorderColors['going'] }}>
              <GoingChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={this.scope.find(el => el.key == this.props.groupby).colors} />
            </DataViz>
          </div>

          <div className="row">
            <DataViz id="ingoing-evolution" title="Ingoing evolution" style={{ borderLeft: statsBorderColors['ingoing'] }}>
              <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='Ingoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
            </DataViz>

            <DataViz id="outgoing-evolution" title="Outgoing evolution" style={{ borderLeft: statsBorderColors['outgoing'] }}>
              <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='Outgoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
            </DataViz>
          </div>

          <div className="row">
            <DataViz id="monthly-evolution-ingoing" title="Monthly evolution of ingoing" style={{ borderLeft: statsBorderColors['ingoing'] }}>
              <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Ingoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
            </DataViz>

            <DataViz id="monthly-evolution-outgoing" title="Monthly evolution of outgoing" style={{ borderLeft: statsBorderColors['outgoing'] }}>
              <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Outgoing' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
            </DataViz>
          </div>

          <div className="row">
            <DataViz id="national-centrality-pagerank" title="National centrality" second="(PageRank)" style={{ borderLeft: statsBorderColors['central'] }}>
              <HorizontalBarChart nbItems={Object.keys(this.state.data['Centrality']).length}
                evolution={this.state.data['Centrality']} year={this.state.selectedYear['value']}
                type="Rank" colors={this.scope.find(el => el.key == this.props.groupby).colors}
                step={0.5} valueType=" " />
            </DataViz>

            <DataViz id="ingoing-centrality-evolution" title="Ingoing centrality evolution" second="(PageRank Y / Y-2)" style={{ borderLeft: statsBorderColors['central'] }}>
              <YearChartDot height={250} width={50} evolution={this.state.data['Centrality']} var='value' colors={this.scope.find(el => el.key == this.props.groupby).colors} />
            </DataViz>
          </div>
        </div>
      </div>
    )
  }
}
