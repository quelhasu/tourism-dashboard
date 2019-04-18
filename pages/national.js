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
import { nationalSelectedColors } from '../utils/colors'

export default class National extends React.Component {
  topYear = [
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' }
  ]
  
  state = {
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
    this.handleYearChange = this.handleYearChange.bind(this);
    this.selected = JSON.parse(JSON.stringify(this.state.info));
  }

  static async getInitialProps({ req }) {
    const year = Number(req.params.year) || 2016
    const response = await axios.get(`http://localhost:3000/BM/national/${year}/?countries=Belgium,France`);
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

  handleYearChange = async (selectedYear) => {
    const res = await this.axiosProgress(`http://localhost:3000/BM/national/${selectedYear.value}/`)
    const info = await axios.get(`http://localhost:3000/BM/national/${selectedYear.value}/info`)
    this.setState({
      data: res.data,
      selectedYear,
      info: {
        topCountries: info.data.topCountries.map(el => {
          return { value: el, label: el }
        }),
        topRegions: info.data.topRegions.map(el => {
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

  handleRegionsChange = async (newValue, actionMeta) => {
    this.selected.topRegions = newValue
  }

  handleAgesRange = async (newValue, actionMeta) => {
    this.selected.topAges = newValue || { value: "-", label: '-' }
    console.log(this.selected.topAges);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await this.axiosProgress(
      (`http://localhost:3000/BM/national/${this.state.selectedYear.value}/?\
      countries=${this.selected.topCountries.map(el => el.value).join()}&\
      regions=${this.selected.topRegions.map(el => el.value).join()}&\
      ages=${this.selected.topAges.value}`)
      .replace(/ /g,"")
    )
    this.setState({ data: res.data });
    NProgress.done();
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col">
        <div className="row">
          <div className="col-md-11">
            <Nav className="justify-content-center">
              {this.topYear.map(({ value, label }) => (
                <NavItem key={`nav-navitem-${label}`}>
                  <Link key={`nav-navitem-link${label}`} href={`/${value}`}><a className="nav-link">{label} </a></Link>
                </NavItem>
              ))}
            </Nav>
          </div>
        </div>
        <Menu>
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
              <label className="col-md-1 col-form-label">Regions</label>
              <div className="col-md-11">
                <Select
                  key={JSON.stringify(this.state.info.topRegions)}
                  defaultValue={this.state.info.topRegions}
                  isMulti isClearable isSearchable
                  name="regions"
                  closeMenuOnSelect={false}
                  options={this.state.info.topRegions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleRegionsChange}
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

        <Head title="National" />
        <h1>National</h1>
        <GoingChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={nationalSelectedColors}/>

        <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Ingoing' />
        <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Outgoing' />

        <div className="row">
          <div className="col-md-6">
            <MonthChart height='200' evolution={this.state.data['Monthly']} var='Ingoing' colors={nationalSelectedColors}/>
          </div>
          <div className="col-md-6">
            <MonthChart height='200' evolution={this.state.data['Monthly']} var='Outgoing' colors={nationalSelectedColors} />
          </div>
        </div>
      </div>
    )
  }

}