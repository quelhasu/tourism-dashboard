import React from 'react'
import Stat from '../components/stat'
import { withNamespaces } from '../i18n'

export default class Index extends React.Component {

  static async getInitialProps() {
    return {
      namespacesRequired: ['international', 'national'],
    }
}

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
