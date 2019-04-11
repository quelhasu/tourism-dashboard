import Head from '../components/head'
import axios from 'axios'

export default class Stats extends React.Component {

  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const response = await axios.get('http://localhost:3000/BM/stats/france/gironde');
    console.log(response);
    return {
      data: response.data
    }
  }

  render() {
    return (
      <div>
        <Head title="Stats" />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col"># Users</th>
              <th scope="col"># French</th>
              <th scope="col"># Reviews</th>
              <th scope="col"># Gironde's reviews</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.values(this.props.data).map((year) => {
                return (
                  <tr>
                    <th scope="row">{year.year}</th>
                    <td>{year.users}</td>
                    <td>{year.France}</td>
                    <td>{year.reviews}</td>
                    <td>{year.Gironde}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <style jsx>{`
     
    `}</style>
      </div>
    )
  }

}