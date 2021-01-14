import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const HandleSubmit = e => {
		const payload = {
			email: email,
			password: password
		};
		actions.userLogin(payload);
	};

	return (
		<div className="container">
			<div className="row text-center">
				<h1>Log In</h1>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor={email}>Email</label>
					<input
						type="email"
						className="form-control"
						value={email}
						onChange={e => setEmail(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor={password}>Password</label>
					<input
						type="password"
						className="form-control"
						value={password}
						onChange={e => setPassword(event.target.value)}
					/>
				</div>
				<button type="button" className="btn btn-primary" onClick={HandleSubmit}>
					Enviar
				</button>
			</form>
		</div>
	);
};
