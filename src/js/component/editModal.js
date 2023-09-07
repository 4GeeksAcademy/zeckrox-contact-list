import React from "react";
import "../../styles/modalsito.css";

export const EditModal = (modal) => (
<div style={{position:"absolute", visibility:modal.visibility}}>
    <div className="modalsito-background"></div>
	<div className="modalsito">
        <span className="modalsito-inside">
            <h2>Edit contact</h2>
		    <label>Full name</label>
		    <input onChange={(text)=>setFull_name(text.target.value)}></input>
		    <label>Email</label>
		    <input onChange={(text)=>setEmail(text.target.value)}></input>
		    <label>Phone</label>
		    <input onChange={(text)=>setPhone(text.target.value)}></input>
		    <label>Address</label>
		    <input onChange={(text)=>setAddress(text.target.value)}></input>
		    <span style={{display:"flex", justifyContent: "flex-end"}}>
                <button onClick={modal.onClick}>Discard changes</button>
                <button onClick={modal.onClick}>Save</button>
            </span>
        </span>  
    </div>
</div>
);