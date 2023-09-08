import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import "../../styles/createContact.css";

export const CreateContact = () => {
	const navigate = useNavigate()
	const { store, actions } = useContext(Context);
	const [ contact, setContact ] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
	})

	function contactAdd (){
		let response = actions.createContact(contact);
		if(response) navigate("/");
		if(!response) alert("Fill all fields");
	}

	return <div className="container-div">
		<h1>Add a new contact</h1>
		<label>Full name</label>
		<input placeholder="Enter full name" onChange={(text)=>setContact({...contact, full_name:text.target.value})}></input>
		<label>Email</label>
		<input placeholder="Enter email" onChange={(text)=>setContact({...contact, email:text.target.value})}></input>
		<label>Phone</label>
		<input placeholder="Enter phone" onChange={(text)=>setContact({...contact, phone:text.target.value})}></input>
		<label>Address</label>
		<input placeholder="Enter address" onChange={(text)=>setContact({...contact, address:text.target.value})}></input>
		<button onClick={()=>contactAdd()}>Save</button>
	</div>
}
