import React, {Component} from 'react';

export default class Register extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirmation: ""
		}
	}

	updateInputState = (e) => {
		const inputFieldName = e.target.name;
		this.setState({[inputFieldName]: e.target.value}, () => {
			console.log(this.state[inputFieldName]);
		});
	}

	sendUserInfo = () => {
		if (this.state.password === this.state.passwordConfirmation) {
			fetch('http://localhost:3002/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					"username": this.state.username,
					"email": this.state.email,
					"password": this.state.password,
				})
			})
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
		}
		else {
			console.log("Passwords do not match.");
		}
	}

	render() {
		return (
			<div>
				<div>Register User</div>
				<input
				name="username"
				onChange={this.updateInputState}
				className=""
				type="text"
				placeholder="username"
				/>
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
				name="passwordConfirmation"
				onChange={this.updateInputState}
				className=""
				type="password"
				placeholder="confirm password"
				/>
				<input
				onClick={this.sendUserInfo}
				className=""
				type="submit"
				value="Log In"
				/>
			</div>
		);
	}
}
