import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.lat
          ?
          <div>
            <div>Lat: {this.props.lat}</div>
            <div>Long: {this.props.long}</div>
          </div>
          :
          <div>Getting your latitude...</div>
        }
      </div>
    );
  }
}

