import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    persons: []
  }

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    axios.get(`https://jsonplaceholder.typicode.com/users`, {user})
      .then(res => {
        console.log(res.data);
        console.log(user);
        this.setState({ persons: res.data });
      });
  }

  render() {
    return(
      
      <form onSubmit={this.handleSubmit}>
      <ul>
        {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
        {/* <input type="text" placeholder="First name" name="firstName"></input>
        <input type="text" placeholder="Last name" name="lastName"></input> */}
        <input type="email" placeholder="Email" name="email" onChange={this.handleChange}></input>
        <input type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
        <input type="password" placeholder="Confirm password" name="confirmPassword" onChange={this.handleChange}></input>
        <button>Submit</button>
      </form>
    )
  }
}

export default SignUp;