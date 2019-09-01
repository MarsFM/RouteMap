import React, { Component } from 'react'
import { connect } from 'react-redux';

import App from './app';

class AppConatiner extends Component {

  render() {
    return <App {...this.props} />
  }

}

const mapStateToProps = state => {
  return {
    isLoading: state.map.isLoading
  }
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(AppConatiner);