import Head from '../components/head'
import axios from 'axios'
import GoingChart from '../components/going-chart'
import DiffTable from '../components/diff-table';
import MonthChart from '../components/month-chart';
import Menu from '../components/menu';
import NProgress from 'nprogress'
import { Nav, NavItem } from 'reactstrap';
import Link from 'next/link'
import { nationalSelectedColors } from '../utils/colors'
import { national, nationalInfo } from '../test/database.js'
import Stat from '../components/stat'
import MultiSelect from '../components/multi-select'
import BarChart from '../components/bar-chart'
import { MostCentral } from "../utils/helpers"


export default class National extends React.Component {
  topYear = [
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' }
  ]
  state = {
    mostCentral: MostCentral(this.props.data['Centrality'], this.props.year),
    selectedYear: { value: this.props.year, label: this.props.year },
    data: this.props.data,
    info: {
      topCountries: this.props.info.topCountries.map(el => {
        return { value: el, label: el }
      }),
      topRegions: this.props.info.topRegions.map(el => {
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
  }

  static async getInitialProps({ req }) {
    const year = Number(req.params.year) || 2016
    const response = await axios.get(`http://localhost:3000/BM/national/${year}/`);
    const info = await axios.get(`http://localhost:3000/BM/national/${year}/info/?limit=10`)
    return {
      data: response.data,
      info: info.data,
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

  // needed if multiselect year 
  // handleYearChange = async (selectedYear) => {
  //   const res = await this.axiosProgress(`http://localhost:3000/BM/national/${selectedYear.value}/`)
  //   const info = await axios.get(`http://localhost:3000/BM/national/${selectedYear.value}/info`)
  //   this.setState({
  //     data: res.data,
  //     mostCentral: MostCentral(this.props.data['Centrality'], this.props.year),
  //     selectedYear,
  //     info: {
  //       topCountries: info.data.topCountries.map(el => {
  //         return { value: el, label: el }
  //       }),
  //       topRegions: info.data.topRegions.map(el => {
  //         return { value: el, label: el }
  //       }),
  //       topAges: info.data.topAges.map(el => {
  //         return { value: el, label: el }
  //       })
  //     }
  //   });
  //   this.selected = JSON.parse(JSON.stringify(this.state.info));
  //   NProgress.done();
  // }

  handleCountriesChange = async (newValue, actionMeta) => {
    this.selected.topCountries = newValue
  }

  handleRegionsChange = async (newValue, actionMeta) => {
    this.selected.topRegions = newValue
  }

  handleAgesRange = async (newValue, actionMeta) => {
    this.selected.topAges = newValue
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await this.axiosProgress(
      (`http://localhost:3000/BM/national/${this.state.selectedYear.value}/?countries=${this.selected.topCountries.map(el => el.value).join()}&regions=${this.selected.topRegions.map(el => el.value).join()}&ages=${this.selected.topAges.value || "-"}`)
        .replace(/\s\s+/g, ' ')
    )
    this.setState({
      data: res.data,
      mostCentral: MostCentral(res.data['Centrality'], this.state.selectedYear.value)
    });
    NProgress.done();
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu title="National">
            <div className="row">
              <div className="col-md-11">
                <Nav className="justify-content-center">
                  {this.topYear.map(({ value, label }) => (
                    <NavItem key={`nav-navitem-${label}`}>
                      <Link key={`nav-navitem-link${label}`} href={`${value}`}><a className="nav-link">{label} </a></Link>
                    </NavItem>
                  ))}
                </Nav>
              </div>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group row">
                <label className="col-md-1 col-form-label text-muted">Countries</label>
                <MultiSelect class="col-md" isMulti={true} isClearable={true}
                  onChange={this.handleCountriesChange}
                  default={this.state.info.topCountries} name="countries"
                  options={this.state.info.topCountries} />
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label text-muted">Regions</label>
                <MultiSelect class="col-md" isMulti={true} isClearable={true}
                  onChange={this.handleRegionsChange}
                  default={this.state.info.topRegions} name="regions"
                  options={this.state.info.topRegions} />
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label  ml-auto text-muted">Ages</label>
                <MultiSelect class="col-md-2" isMulti={false} isClearable={false}
                  onChange={this.handleAgesRange}
                  default={this.state.info.topAges[0]} name="ages"
                  options={this.state.info.topAges} />
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-primary">Update</button>
                </div>
              </div>

            </form>
          </Menu>
        </div>
        <div className="col">
          <Head title="National" />
          <div className="row stats">
            <Stat value={this.state.selectedYear['value']} type="Selected Year" fa="fas fa-calendar-day"></Stat>
            <Stat value={this.state.mostCentral} type="Most central region" fa="fas fa-award"></Stat>
            <Stat value={this.state.data['TotalReviews'].NB1.toLocaleString()} type="Ingoing value" fa="fas fa-plane-arrival"></Stat>
            <Stat value={this.state.data['TotalReviews'].NB2.toLocaleString()} type="Outgoing value" fa="fas fa-plane-departure"></Stat>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Ingoing/Outgoing per regions</h6>
              <GoingChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={nationalSelectedColors} />
            </div>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Ingoing evolution</h6>
              <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Ingoing' />
            </div>
          </div>

          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Outgoing evolution</h6>
              <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Outgoing' />
            </div>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Monthly evolution of ingoing</h6>
              <MonthChart height={150} evolution={this.state.data['Monthly']} var='Ingoing' colors={nationalSelectedColors} />
            </div>
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Monthly evolution of outgoing</h6>
              <MonthChart height={150} evolution={this.state.data['Monthly']} var='Outgoing' colors={nationalSelectedColors} />
            </div>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold">National centrality</h6>
              <p className="text-uppercase mb-4 text-muted text-small">(PageRank)</p>
              <BarChart evolution={this.state.data['Centrality']} year={this.state.selectedYear['value']} type="Rank" colors={nationalSelectedColors} step={0.5} valueType=" " />
            </div>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold">Ingoing centrality evolution</h6>
              <p className="text-uppercase mb-4 text-muted text-small">(PageRank Y / Y-1)</p>
              <DiffTable evolution={this.state.data['Centrality']} year={this.state.selectedYear['value']} var='value' />
            </div>
          </div>
        </div>
      </div>
    )
  }

}
