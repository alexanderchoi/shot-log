import React, { Component } from 'react';
import '../styles/InputShots.css';

class InputShots extends Component {
  state = {
    shotType: '',
    makes: 0,
    attempts: 0,
    shotLog: []
  }

  changeAttempts = this.changeAttempts.bind(this);
  changeMakes = this.changeMakes.bind(this);
  changeShotType = this.changeShotType.bind(this);
  logShots = this.logShots.bind(this);

  changeAttempts(event) {
    this.setState({ attempts: parseInt(event.target.value) });
  }

  changeMakes(event) {
    this.setState({ makes: parseInt(event.target.value) });
  }

  changeShotType(event) {
    this.setState({ shotType: event.target.value});
  }
  logShots(event) {
    let shotLog = this.state.shotLog;
    let newLog = {makes: this.state.makes, attempts: this.state.attempts, shotType: this.state.shotType}
    shotLog.push(newLog);
    this.setState({ shotLog });
    document.getElementById('display').innerHTML = `${this.state.makes}/${this.state.attempts} ${this.state.shotType}`;
  }

  render() {
    return(
      <div className="wrapper">       
        <section className='one'>
          <a href="/">Done</a>
        </section>
        <section className="two">
          <p>state visualizer: shotType:{this.state.shotType} makes:{this.state.makes} attempts:{this.state.attempts}</p>
          <p id="display">Log some shots see it displayed here.</p>
        </section>
        <section className="three">
          {/* <form> */}
            <div className="div-select">
              <select id="select" onChange={ this.changeShotType }>
                <option select="defaultValue">
                Select Your Shot Type
                </option>
                <option>Layup</option>
                <option>Midrange</option>
                <option>Three</option>
              </select>
            </div>
            <div className="div-makesAttempts">
              <input id="makesButton"
                     type="number"
                     placeholder="Makes"
                     onChange={ this.changeMakes }>
              </input>
              <input id="attemptsButton"
                     type="number"
                     placeholder="Attempts"
                     onChange={ this.changeAttempts }>
              </input>
              <button onClick={ this.logShots }>Log</button>
            </div>
          {/* </form> */}
        </section>
      </div>
    )
  }
}

export default InputShots;