import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const password = this.state.password;
    if (password.length === 0) {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>Password</p>
          <label>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            <i className="xMark" >&#10006;</i>
          </label>
          <p>A password is required</p>
        </form>
      );
    } else if (password.length < 8) {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>Password</p>
          <label>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            <i className="xMark" >&#10006;</i>
          </label>
          <p>A password is too short</p>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <p>Password</p>
          <label>
            <input type="password" value={this.state.value} onChange={this.handleChange} />
            <i className="checkMark" >&#10004;</i>
          </label>
        </form>
      );
    }
  }
}
