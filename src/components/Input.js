import React, { Component } from 'react';

import '../styles/Input.css';

import ShotLog from './ShotLog';

class Input extends Component {
  state = {
    shotType: '',
    makes: 0,
    attempts: 0,
    shotLog: [
      {makes: 45, attempts: 100, shotType:'Three'},
      {makes: 60, attempts: 100, shotType:'Layup'},
      {makes: 55, attempts: 100, shotType:'Midrange'},
      {makes: 45, attempts: 100, shotType:'Three'},
      {makes: 60, attempts: 100, shotType:'Layup'},
      {makes: 55, attempts: 100, shotType:'Midrange'},  
    ]
  }

  handleChange = this.handleChange.bind(this);
  addNewLog = this.addNewLog.bind(this);
  // updateDisplay = this.updateDisplay.bind(this);

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  addNewLog(event) {
    if (this.state.makes > this.state.attempts) {
      return alert(`You can't have more makes than attempts. Unless you're Kobe.`);
    } else if (this.state.attempts < 1) {
      return alert('You need more than 0 attempts');
    } else if (this.state.shotType === '') {
      return alert('Please select a shot type.');
    }
    let shotLog = this.state.shotLog;
    let newLog = {makes: this.state.makes, attempts: this.state.attempts, shotType: this.state.shotType}
    shotLog.push(newLog);
    this.setState({ makes: 0, attempts: 0, shotLog: shotLog });
    document.getElementById('display').innerHTML = '';
    document.getElementById('select').options[0].selected=true;
    document.getElementById('makesButton').value = '';
    document.getElementById('attemptsButton').value = '';
    // this.updateDisplay();
  }

  // updateDisplay() {
  //   let display = document.getElementById('display');
  // }

  // componentDidMount() {
  //   this.updateDisplay();
  // };

  render() {
    return(
      <div className="wrapper">       
        <section className='one'>
          <a href="/">Done</a>
        </section>
        <section className="two">
          <p>state visualizer</p>
          <p>shotType: {this.state.shotType}</p>
          <p>makes: {this.state.makes} </p>
          <p>attempts: {this.state.attempts}</p>
          <p id="display">Log some shots see it displayed here.</p>
          <ShotLog 
            shotLog={ this.state.shotLog }
          />
        </section>
        <section className="three">
          {/* <form> */}
            <div className="div-select">
              <select id="select" name="shotType" onChange={ this.handleChange }>
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
                     name="makes"
                     onChange={ this.handleChange }>
              </input>
              <input id="attemptsButton"
                     type="number"
                     placeholder="Attempts"
                     name="attempts"
                     onChange={ this.handleChange }>
              </input>
              <button onClick={ this.addNewLog }>Log</button>
            </div>
          {/* </form> */}
        </section>
      </div>
    )
  }
}

export default Input;