import React, { Component } from 'react';
import { connect } from 'react-redux';

import {addPoint, changePlace, addCenterMap } from '../../reducers/map-reducers';

import Field from './field';
import Geocode from '../../utils/geocode';

class FieldContainer extends Component {

  changePlace = (event) => {
    let place = event.target.value;
    this.props.changePlace(place);
  }

  addPoint = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    let {place, ymaps, addCenterMap} = this.props;

    const geocode = new Geocode(ymaps);
    
    if (place) {
      geocode.getCoords(place)
      .then(coords => {
        this.props.addPoint({
          id: this.props.points.length + 1,
          name: place,
          coords
        });
        
        addCenterMap(coords);
      });
    }

  }

  render() {
    return <Field 
            changePlace={this.changePlace} 
            addPoint={this.addPoint} 
            place={this.props.place}
          />
  }

} 

const mapStateToProps = (state) => {
  return {
    points: state.map.points,
    place: state.map.place,
    ymaps: state.map.ymaps,
    center: state.map.center
  }
}

const mapDispatchToProps = {
  addPoint,
  changePlace,
  addCenterMap
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldContainer);