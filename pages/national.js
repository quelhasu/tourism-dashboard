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
    {value: 2014, label: '2014'},
    {value: 2015, label: '2015'},
    {value: 2016, label: '2016'}
  ]

  constructor(props) {
    super(props);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.state = {
      selectedYear: {value: 2016, label: '2016'},
      data: props.data
    }
  }

  static async getInitialProps() {
    const response = await axios.get('http://localhost:3000/BM/national/2016/?countries=Belgium,France');
    return {
      data: response.data
    }
  }

  axiosProgress = (url) => {
    NProgress.start();
    return axios.get(url)
      .then(res => {
        NProgress.done();
        return res;
      })  
  }

  handleYearChange = async (selectedYear) => {
     const res = await this.axiosProgress('http://localhost:3000/BM/national/'+selectedYear.value+'/?countries=Belgium,France')
     this.setState({data: res.data, selectedYear});
  }
  
  
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="row">
        <div className="col-md-2">
          <div className="position-fixed" >
            <Menu>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <h1>Menu</h1>
                <div className="form-group row">
                  <div className="col-md-10">
                    <Select value={selectedYear} onChange={this.handleYearChange} options={this.topYear}/>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
              </form>
            </Menu>
          </div>
        </div>
        <div className="col-md-10" style={{ borderLeft: '1px #e9ecef solid' }}>
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
      </div>
    )
  }

}