import React from 'react'
import Stat from '../components/stat'
import Head from '../components/head'

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
            <Stat value='2016' type="Selected Year" fa="fas fa-calendar-day"></Stat>
            <Stat value='2016' type="Selected Year" fa="fas fa-calendar-day"></Stat>
            <Stat value='2016' type="Selected Year" fa="fas fa-calendar-day"></Stat>
          </div>
        </div>
      </div>
    )
  }
}
