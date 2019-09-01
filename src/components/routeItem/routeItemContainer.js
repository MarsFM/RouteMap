import React, {Component} from 'react';
import { connect } from 'react-redux';

import RouteItem from './routeItem';

import { deletePoint } from '../../reducers/map-reducers';

class RouteItemContainer extends Component {

  deletePoint = () => {
    const idx = this.findPointId();
    this.props.deletePoint(idx);
  }

  findPointId = () => {
    const { points, id } = this.props;
    const idx = points.findIndex((point) => point.id === id);
    return idx;
  }

  render() {
    return  <RouteItem 
              deletePoint={this.deletePoint} 
              name={this.props.name} 
            />
  }
}

const mapStateToProps = (state) => {
  return {
    points: state.map.points,
  }
}

const mapDispatchToProps = {
  deletePoint
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(RouteItemContainer);