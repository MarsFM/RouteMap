import React, { Component } from 'react';
import {connect} from 'react-redux';
import { YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';

import { addYmaps, updateCoordsFromPoint, finishLoading } from '../../reducers/map-reducers';
import styles from './map.module.css';
import Geocode from '../../utils/geocode';

class MapContainer extends Component {

  addYmaps = (ymaps) => {
    const { addYmaps } = this.props;
    addYmaps(ymaps);
  }

  changeCoords = (coords, id) => {
    const idx = this.findIndexPoints(id);
    const point = {
      id,
      name: this.props.points[idx].name,
      coords
    };

    this.props.updateCoordsFromPoint(point, idx);
  }

  findIndexPoints = (id) => {
    const idx = this.props.points.findIndex(point => point.id === id);
    return idx;
  } 

  setAddresFromNewCoords = (coords, id) => {
    const { ymaps } = this.props;
    const idx = this.findIndexPoints(id);
    const geo = new Geocode(ymaps);
    geo.getPlace(coords)
        .then(name => {
          let point = {
            id,
            name,
            coords
          }

          this.props.updateCoordsFromPoint(point, idx);
        });
  }

  render() {
    const { center, points } = this.props;
    const zoom = 16;

    const coords = points.map(point => {
      return point.coords;
    })

    return ( 
      <div className={styles.map}>
        <YMaps query={{apikey: '07567630-aebc-488f-8859-7e04013684d6'}}>
          <div> 
            <Map 
              modules={['geocode']}
              onLoad={this.addYmaps}
              className={styles.map__yandex} 
              state={{ center, zoom, centering: true}} 
              
            >
              {
                points.map((point) => {
                  return <Placemark 
                            id={point.id}
                            key={point.id} 
                            options={{useMapMarginInDragging: true, draggable: true}}
                            geometry={point.coords} 
                            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            properties={{ hintContent: `${point.name}` }}
                            onDrag={(e) => {
                              let coords = e.get('target').geometry.getCoordinates();
                              this.changeCoords(coords, point.id);
                            }}
                            onDragEnd = {(e) => {
                              let coords = e.get('target').geometry.getCoordinates();
                              this.setAddresFromNewCoords(coords, point.id);
                            }}
                          />
                })
              }

              <Polyline
                  geometry={coords}
                  options={{
                  balloonCloseButton: false,
                  strokeColor: '#911',
                    strokeWidth: 2,
                  }}
              />

            </Map>
          </div>
        </YMaps>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    points: state.map.points,
    center: state.map.center,
    ymaps: state.map.ymaps,
  }
}

const mapDispatchToProps = {
  addYmaps,
  updateCoordsFromPoint,
  finishLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);