import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const CreateUser = () => {
	const { store, actions } = useContext(Context);

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="container">
			<div className="row text-center">
				<h1>Crea un usuario</h1>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput">Email</label>
					<input type="email" className="form-control" value={email} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput2">Username</label>
					<input type="text" className="form-control" value={username} />
				</div>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput2">Password</label>
					<input type="text" className="form-control" value={password} />
				</div>
				<button type="button" className="btn btn-primary">
					Enviar
				</button>
			</form>
		</div>
	);
};
