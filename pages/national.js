// Components
import DataViz from "../components/data-viz";
import GoingChart from "../components/going-chart";
import Head from "../components/head";
import HorizontalBarChart from "../components/horizontal-bar-chart";
import Menu from "../components/menu";
import MonthChart from "../components/month-chart";
import MultiSelect from "../components/multi-select";
import Stat from "../components/stat";
import YearChart from "../components/year-chart";
import YearChartDot from "../components/year-chart-dot";
import CentralityMap from "../components/centrality-map";

// Utils
import {
  statsColors,
  statsBorderColors,
  departmentsSelectedColors
} from "../utils/colors";
import { MostCentral } from "../utils/helpers";
import { newNational } from "../test/database";

// Modules
import axios from "axios";
import { Nav, Tabs, Tab, Spinner } from "react-bootstrap";
import NProgress from "nprogress";
import { toast } from "react-toastify";
import { withTranslation } from "../i18n";
import { connect } from "react-redux";
import { compose } from "recompose";

class National extends React.Component {
  anchorLinks = [
    { href: "#ingoing-outgoing-evolution", text: "Circulation", name: "going" },
    { href: "#ingoing-evolution", text: "Entrées", name: "ingoing" },
    { href: "#outgoing-evolution", text: "Sortie", name: "outgoing" },
    { href: "#centrality-evolution", text: "Centralité", name: "central" }
  ];

  state = {
    loading: true,
    geoJSON: this.props.geoJSON,
    selectedYear: { value: this.props.year, label: this.props.year },
    data: this.props.data,
    info: {
      topCountries: this.props.info.topCountries.map(el => {
        return { value: el, label: el };
      }),
      topAreas: this.props.info.topAreas.map(el => {
        return { value: el, label: el };
      }),
      topAges: this.props.info.topAges.map(el => {
        return { value: el, label: el };
      })
    }
  };

  constructor(props) {
    super(props);
    // this.handleYearChange = this.handleYearChange.bind(this);
    this.selected = JSON.parse(JSON.stringify(this.state.info));
    this.previous = JSON.parse(JSON.stringify(this.state.info));
  }

  static async getInitialProps({ req, store, isServer, pathname, query }) {
    try {
      store.dispatch({ type: "STUDY" });
      const state = store.getState();
      const year = Number(req.params.year) || 2016;
      const response = await axios.get(
        `${state.api}/${state.study}/destination/${year}/0/2/annual?limitareas=20`
      );
      const geoJSON = await axios.get(
        "https://data.dvrc.fr/api/getGeoJSONhull_dept_gadm36.php"
      );
      return {
        geoJSON: geoJSON.data,
        data: response.data,
        info: response.data.TopInfo,
        year: year,
        namespacesRequired: ["national", "stats", "destination", "filter"]
      };
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    try {
      const monthRes = await this.axiosProgress(
        `${this.props.api}/${this.props.study}/destination/${
          this.props.year
        }/0/2/monthly?countries=${this.selected.topCountries
          .map(el => encodeURIComponent(el.value))
          .join()}&areas=${this.selected.topAreas
          .map(el => encodeURIComponent(el.value))
          .join()}`
      );
      const centralRes = await axios.get(
        `${this.props.api}/${this.props.study}/destination/${
          this.props.year
        }/0/2/centrality?countries=${this.selected.topCountries
          .map(el => encodeURIComponent(el.value))
          .join()}&areas=${this.selected.topAreas
          .map(el => encodeURIComponent(el.value))
          .join()}`
      );
      const topAreas = await axios.get(
        `${this.props.api}/${this.props.study}/destination/${
          this.props.year
        }/0/2/info/areas`
      );

      this.setState(prevState => ({
        data: {
          ...prevState.data,
          Monthly: monthRes.data["Monthly"],
          Centrality: centralRes.data["Centrality"]
        },
        mostCentral: MostCentral(
          centralRes.data["Centrality"],
          this.props.year
        ),
        loading: false,
        info: {
          ...prevState.info,
          topAreasAvailable: topAreas.data["topAreas"].map(el => {
            return { value: el, label: el };
          })
        }
      }));
    } catch (e) {
      console.log(e);
    } finally {
      NProgress.done();
    }
  }

  axiosProgress = url => {
    console.log("%c" + url, "color: blue");
    NProgress.start();
    return axios.get(url).then(res => {
      return res;
    });
  };

  loading = () => (
    <div>
      <Spinner animation="grow" role="status" variant="primary" />{" "}
      <span>Loading...</span>
    </div>
  );

  handleCountriesChange = async (newValue, actionMeta) =>
    (this.selected.topCountries = newValue);

  handleRegionsChange = async (newValue, actionMeta) =>
    (this.selected.topAreas = newValue);

  handleAgesRange = async (newValue, actionMeta) =>
    (this.selected.topAges = newValue);

  handleSubmit = async event => {
    try {
      event.preventDefault();
      // const res = await this.axiosProgress(
      //   (`https://bm.dvrc.fr/api/Neo4Tourism/BM/national/${this.state.selectedYear.value}/?countries=${this.selected.topCountries.map(el => el.value).join()}&areas=${this.selected.topAreas.map(el => el.value).join()}&ages=${this.selected.topAges.value || "-"}`)
      //     .replace(/\s\s+/g, ' ')
      // )
      const res = await this.axiosProgress(
        `${this.props.api}/${this.props.study}/destination/${
          this.props.year
        }/0/2/annual?countries=${this.selected.topCountries
          .map(el => encodeURIComponent(el.value))
          .join()}&areas=${this.selected.topAreas
          .map(el => encodeURIComponent(el.value))
          .join()}&ages=${this.selected.topAges.value || "-"}`
      );
      const monthRes = await axios.get(
        `${this.props.api}/${this.props.study}/destination/${
          this.props.year
        }/0/2/monthly?countries=${this.selected.topCountries
          .map(el => encodeURIComponent(el.value))
          .join()}&areas=${this.selected.topAreas
          .map(el => encodeURIComponent(el.value))
          .join()}&ages=${this.selected.topAges.value || "-"}`
      );
      const centralRes = await axios.get(
        `${this.props.api}/${this.props.study}/destination/${
          this.props.year
        }/0/2/centrality?countries=${this.selected.topCountries
          .map(el => encodeURIComponent(el.value))
          .join()}&areas=${this.selected.topAreas
          .map(el => encodeURIComponent(el.value))
          .join()}&ages=${this.selected.topAges.value || "-"}`
      );

      if (res.data["Evolution"] === null) {
        console.log("Not enough information with these parameters!");
        toast.error("Not enough information with these parameters!");
      } else {
        this.setState({
          data: {
            Evolution: res.data["Evolution"],
            TotalReviews: res.data["TotalReviews"],
            Monthly: monthRes.data["Monthly"],
            Centrality: centralRes.data["Centrality"]
          },
          mostCentral: MostCentral(
            centralRes.data["Centrality"],
            this.state.selectedYear.value
          ),
          loading: false
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      NProgress.done();
    }
  };

  render() {
    const { selectedYear } = this.state;
    return (
      <div className="col body-content">
        <div className="options-menu">
          <Menu
            anchors={this.anchorLinks}
            title="National"
            year={this.state.selectedYear.value}
            endUrl={``}
            baseUrl={`national`}
            description={this.props.t("description")}
          >
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <label className="col-md-1">
                  <u>{this.props.t("filter:user")}:</u>
                </label>
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label text-muted">
                  {this.props.t("filter:nationalities")}
                </label>
                <MultiSelect
                  class="col-md"
                  isMulti={true}
                  isClearable={true}
                  onChange={this.handleCountriesChange}
                  default={this.state.info.topCountries}
                  name="countries"
                  options={this.state.info.topCountries}
                />
                <label className="col-md-1 col-form-label text-muted">
                  Ages
                </label>
                <MultiSelect
                  class="col-md-2"
                  isMulti={false}
                  isClearable={false}
                  onChange={this.handleAgesRange}
                  default={this.state.info.topAges[0]}
                  name="ages"
                  options={this.state.info.topAges}
                />
              </div>
              <div className="row">
                <label className="col-md-1">
                  <u>{this.props.t("filter:area")}:</u>
                </label>
              </div>
              <div className="form-group row">
                <label className="col-md-1 col-form-label text-muted">
                  {this.props.t("filter:department")}
                </label>
                <MultiSelect
                  class="col-md"
                  isMulti={true}
                  isClearable={true}
                  onChange={this.handleRegionsChange}
                  default={this.state.info.topAreas}
                  name="areas"
                  options={this.state.info.topAreasAvailable}
                />
              </div>
              <div className="form-group row">
                <div className="col-auto ml-auto">
                  <button
                    type="submit"
                    className="btn btn-outline-primary"
                    onClick={() => this.setState({ loading: true })}
                    disabled={this.state.loading}
                  >
                    {this.props.t("filter:update")}
                  </button>
                </div>
              </div>
            </form>
          </Menu>
        </div>
        <div className="col">
          <Head title="National" />
          <div className="row stats">
            <Stat
              value={this.state.selectedYear["value"]}
              type={this.props.t("stats:year")}
              background={statsColors["selected-year"]}
              fa="fas fa-calendar-day"
            />
            {this.state.mostCentral ? (
              <Stat
                value={this.state.mostCentral.label}
                addValue={this.state.mostCentral.value["diff"].value}
                type={this.props.t("stats:centrality")}
                background={statsColors["central"]}
                fa="fas fa-award"
              />
            ) : (
              <Stat
                value=""
                loading={true}
                type={this.props.t("stats:centrality")}
                background={statsColors["central"]}
                fa="fas fa-award"
              />
            )}
            <Stat
              value={this.state.data["TotalReviews"][
                this.state.selectedYear["value"]
              ].NB1.toLocaleString()}
              background={statsColors["outgoing"]}
              addValue={this.state.data["TotalReviews"]["diff"].NB1}
              type={this.props.t("stats:going")}
              fa="fas fa-plane"
            />
          </div>

          <div className="row">
            <DataViz
              anchorId="ingoing-outgoing-evolution"
              title={this.props.t("destination:ingoing-outgoing")}
              style={{ borderLeft: statsBorderColors["going"] }}
            >
              <GoingChart
                evolution={this.state.data["Evolution"]}
                year={this.state.selectedYear["value"]}
                colors={departmentsSelectedColors}
              />
            </DataViz>
          </div>
          <div className="row">
            <DataViz
              anchorId="ingoing-evolution"
              title={this.props.t("destination:ingoing")}
              style={{ borderLeft: statsBorderColors["ingoing"] }}
            >
              <Tabs
                variant="pills"
                defaultActiveKey="year"
                id="uncontrolled-tab-example"
              >
                <Tab eventKey="year" title={this.props.t("destination:yearly")}>
                  <YearChart
                    height={250}
                    width={50}
                    evolution={this.state.data["Evolution"]}
                    var="Ingoing"
                    colors={departmentsSelectedColors}
                  />
                </Tab>
                <Tab
                  eventKey="month"
                  title={this.props.t("destination:monthly")}
                  disabled={!this.state.data["Monthly"]}
                >
                  {this.state.data["Monthly"] ? (
                    <MonthChart
                      height={250}
                      width={50}
                      evolution={this.state.data["Monthly"]}
                      var="Ingoing"
                      colors={departmentsSelectedColors}
                    />
                  ) : (
                    this.loading()
                  )}
                </Tab>
              </Tabs>
            </DataViz>

            <DataViz
              anchorId="outgoing-evolution"
              title={this.props.t("destination:outgoing")}
              style={{ borderLeft: statsBorderColors["outgoing"] }}
            >
              <Tabs
                variant="pills"
                defaultActiveKey="year"
                id="uncontrolled-tab-example"
              >
                <Tab eventKey="year" title={this.props.t("destination:yearly")}>
                  <YearChart
                    height={250}
                    width={50}
                    evolution={this.state.data["Evolution"]}
                    var="Outgoing"
                    colors={departmentsSelectedColors}
                  />
                </Tab>
                <Tab
                  eventKey="month"
                  title={this.props.t("destination:monthly")}
                  disabled={!this.state.data["Monthly"]}
                >
                  {this.state.data["Monthly"] ? (
                    <MonthChart
                      height={250}
                      width={50}
                      evolution={this.state.data["Monthly"]}
                      var="Outgoing"
                      colors={departmentsSelectedColors}
                    />
                  ) : (
                    this.loading()
                  )}
                </Tab>
              </Tabs>
            </DataViz>
          </div>

          <div className="row ">
            <DataViz
              anchorId="national-centrality-pagerank"
              title={this.props.t("destination:centrality")}
              style={{ borderLeft: statsBorderColors["central"] }}
            >
              <a className="anchor" id="centrality-pagerank" />
              <Tabs
                variant="pills"
                defaultActiveKey="map"
                id="uncontrolled-tab-example"
                className="justify-content-end"
              >
                <Tab eventKey="map" title={this.props.t("destination:map")}>
                  {this.state.data["Centrality"] ? (
                    <CentralityMap
                      zoom={6}
                      geoJSON={this.state.geoJSON}
                      position={[44.84044, -0.5805]}
                      evolution={this.state.data["Centrality"]}
                      mostCentral={this.state.mostCentral}
                      name="name_2"
                      year={this.state.selectedYear["value"]}
                    />
                  ) : (
                    this.loading()
                  )}
                </Tab>
                <Tab
                  eventKey="bar-chart"
                  title={this.props.t("destination:rank")}
                >
                  {this.state.data["Centrality"] ? (
                    <HorizontalBarChart
                      nbItems={
                        Object.keys(this.state.data["Centrality"]).length
                      }
                      evolution={this.state.data["Centrality"]}
                      year={this.state.selectedYear["value"]}
                      type="Rank"
                      colors={departmentsSelectedColors}
                      step={0.5}
                      valueType=" "
                    />
                  ) : (
                    this.loading()
                  )}
                </Tab>
              </Tabs>
            </DataViz>

            <DataViz
              anchorId="ingoing-centrality-evolution"
              title={this.props.t("destination:centrality-evolution")}
              style={{ borderLeft: statsBorderColors["central"] }}
            >
              <a className="anchor" id="centrality-evolution" />
              {this.state.data["Centrality"] ? (
                <YearChartDot
                  height={500}
                  width={50}
                  evolution={this.state.data["Centrality"]}
                  var="value"
                  colors={departmentsSelectedColors}
                />
              ) : (
                this.loading()
              )}
            </DataViz>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withTranslation(["national", "stats", "destination", "filter"]),
  connect(state=>state)
)(National);
