import Head from '../components/head'
import axios from 'axios'
import BarChart from '../components/bar-chart'
import DiffTable from '../components/diff-table';
import MonthChart from '../components/month-chart';
import Menu from '../components/menu';
import Select from 'react-select';
import NProgress from 'nprogress'
import { Navbar, Nav, NavItem } from 'reactstrap';
import Link from 'next/link'
import { internationalSelectedColors } from '../utils/colors'
import Stat from '../components/stat'
import MultiSelect from '../components/multi-select'
import { MaxEvolution } from '../utils/helpers'

export default class International extends React.Component {
  topYear = [
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' }
  ]

  state = {
    maxEvolution:  MaxEvolution(this.props.data['Evolution']),
    selectedYear: { value: this.props.year, label: this.props.year },
    data: this.props.data,
    info: {
      topCountries: this.props.info.topCountries.map(el => {
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
    const response = await axios.get(`http://localhost:3000/BM/international/${year}/`);
    const info = await axios.get(`http://localhost:3000/BM/international/${year}/info/?limit=10`)

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
    const res = await this.axiosProgress(`http://localhost:3000/BM/international/${selectedYear.value}/`)
    const info = await axios.get(`http://localhost:3000/BM/international/${selectedYear.value}/info`)
    this.setState({
      data: res.data,
      selectedYear,
      info: {
        topCountries: info.data.topCountries.map(el => {
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
    this.selected.topAges = newValue
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await this.axiosProgress(
      (`http://localhost:3000/BM/international/${this.state.selectedYear.value}/?\
      countries=${this.selected.topCountries.map(el => el.value).join()}&\
      ages=${this.selected.topAges.value || "-"}`)
        .replace(/ /g, "")
    )
    this.setState({ 
      data: res.data,
      maxEvolution:  MaxEvolution(res.data['Evolution']), 
    });
    NProgress.done();
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu title="International">
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
                  default={this.state.info.topCountries}
                  options={this.state.info.topCountries} />
                </div>
                <div className="form-group row">
                   <label className="col-md-1 col-form-label text-muted  ml-auto">Ages</label>
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
          <div className="test">
            <Head title="International" />
            <div className="row stats">
              <Stat value={this.state.selectedYear['value']} type="Selected Year" fa="fas fa-calendar-day"></Stat>
              <Stat value={this.state.maxEvolution} type="most present country (Y/Y-1). " fa="fas fa-map-pin"></Stat>
              <Stat value={this.state.data['TotalReviews'].NB1.toLocaleString()} type="Number of reviews" fa="fas fa-star"></Stat>
            </div>
            <div className="row">
              <div className="col data-viz">
                <h6 className="text-uppercase font-weight-bold mb-4">Reviews per country</h6>
                <BarChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} type="Reviews" colors={internationalSelectedColors} />
              </div>
            </div>

            <div className="row">
              <div className="col data-viz">
                <h6 className="text-uppercase font-weight-bold mb-4">Reviews evolution</h6>
                <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='value' />
              </div>
              <div className="col data-viz">
                <h6 className="text-uppercase font-weight-bold mb-4">Monthly evolution of reviews</h6>
                <MonthChart height={100} evolution={this.state.data['Monthly']} var='Reviews' colors={internationalSelectedColors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}