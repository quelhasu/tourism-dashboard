// Modules
import axios from 'axios'
import NProgress from 'nprogress'
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { withTranslation } from '../i18n'

// Components
import DataViz from '../components/data-viz';
import DoughnutChart from '../components/doughnut-chart'
import Head from '../components/head'
import Menu from '../components/menu';
import { MaxEvolution, Omit } from '../utils/helpers'
import MonthChart from '../components/month-chart';
import MultiSelect from '../components/multi-select'
import Stat from '../components/stat'
import YearChart from '../components/year-chart';

// Utils
import { internationalSelectedColors, statsColors, statsBorderColors } from '../utils/colors'

class International extends React.Component {

  anchorLinks = [
    { href: "#reviews-country-wo-france", text: "Répartition Avis", name: "reviews" },
    { href: "#monthly-evolution-reviews", text: "Evolution Mensuelle", name: "reviews-monthly" },
    { href: "#yearly-evolution-reviews-wo-france", text: "Evolution Annuelle", name: "reviews-yearly" }
  ]

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
      year: year,
      namespacesRequired: ['international', 'stats', 'filter'],
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
          <Menu 
            anchors={this.anchorLinks}
            title={this.props.t('page-title')}
            year={this.state.selectedYear.value}
            endUrl={``}
            baseUrl={`international`}
            description={this.props.t('description')}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group row">
                <label className="col-md-1 col-form-label text-muted">{this.props.t('filter:countries')}</label>
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
                  <button type="submit" className="btn btn-outline-primary">{this.props.t('filter:update')}</button>
                </div>
              </div>
            </form>
          </Menu>
        </div>
        <div className="col">
          <div className="test">
            <Head title={this.props.t('page-title')} />
            <div className="row stats">
              <Stat value={this.state.selectedYear['value']} type={this.props.t('stats:year')} background={statsColors['selected-year']} fa="fas fa-calendar-day"></Stat>
              <Stat value={this.state.maxEvolution.label} type={this.props.t('stats:present')} background={statsColors['central']} fa="fas fa-map-pin" addValue={this.state.maxEvolution.value['diff'].value}></Stat>
              <Stat value={this.state.data['TotalReviews'][this.state.selectedYear['value']].NB1.toLocaleString()} type={this.props.t('stats:reviews')} background={statsColors['reviews']} addValue={this.state.data['TotalReviews']['diff'].NB1} fa="fas fa-star"></Stat>
            </div>
            <div className="row">
              <DataViz anchorId="reviews-country-wo-france" title={this.props.t('reviews-wo-france')} style={{ borderLeft: statsBorderColors['reviews'] }}>
                <DoughnutChart evolution={this.state.internationalData['Evolution']} year={this.state.selectedYear['value']} colors={internationalSelectedColors} />
              </DataViz>

              <DataViz anchorId="reviews-country" title={this.props.t('reviews')} style={{ borderLeft: statsBorderColors['reviews'] }}>
                <DoughnutChart evolution={this.state.data['Evolution']} year={this.state.selectedYear['value']} colors={internationalSelectedColors} />
              </DataViz>
            </div>

            <div className="row">
              <DataViz anchorId="monthly-evolution-reviews-wo-france" title={this.props.t('monthly-wo-france')} style={{ borderLeft: statsBorderColors['monthly'] }}>
                {this.state.data['Monthly'] ? (
                  <MonthChart height={250} width={50} evolution={this.state.internationalData['Monthly']} var='Reviews' colors={internationalSelectedColors} />
                ) : this.loading()}
              </DataViz>

              <DataViz anchorId="monthly-evolution-reviews" title={this.props.t('monthly')} style={{ borderLeft: statsBorderColors['monthly'] }}>
                {this.state.data['Monthly'] ? (
                  <MonthChart height={250} width={50} evolution={this.state.data['Monthly']} var='Reviews' colors={internationalSelectedColors} />
                ) : this.loading()}
              </DataViz>
            </div>

            <div className="row">
              <DataViz anchorId="yearly-evolution-reviews-wo-france" title={this.props.t('yearly-wo-france')} style={{ borderLeft: statsBorderColors['yearly'] }}>
                <YearChart height={250} width={50} evolution={this.state.internationalData['Evolution']} var='value' colors={internationalSelectedColors} />
              </DataViz>

              <DataViz anchorId="yearly-evolution" title={this.props.t('yearly')} style={{ borderLeft: statsBorderColors['yearly'] }}>
                <YearChart height={250} width={50} evolution={this.state.data['Evolution']} var='value' colors={internationalSelectedColors} />
              </DataViz>
            </div>
          </div>
        </div>
      </div>

    )
  }

}

export default withTranslation(['international', 'stats', 'filter'])(International)