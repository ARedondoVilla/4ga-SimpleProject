import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const CreateUser = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const HandleSubmit = e => {
		console.log({
			email: email,
			username: username,
			password: password
		});
	};

	return (
		<div className="container">
			<div className="row text-center">
				<h1>Crea un usuario</h1>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Email</label>
					<input
						type="email"
						className="form-control"
						value={email}
						onChange={e => setEmail(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput2">Username</label>
					<input
						type="text"
						className="form-control"
						value={username}
						onChange={e => setUsername(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput2">Password</label>
					<input
						type="text"
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
