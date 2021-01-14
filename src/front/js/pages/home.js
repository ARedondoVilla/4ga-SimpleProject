import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mt-5">
			<h1>Intento de creacion de un clon de Twitter</h1>
			<div className="row">
				<div className="col-6">
					<Link to="/login">
						<button type="button" className="btn btn-primary">
							Log In
						</button>
					</Link>
				</div>
				<div className="col-6">
					<Link to="/signup">
						<button type="button" className="btn btn-primary">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};
