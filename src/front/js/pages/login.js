import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const [email, setEmail] = useState("alexredondovilla@gmail.com");
	const [password, setPassword] = useState("12345");

	const HandleSubmit = async e => {
		const payload = {
			email: email,
			password: password
		};
		// Para pasar del login al perfil vamos a usar las herramientas async y await aqui como en el flux
		await actions.userLogin(payload);
		history.push("/profile");
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
