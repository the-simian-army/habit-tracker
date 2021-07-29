const jwt_decode = require('jwt-decode');

async function requestLogin(data) {
	try {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};
		const response = await fetch(`http://localhost:3000/auth/login`, options);
		const responseJson = await response.json();
		if (!responseJson.success) {
			throw new Error('Login not authorised');
		}
		login(responseJson.token);
	} catch (err) {
		window.alert(err.message);
		console.warn(err);
	}
}

async function requestRegistration(data) {
	try {
		const options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		};
		const response = await fetch(`http://localhost:3000/auth/register`, options);
		const responseJson = await response.json();
		if (!responseJson.msg) {
			throw Error(responseJson);
		}
		requestLogin(data);
	} catch (err) {
		if (
			err.message ===
			'Error creating user: error: duplicate key value violates unique constraint "users_pkey"'
		) {
			window.alert('Account with this email already exists.');
		}
		console.warn(err);
	}
}

function login(token) {
	const user = jwt_decode(token);
	localStorage.setItem('token', token);
	localStorage.setItem('name', user.name);
	localStorage.setItem('email', user.email);
	window.location.pathname = '/dashboard.html';
}

function logout() {
	localStorage.clear();
	window.location.pathname = '/';
}

module.exports = { requestLogin, requestRegistration, login, logout };
