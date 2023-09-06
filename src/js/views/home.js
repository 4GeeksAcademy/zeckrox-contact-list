import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard";


export const Home = props => {
	const { store, actions } = useContext(Context);

	return (<div className="text-center mt-5">
		{store.contactList.map((contact)=>(<ContactCard
			key={contact.id}
			image={contact.id}
			name={contact.full_name}
			address={contact.address}
			phone={contact.phone}
    		email={contact.email}/>))}
	</div>)}
;


