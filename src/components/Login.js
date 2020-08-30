import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const history = useHistory();
	const login = (event) => {
		event.preventDefault(); //STOPS REFRESH
		//FIREBASE LOGIN LOGIC
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//logged in and redirect to home page
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};
	const register = (event) => {
		event.preventDefault(); //STOPS REFRESH
		//FIREBASE REGISTER LOGIC
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt="Go back to Home page"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>E-mail(phone for mobile accounts)</h5>

					<input value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
					<h5>Password</h5>
					<input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
					<button onClick={login} type="submit" className="login__signInButton">
						Sign In
					</button>
				</form>
				<p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
