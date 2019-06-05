// Components
import DataViz from '../components/data-viz';
import GoingChart from '../components/going-chart'
import Head from '../components/head'
import HorizontalBarChart from '../components/horizontal-bar-chart'
import Menu from '../components/menu';
import MonthChart from '../components/month-chart'
import MultiSelect from '../components/multi-select'
import Stat from '../components/stat'
import YearChart from '../components/year-chart'
import YearChartDot from '../components/year-chart-dot'

// Utils
import { statsColors, statsBorderColors, departmentsSelectedColors } from '../utils/colors'
import { MostCentral } from "../utils/helpers"

// Modules
import axios from 'axios'
import { Nav } from 'react-bootstrap';
import NProgress from 'nprogress'
import { toast } from 'react-toastify';


export default class National extends React.Component {
  topYear = [
    { value: 2013, label: '2013' },
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' },
    { value: 2017, label: '2017' },
    { value: 2018, label: '2018' },
    { value: 2019, label: '2019' }
  ]

  state = {
    mostCentral: MostCentral(this.props.data['Centrality'], this.props.year),
    selectedYear: { value: this.props.year, label: this.props.year },
    data: this.props.data,
    info: {
      topCountries: this.props.info.topCountries.map(el => {
        return { value: el, label: el }
      }),
      topDepartments: this.props.info.topDepartments.map(el => {
        return { value: el, label: el }
      }),
      topAges: this.props.info.topAges.map(el => {
        return { value: el, label: el }
      })
    }
  }

  constructor(props) {
    super(props);
    // this.handleYearChange = this.handleYearChange.bind(this);
    this.selected = JSON.parse(JSON.stringify(this.state.info));
    this.previous = JSON.parse(JSON.stringify(this.state.info));
  }


  static async getInitialProps({ req }) {
    const year = Number(req.params.year) || 2016
    const response = await axios.get(`http://localhost:3000/BM/national/${year}`);
    return {
      data: response.data,
      info: response.data.TopInfo,
      year: year
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


  handleRegionsChange = async (newValue, actionMeta) => this.selected.topDepartments = newValue

  handleAgesRange = async (newValue, actionMeta) => this.selected.topAges = newValue

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await this.axiosProgress(
      (`http://localhost:3000/BM/national/${this.state.selectedYear.value}/?countries=${this.selected.topCountries.map(el => el.value).join()}&departments=${this.selected.topDepartments.map(el => el.value).join()}&ages=${this.selected.topAges.value || "-"}`)
        .replace(/\s\s+/g, ' ')
    )
    if (res.data['Evolution'] === null) {
      console.log("Not enough information with these parameters!");
      toast.error("Not enough information with these parameters!");
    }
    else {
      this.setState({
        data: res.data,
        mostCentral: MostCentral(res.data['Centrality'], this.state.selectedYear.value)
      });
    }
    NProgress.done();
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu title="National" description="Statistics on the tourist influence of users (TripAdvisor) by country, in circulation between French departments, in Bordeaux Metropole.">
            <div className="row">
              <div className="col">
                <Nav className="justify-content-center" defaultActiveKey={this.state.selectedYear.value}>
                  {this.topYear.map(({ value, label }) => (
                    <Nav.Item key={`nav-navitem-${label}`} >
                      <Nav.Link eventKey={`${label}`}
                        key={`nav-navitem-link${label}`} href={`${value}`}
                        disabled={label == this.state.selectedYear.value}>
                        {label}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
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
                <label className="col-md-1 col-form-label text-muted">Departments</label>
                <MultiSelect class="col-md" isMulti={true} isClearable={true}
                  onChange={this.handleRegionsChange}
                  default={this.state.info.topDepartments} name="departments"
                  options={this.state.info.topDepartments} />
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
          <Head title="National" />
          <div className="row stats">
            <Stat value={this.state.selectedYear['value']} type="Selected Year" background={statsColors['selected-year']} fa="fas fa-calendar-day"></Stat>
            <Stat value={this.state.mostCentral.label} addValue={this.state.mostCentral.value['diff'].value} type="Most central region" background={statsColors['central']} fa="fas fa-award"></Stat>
            <Stat value={this.state.data['TotalReviews'][this.state.selectedYear['value']].NB1.toLocaleString()} background={statsColors['ingoing']} addValue={this.state.data['TotalReviews']['diff'].NB1} type="Ingoing value" fa="fas fa-plane-arrival"></Stat>
            <Stat value={this.state.data['TotalReviews'][this.state.selectedYear['value']].NB2.toLocaleString()} background={statsColors['outgoing']} addValue={this.state.data['TotalReviews']['diff'].NB2} type="Outgoing value" fa="fas fa-plane-departure"></Stat>
          </div>

          <div className="row">
            <DataViz id="ingoing-outgoing-departments" title="Ingoing/Outgoing per departmens" style={{ borderLeft: statsBorderColors['going'] }}>
              <GoingChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={departmentsSelectedColors} />
            </DataViz>
          </div>
          <div className="row">
            <DataViz id="ingoing-evolution" title="Ingoing evolution" style={{ borderLeft: statsBorderColors['ingoing'] }}>
              <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='Ingoing' colors={departmentsSelectedColors} />
            </DataViz>

            <DataViz id="outgoing-evolution" title="Outgoing evolution" style={{ borderLeft: statsBorderColors['outgoing'] }}>
              <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='Outgoing' colors={departmentsSelectedColors} />
            </DataViz>
          </div>

          <div className="row">
            <DataViz id="monthly-evolution-ingoing" title="Monthly evolution of ingoing" style={{ borderLeft: statsBorderColors['ingoing'] }}>
              <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Ingoing' colors={departmentsSelectedColors} />
            </DataViz>

            <DataViz id="monthly-evolution-outgoing" title="Monthly evolution of outgoing" style={{ borderLeft: statsBorderColors['outgoing'] }}>
              <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Outgoing' colors={departmentsSelectedColors} />
            </DataViz>
          </div>

          <div className="row">
            <DataViz id="national-centrality-pagerank" title="National centrality" second="(PageRank)" style={{ borderLeft: statsBorderColors['central'] }}>
              <HorizontalBarChart nbItems={Object.keys(this.state.data['Centrality']).length} evolution={this.state.data['Centrality']} year={this.state.selectedYear['value']} type="Rank" colors={departmentsSelectedColors} step={0.5} valueType=" " />
            </DataViz>

            <DataViz id="ingoing-centrality-evolution" title="Ingoing centrality evolution" second="(PageRank Y / Y-1)" style={{ borderLeft: statsBorderColors['central'] }}>
              <YearChartDot height={250} width={50} evolution={this.state.data['Centrality']} var='value' colors={departmentsSelectedColors} />
            </DataViz>
          </div>
        </div>
      </div>
    )
  }

}
