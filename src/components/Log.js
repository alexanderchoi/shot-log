import React, { Component } from 'react';

class Log extends Component {
  render () {
    return (
      <div className="div-log">
        <span className="logText">{this.props.log.makes}/{this.props.log.attempts} {this.props.log.shotType}</span>
      </div>
    )
  }
}

export default Log;