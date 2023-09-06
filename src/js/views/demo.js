import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

let id=4

export const Demo = () => {
	const { store, actions } = useContext(Context);
	let full_name = ""
	let email = ""
	let phone = ""
	let address = ""

	return <div className="container-div">
		<h1>Add a new contact</h1>
		<label>Full name</label>
		<input placeholder="Enter full name" onChange={(text)=>{full_name=text.target.value}}></input>
		<label>Email</label>
		<input placeholder="Enter email" onChange={(text)=>{email=text.target.value}}></input>
		<label>Phone</label>
		<input placeholder="Enter phone" onChange={(text)=>{phone=text.target.value}}></input>
		<label>Address</label>
		<input placeholder="Enter address" onChange={(text)=>{address=text.target.value}}></input>
		<Link to="/"><button onClick={()=>{actions.createContact(full_name, email, phone, address, id)}}>Save</button></Link>
	</div>
}
