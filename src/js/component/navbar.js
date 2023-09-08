import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link className="text-decoration-none" to="/">
				<span className="navbar-brand mb-0 mx-3 h1">Contact List💕</span>
			</Link>
			<div className="ml-auto">
				<Link to="/createContact">
					<button className="btn btn-primary mx-3">Create Contact</button>
				</Link>
			</div>
		</nav>
	);
};
