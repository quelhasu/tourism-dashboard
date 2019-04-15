import Head from '../components/head'
import axios from 'axios'
import GoingChart from '../components/going-chart'
import DiffTable from '../components/diff-table';
import MonthChart from '../components/month-chart';

var selectedYear = 2016

export default class National extends React.Component {

  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const response = await axios.get('http://localhost:3000/BM/national/2016/?countries=Belgium,France');
    return {
      data: response.data
    }

  }

  render() {
    return (
      <div>
        <Head title="National" />
        <h1>National</h1>
        <GoingChart evolution={this.props.data['Evolution']} year={selectedYear} />

        <DiffTable evolution={this.props.data['Evolution']} year={selectedYear} var='Ingoing' />
        <DiffTable evolution={this.props.data['Evolution']} year={selectedYear} var='Outgoing' />

        <div className="row">
          <div className="col-md-6">
            <MonthChart evolution={this.props.data['Monthly']} var='Ingoing' />
          </div>
          <div className="col-md-6">
            <MonthChart evolution={this.props.data['Monthly']} var='Outgoing' />
          </div>
        </div>
        <style jsx>{`
        

    `}</style>
      </div>
    )
  }

}