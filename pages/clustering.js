import Head from '../components/head'
import axios from 'axios'
import GoingChart from '../components/going-chart'
import DiffTable from '../components/diff-table';
import MonthChart from '../components/month-chart';
import Menu from '../components/menu';
import Select from 'react-select';
import NProgress from 'nprogress'
import { Navbar, Nav, NavItem } from 'reactstrap';
import Link from 'next/link'
import { groupingSelectedColors } from '../utils/colors'
import Stat from '../components/stat'
import MultiSelect from '../components/multi-select'
import { PascalCase } from '../utils/helpers'
import HorizontalBarChart from '../components/horizontal-bar-chart'

export default class Clustering extends React.Component {
  topYear = [
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' }
  ]

  state = {
    selectedYear: { value: this.props.year, label: this.props.year },
    name: { value: this.props.name, label: this.props.name },
    dep: { value: this.props.dep, label: PascalCase(this.props.dep) },
    data: this.props.data,
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
    this.handleYearChange = this.handleYearChange.bind(this);
    this.selected = JSON.parse(JSON.stringify(this.state.info));
  }

  static async getInitialProps({ req }) {
    const year = Number(req.params.year) || 2016
    const name = req.params.name || 2
    const dep = req.params.dep || 'Gironde'
    const response = await axios.get(`http://localhost:3000/BM/clustering/${year}/${name}/${dep}/?countries=Belgium,France`);
    const info = await axios.get(`http://localhost:3000/BM/clustering/${year}/${name}/${dep}/info/?limit=10`)

    return {
      data: response.data,
      info: info.data,
      year: year,
      name: name,
      dep: dep
    }
  }

  axiosProgress = (url) => {
    console.log('%c' + url, 'color: orange');;
    NProgress.start();
    return axios.get(url)
      .then(res => {
        return res;
      })
  }

  handleYearChange = async (selectedYear) => {
    const res = await this.axiosProgress(`http://localhost:3000/BM/clustering/${selectedYear.value}/${this.state.name.value}/${this.state.dep.value}/`)
    const info = await axios.get(`http://localhost:3000/BM/clustering/${selectedYear.value}/${this.state.name.value}/${this.state.dep.value}/info`)
    this.setState({
      data: res.data,
      selectedYear,
      info: {
        topCountries: info.data.topCountries.map(el => {
          return { value: el, label: el }
        }),
        topAreas: info.data.topAreas.map(el => {
          return { value: el, label: el }
        }),
        topAges: info.data.topAges.map(el => {
          return { value: el, label: el }
        })
      }
    });
    this.selected = JSON.parse(JSON.stringify(this.state.info));
    NProgress.done();
  }

  handleCountriesChange = async (newValue, actionMeta) => {
    this.selected.topCountries = newValue
  }

  handleAreasChange = async (newValue, actionMeta) => {
    this.selected.topAreas = newValue
  }

  handleAgesRange = async (newValue, actionMeta) => {
    this.selected.topAges = newValue
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await this.axiosProgress(
      (`http://localhost:3000/BM/clustering/${this.state.selectedYear.value}/${this.state.name.value}/${this.state.dep.value}/?\
      countries=${this.selected.topCountries.map(el => el.value).join()}&\
      areas=${this.selected.topAreas.map(el => el.value).join()}&\
      ages=${this.selected.topAges.value || "-"}`)
        .replace(/ /g, "")
    )
    this.setState({ data: res.data });
    NProgress.done();
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu title="Clustering">
            <div className="row">
              <div className="col-md-11">
                <Nav className="justify-content-center">
                  {this.topYear.map(({ value, label }) => (
                    <NavItem key={`nav-navitem-${label}`}>
                      <Link key={`nav-navitem-link${label}`} href={`/clustering/${value}/${this.state.name.value}/${this.state.dep.value}`}><a className="nav-link">{label} </a></Link>
                    </NavItem>
                  ))}
                </Nav>
              </div>
            </div>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group row">
                <label className="col-md-1 col-form-label">Countries</label>
                <div className="col-md-11">
                  <Select
                    key={JSON.stringify(this.state.info.topCountries)}
                    defaultValue={this.state.info.topCountries}
                    isSearchable isClearable isMulti
                    name="countries"
                    closeMenuOnSelect={false}
                    options={this.state.info.topCountries}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    placeholder="Select.."
                    onChange={this.handleCountriesChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label">Areas</label>
                <div className="col-md-11">
                  <Select
                    key={JSON.stringify(this.state.info.topAreas)}
                    defaultValue={this.state.info.topAreas}
                    isMulti isClearable isSearchable
                    name="regions"
                    closeMenuOnSelect={false}
                    options={this.state.info.topAreas}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleAreasChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                {/* <label className="col-md-1 col-form-label ml-auto">Year</label>
              <div className="col-md-2 ">
                <Select value={selectedYear} onChange={this.handleYearChange} options={this.topYear} />
              </div> */}
                <label className="col-md-1 col-form-label  ml-auto">Ages</label>
                <div className="col-md-2">
                  <Select
                    key={JSON.stringify(this.state.info.topAges)}
                    defaultValue={[this.state.info.topAges[0]]}
                    name="ages"
                    options={this.state.info.topAges}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleAgesRange}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-primary">Update</button>
                </div>
              </div>

            </form>
          </Menu>
        </div>
        <div className="col">
          <Head title="Grouping" />
          <div className="row stats">
            <Stat value={this.state.selectedYear['value']} type="Selected Year" fa="fas fa-calendar-day"></Stat>
            <Stat value={this.state.data['TotalReviews'].NB1.toLocaleString()} type="Ingoing value" fa="fas fa-plane-arrival"></Stat>
            <Stat value={this.state.data['TotalReviews'].NB2.toLocaleString()} type="Outgoing value" fa="fas fa-plane-departure"></Stat>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Ingoing/Outgoing per areas</h6>
              <GoingChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={groupingSelectedColors} />
            </div>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Ingoing evolution</h6>
              <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Ingoing' />
            </div>
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Ingoing evolution</h6>
              <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Outgoing' />
            </div>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Monthly evolution of ingoing</h6>
              <MonthChart height={150} evolution={this.state.data['Monthly']} var='Ingoing' colors={groupingSelectedColors} />
            </div>
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold mb-4">Monthly evolution of ingoing</h6>
              <MonthChart height={150} evolution={this.state.data['Monthly']} var='Outgoing' colors={groupingSelectedColors} />
            </div>
          </div>
          <div className="row">
            <div className="col data-viz">
              <h6 className="text-uppercase font-weight-bold">{this.state.dep.label} centrality</h6>
              <p className="text-uppercase mb-4 text-muted text-small">(PageRank)</p>
              <HorizontalBarChart evolution={this.state.data['Centrality']} year={this.state.selectedYear['value']} type="Rank" colors={groupingSelectedColors} step={0.5} valueType=" " />
            </div>
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