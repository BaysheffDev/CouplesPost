import React, {Component} from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  updateInputState = (e) => {
    const inputFieldName = e.target.name;
    this.setState({[inputFieldName]: e.target.value}, () => {
      console.log(this.state[inputFieldName]);
    });
  }

  authenticateUser = () => {
    const token = window.sessionStorage.getItem('token');
    console.log("Authenticate User");
    fetch('http://localhost:3002/user/login', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        'authorization': token
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  loginUser = () => {
    fetch('http://localhost:3002/user/login', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      window.sessionStorage.setItem('token', data.token);
    })
  }

  render() {
    return (
      <div>
				<div>Login</div>
				<input
				name="email"
				onChange={this.updateInputState}
				className=""
				type="email"
				placeholder="email"
				/>
				<input
				name="password"
				onChange={this.updateInputState}
				className=""
				type="password"
				placeholder="password"
				/>
				<input
				onClick={this.loginUser}
				className=""
				type="submit"
				value="Log In"
				/>
        <input
				onClick={this.authenticateUser}
				className=""
				type="submit"
				value="Auth"
				/>
			</div>
    );
  }

}
