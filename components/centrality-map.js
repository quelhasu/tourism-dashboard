import React from 'react'
import { render } from 'react-dom'
import { Omit } from '../utils/helpers'
import axios from 'axios'
import { Map, Marker, Popup, TileLayer, GeoJSON, DivOverlay } from 'react-leaflet-universal'

function getColor(d) {
  return d > 90 ? '#990000' :
    d > 75 ? '#d7301f' :
      d > 60 ? '#ef6548' :
        d > 45 ? '#fc8d59' :
          d > 30 ? '#fdbb84' :
            d > 15 ? '#fdd49e' :
              '#fef0d9'

}

export default class CentralityMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geoJSON: 'null',
      selected: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(this.props.geoJSON)
      let yearKeys = Object.keys(this.props.evolution).filter(key => this.props.evolution[key][this.props.year] == undefined)
      let evolution = this.props.evolution

      yearKeys.forEach(key => evolution = Omit(this.props.evolution, key))
      evolution = Object.entries(evolution).sort((a, b) => (a[1][this.props.year].value > b[1][this.props.year].value) ? -1 : 1)

      evolution.forEach((obj, index) => {
        obj[1]['rank'] = ((index + 1));
        obj[1]['percentage'] = obj[1]['2018'].value / this.props.mostCentral.value[this.props.year].value * 100
      });

      this.setState({
        geoJSON: response.data,
        yearKeys: yearKeys,
        centralKeys: Object.keys(this.props.evolution).map(el => el),
        evolution: evolution
      })
      console.log(evolution);
    } catch (err) {
      console.log(err);
    }
  }

  style(feature) {
    let options = {
      fillColor: '#999',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };

    if (this.state.centralKeys.includes(feature.properties[this.props.name])) {
      let area = Object.entries(this.props.evolution).find(el => el[0] == feature.properties[this.props.name]);
      options.fillColor = 'red'
      options.fillColor = getColor(area[1].percentage)
      options.dashArray = '0';
      options.weight = 2;
      // options.fillOpacity = area[1].opacity
    }

    return options
  }

  resetHighlight(e) {
    var layer = e.target;
    layer.setStyle(this.style(layer.feature));
    this.setState({
      selected: null,
    })
    // console.log(this.refs.geojson.leafletElement)
    // this.state.geoJSON.resetStyle(e.target);
    // info.update();
  }

  highlightFeature(e) {
    var layer = e.target;
    let area = this.state.evolution.find(el => el[0] == layer.feature.properties[this.props.name]);
    
    if (area) {
      this.setState({
        selected: {
          rank: area[1].rank,
          value: area[1][this.props.year].value,
          name: layer.feature.properties[this.props.name]
        }
      });
    }
    else {
      this.setState({
        selected: {
          rank: -1,
          value: 0,
          name: layer.feature.properties[this.props.name]
        }
      })
    }
    layer.setStyle({
      weight: 3,
      color: 'white',
      dashArray: '',
      fillOpacity: 0.9
    });

    layer.bringToFront();

  }
  onEachFeature(feature, layer) {
    layer.on({
      mouseover: this.highlightFeature.bind(this),
      mouseout: this.resetHighlight.bind(this)
    });
  }


  render() {
    let mapboxAccessToken = 'pk.eyJ1IjoicXVlbGhhc3UiLCJhIjoiY2p3bTgyOWE2MTF0czQ1bnNpdndjam0zYSJ9.PxdCYX08kgIQEXKx4RzKUw';
    return (
      <div style={{ height: '500px', width: '' }}  >
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url={`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${mapboxAccessToken}`}
            id='mapbox.streets'
            attribution='© OpenStreetMap contributors'
            maxZoom={19}
          />
          {this.state.geoJSON != 'null' ? (
            <GeoJSON data={this.state.geoJSON}
              style={this.style.bind(this)} onEachFeature={this.onEachFeature.bind(this)}
              ref="geojson" />
          ) : ''}
          <div className="info-control">
            <h4>PageRank</h4>
            {this.state.selected ? (
              <p>
                <b>{this.state.selected.name}</b>(#{this.state.selected.rank}): {this.state.selected.value}
                </p>
            ) : ''}
          </div>
        </Map>
      </div>
    )
  }
}