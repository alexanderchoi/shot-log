import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import mongoose from 'mongoose';

import '../styles/App.css';

import Input from './Input';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route exact path='/' component={ Input } />
          <Route path='/signup' component={ SignUp } />
        </div>
      </div>
    );
  }
}

export default App;