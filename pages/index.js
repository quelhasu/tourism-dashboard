import React from 'react'
import Stat from '../components/stat'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col body-content">
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
