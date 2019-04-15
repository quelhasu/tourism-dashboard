import Head from '../components/head'
import axios from 'axios'
import GoingChart from '../components/going-chart'
import DiffTable from '../components/diff-table';
import MonthChart from '../components/month-chart';
import Menu from '../components/menu';
import Select from 'react-select';
import NProgress from 'nprogress'


export default class National extends React.Component {
  topYear = [
    { value: 2014, label: '2014' },
    { value: 2015, label: '2015' },
    { value: 2016, label: '2016' }
  ]



  constructor(props) {
    super(props);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.state = {
      selectedYear: { value: 2016, label: '2016' },
      data: props.data
    }

    this.topCountries = props.info.topCountries.map(el => {
      return { value: el, label: el }
    })
    this.topRegions = props.info.topRegions.map(el => {
      return { value: el, label: el }
    })

    this.topAges = props.info.topAges.map(el => {
      return { value: el, label: el }
    })
  }

  static async getInitialProps() {
    const response = await axios.get('http://localhost:3000/BM/national/2016/?countries=Belgium,France');
    const info = await axios.get('http://localhost:3000/BM/national/2016/info')
    return {
      data: response.data,
      info: info.data
    }
  }

  axiosProgress = (url) => {
    console.log('%c' + url, 'color: blue');;
    NProgress.start();
    return axios.get(url)
      .then(res => {
        NProgress.done();
        return res;
      })
  }

  handleYearChange = async (selectedYear) => {
    const res = await this.axiosProgress('http://localhost:3000/BM/national/' + selectedYear.value + '/?countries=Belgium,France')
    this.setState({ data: res.data, selectedYear });
  }

  handleCountriesChange = async (newValue, actionMeta) =>{
    this.topCountries = newValue;
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await this.axiosProgress(`http://localhost:3000/BM/national/${this.state.selectedYear.value}/?countries=${this.topCountries.map(el=> el.value).join()}`)
    this.setState({ data: res.data });
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col">
        <Menu>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h1>Menu</h1>
            <div className="form-group row">
              <div className="col-md-2">
                <Select value={selectedYear} onChange={this.handleYearChange} options={this.topYear} />
              </div>
              <div className="col-md-10">
                <Select
                  defaultValue={this.topCountries}
                  isSearchable
                  isMulti
                  name="countries"
                  options={this.topCountries}
                  className="basic-multi-select"
                  classNamePrefix="select countries"
                  onChange={this.handleCountriesChange}
                />
              </div>
            </div>
            <div className="form-group row">
            <div className="col-md-2">
                  <Select
                  defaultValue={[this.topAges[0]]}
                  isMulti
                  name="ages"
                  options={this.topAges}
                  className="basic-multi-select"
                  classNamePrefix="select countries"
                />
                </div>
                <div className="col-md-10">
                  <Select
                  defaultValue={this.topRegions}
                  isMulti
                  isSearchable
                  name="regions"
                  options={this.topRegions}
                  className="basic-multi-select"
                  classNamePrefix="select countries"
                />
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Update</button>
          </form>
        </Menu>
        <Head title="National" />
        <h1>National</h1>
        <GoingChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} />

        <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Ingoing' />
        <DiffTable evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} var='Outgoing' />

        <div className="row">
          <div className="col-md-6">
            <MonthChart evolution={this.state.data['Monthly']} var='Ingoing' />
          </div>
          <div className="col-md-6">
            <MonthChart evolution={this.state.data['Monthly']} var='Outgoing' />
          </div>
        </div>
      </div>
    )
  }

}