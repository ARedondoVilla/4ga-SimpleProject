import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const CreateUser = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	// const [email, setEmail] = useState("");
	// const [username, setUsername] = useState("");
	// const [firstName, setFirstName] = useState("");
	// const [password, setPassword] = useState("");

	const [email, setEmail] = useState("alexredondovilla@gmail.com");
	const [username, setUsername] = useState("alexredondo");
	const [firstName, setFirstName] = useState("Alex");
	const [password, setPassword] = useState("12345");

	const HandleSubmit = e => {
		const payload = {
			email: email,
			first_name: firstName, // SI PONEMOS LAS MISMAS CLAVES QUE EN PYTHON NO DA PROBLEMAS CON CORS
			username: username,
			password: password
		};
		// Para pasar del signup al login vamos a usar una funcion como paramentro llamada callback() en el actions.createUSer
		actions.createUser(payload, () => {
			history.push("/login");
		});
	};

	return (
		<div className="container">
			<div className="row text-center">
				<h1>Crea un usuario</h1>
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
					<label htmlFor={username}>Username</label>
					<input
						type="text"
						className="form-control"
						value={username}
						onChange={e => setUsername(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor={firstName}>First Name</label>
					<input
						type="text"
						className="form-control"
						value={firstName}
						onChange={e => setFirstName(event.target.value)}
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
