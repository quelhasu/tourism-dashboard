import Head from '../components/head'
import axios from 'axios'



export default class Index extends React.Component {

  constructor(props) {
    super(props);
  }
  
  static async getInitialProps () {
    const response = await axios.get('http://localhost:3000/BM/national/2016/info');
    console.log(response);
    return {}
  }

  render() {
    return (
      <div>
        <Head title="National" />
          <h1>Hello</h1>
          <button onClick={this.fetchData}>
            Fetch Data
          </button>

        <style jsx>{`
     
    `}</style>
      </div>
    )
  }

}