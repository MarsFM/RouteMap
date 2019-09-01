import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateIndexPoints } from '../../reducers/map-reducers';

import RouteList from './routeList';


class RouteListContainer extends Component {

  updatePositionPoints = (oldIndex, newIndex) => {
    this.props.updateIndexPoints(oldIndex, newIndex);
  }

  render() {
    return <RouteList 
              updatePositionPoints={this.updatePositionPoints} 
              points={this.props.points} />
  }

}

const mapStateToProps = (state) => {
  return {
    points: state.map.points
  }
}

const mapDispatchToProps = {
  updateIndexPoints
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RouteListContainer);