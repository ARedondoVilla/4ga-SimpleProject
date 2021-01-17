import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<h1>Perfil de usuario</h1>
		</div>
	);
};
