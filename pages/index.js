import React from 'react'
import Stat from '../components/stat'
import Head from '../components/head'
import { statsColors } from '../utils/colors'

const dataVizStyle = {
   padding: '50px !important'
}
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col body-content">
        <Head />
        <div className="col">
          <div className="row stats box">
            {/* <Stat style={dataVizStyle} background={statsColors['selected-year']} value='2016' type="Selected Year" fa="fas fa-calendar-day"></Stat>
            <Stat background={statsColors['selected-year']} value='2016' type="Selected Year" fa="fas fa-calendar-day"></Stat> */}
          </div>
          <div className="row stats box">
            {/* <Stat background={statsColors['selected-year']} value='2016' type="Selected Year" fa="fas fa-calendar-day"></Stat>
            <Stat background={statsColors['selected-year']} value='2016' type="Selected Year" fa="fas fa-calendar-day"></Stat> */}
          </div>
        </div>
      </div>
    )
  }
}
