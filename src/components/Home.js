import React, { Component } from 'react';

class Home extends Component {

  state = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.signUp(this.state);
  }

  render() {
    return (
      <div>
        <h1>Sign up !!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" name="name" onChange={this.handleChange} />
          <input type="text" placeholder="username" name="username" onChange={this.handleChange} />
          <input type="text" placeholder="email" name="email" onChange={this.handleChange} />
          <input type="text" placeholder="password" name="password" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Register!</button>
        </form>
      </div>);
  }
}

export default Home;