import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/demo.css";

let id=4

export const Demo = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);

	const [ full_name, setFull_name ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ phone, setPhone ] = useState("");
	const [ address, setAddress ] = useState("");

	function contactAdd (){
		let response = actions.createContact(full_name, email, phone, address, id);
		if(response) navigate("/");
		if(!response) alert("Fill all fields");
	}

	return <div className="container-div">
		<h1>Add a new contact</h1>
		<label>Full name</label>
		<input placeholder="Enter full name" onChange={(text)=>setFull_name(text.target.value)}></input>
		<label>Email</label>
		<input placeholder="Enter email" onChange={(text)=>setEmail(text.target.value)}></input>
		<label>Phone</label>
		<input placeholder="Enter phone" onChange={(text)=>setPhone(text.target.value)}></input>
		<label>Address</label>
		<input placeholder="Enter address" onChange={(text)=>setAddress(text.target.value)}></input>
		<button onClick={()=>contactAdd()}>Save</button>
	</div>
}
