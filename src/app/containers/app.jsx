import React, { Component } from 'react';

import { connect } from 'react-redux';
import App from '../components/app';

import { getPosition } from '../actions/position';

class AppContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getPosition());
  }

  render() {
    return (
      <App {...this.props}>

        {this.props.children}

      </App>
    );
  }
}

function mapStateToProps(state) {
  return {
    lat: state.get('lat'),
    long: state.get('long'),
  };
}

export default connect(
  mapStateToProps
)(AppContainer);
