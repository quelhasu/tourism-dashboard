import Head from '../components/head'
import axios from 'axios'
import BarChart from '../components/bar-chart'
import DiffTable from '../components/diff-table';
import MonthChart from '../components/month-chart';
import Menu from '../components/menu';
import Select from 'react-select';
import NProgress from 'nprogress'
import { Nav, Tabs, Tab, Spinner } from 'react-bootstrap';
import Link from 'next/link'
import { internationalSelectedColors, statsColors, statsBorderColors } from '../utils/colors'
import { internationalFlags } from '../utils/flags'
import Stat from '../components/stat'
import MultiSelect from '../components/multi-select'
import { MaxEvolution, Omit } from '../utils/helpers'
import DoughnutChart from '../components/doughnut-chart'
import { toast } from 'react-toastify';
import YearChart from '../components/year-chart';
import DataViz from '../components/data-viz';
import { international } from '../test/database'

export default class International extends React.Component {

  state = {
    maxEvolution: MaxEvolution(this.props.data['Evolution']),
    selectedYear: { value: this.props.year, label: this.props.year },
    data: this.props.data,
    internationalData: {
      'Evolution': Omit(this.props.data['Evolution'], ['France', '-'])
    },
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
    this.selected = JSON.parse(JSON.stringify(this.state.info));
  }

  static async getInitialProps({ req }) {
    const year = Number(req.params.year) || 2016
    const response = await axios.get(`https://bm.dvrc.fr/api/Neo4Tourism/BM/international/${year}/annual`);

    return {
      data: response.data,
      info: response.data.TopInfo,
      year: year
    }
  }

  async componentDidMount() {
    try {
      const monthRes = await this.axiosProgress(`https://bm.dvrc.fr/api/Neo4Tourism/BM/international/${this.props.year}/monthly?countries=${this.selected.topCountries.map(el => el.value).join()}`)
      this.setState(prevState => ({
        data: {
          ...prevState.data,
          Monthly: monthRes.data['Monthly']
        },
        internationalData: {
          ...prevState.internationalData,
          Monthly: Omit(monthRes.data['Monthly'], ['France', '-'])
        }
      }))
    } catch (e) {
      console.log(e);
    } finally {
      NProgress.done();
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

  loading = () => <div><Spinner animation="grow" role="status" variant="primary" /> <span>Loading...</span></div>

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
    console.log(this.state.topCountries);
    const res = await this.axiosProgress(`https://bm.dvrc.fr/api/Neo4Tourism/BM/international/${this.state.selectedYear.value}/annual?countries=${this.selected.topCountries.map(el => el.value).join()}&ages=${this.selected.topAges.value || "-"}`)

    const monthRes = await axios.get(`https://bm.dvrc.fr/api/Neo4Tourism/BM/international/${this.state.selectedYear.value}/monthly?countries=${this.selected.topCountries.map(el => el.value).join()}ages=${this.selected.topAges.value || "-"}`)

    if (res.data['Evolution'] === null) {
      toast.error("Not enough information with these parameters!");
    }
    else {
      this.setState({
        data: {
          TotalReviews: res.data['TotalReviews'],
          Evolution: res.data['Evolution'],
          Monthly: monthRes.data['Monthly']
        },
        internationalData: {
          'Evolution': Omit(res.data['Evolution'], ['France', '-']),
          'Monthly': Omit(monthRes.data['Monthly'], ['France', '-'])
        },
        maxEvolution: MaxEvolution(res.data['Evolution']),
      });
    }
    NProgress.done();
  }

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu title="International"
            year={this.state.selectedYear.value}
            endUrl={``}
            baseUrl={`international`}
            description="Statistics on the tourist influence of users (TripAdvisor) by country on Bordeaux Metropole.">
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
              <Stat value={this.state.selectedYear['value']} type="Selected Year" background={statsColors['selected-year']} fa="fas fa-calendar-day"></Stat>
              <Stat value={this.state.maxEvolution.label} type="most present country (Y/Y-1). " background={statsColors['central']} fa="fas fa-map-pin" addValue={this.state.maxEvolution.value['diff'].value}></Stat>
              <Stat value={this.state.data['TotalReviews'][this.state.selectedYear['value']].NB1.toLocaleString()} background={statsColors['reviews']} addValue={this.state.data['TotalReviews']['diff'].NB1} type="Number of reviews" fa="fas fa-star"></Stat>
            </div>
            <div className="row">
              <DataViz id="reviews-country-wo-france" title="Reviews per country (w/o France & others)" style={{ borderLeft: statsBorderColors['reviews'] }}>
                <DoughnutChart evolution={this.state.internationalData['Evolution']} year={this.state.selectedYear['value']} colors={internationalSelectedColors} />
              </DataViz>

              <DataViz id="reviews-country" title="Reviews per country" style={{ borderLeft: statsBorderColors['reviews'] }}>
                <DoughnutChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={internationalSelectedColors} />
              </DataViz>
            </div>

             <div className="row">
              <DataViz id="monthly-evolution-reviews-wo-france" title="Monthly evolution of reviews (w/o France & others)" style={{ borderLeft: statsBorderColors['monthly'] }}>
                {this.state.data['Monthly'] ? (
                  <MonthChart height={250} width={50} evolution={this.state.internationalData['Monthly']} var='Reviews' colors={internationalSelectedColors} />
                ) : this.loading()}
              </DataViz>

              <DataViz id="monthly-evolution-reviews" title="Monthly evolution of reviews" style={{ borderLeft: statsBorderColors['monthly'] }}>
                {this.state.data['Monthly'] ? (
                  <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Reviews' colors={internationalSelectedColors} />
                ) : this.loading()}
              </DataViz>
            </div>

            <div className="row">
              <DataViz id="yearly-evolution-reviews-wo-france" title="Yearly evolution of reviews (w/o France & others)" style={{ borderLeft: statsBorderColors['yearly'] }}>
                <YearChart height={250} width={50} evolution={this.state.internationalData['Evolution']} var='value' colors={internationalSelectedColors} />
              </DataViz>

              <DataViz id="yearly-evolution" title="Yearly evolution of reviews" style={{ borderLeft: statsBorderColors['yearly'] }}>
                <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='value' colors={internationalSelectedColors} />
              </DataViz>
            </div>
          </div>
        </div>
      </div>

    )
  }

}