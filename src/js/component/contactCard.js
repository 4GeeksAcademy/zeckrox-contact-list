import React from "react";
export const ContactCard = (contact)=>{

    return <><div className="contact-div">
        <img className="contact-photo" src={`https://i.pravatar.cc/?img=${contact.image}`} alt="Contact image"/>
        <div className="d-flex w-100 justify-content-between">
            <span className="left-span">
            <span><h3>{contact.name}</h3></span>
            <span className="inside-span"><i className="fa-solid fa-location-dot"></i><p>{contact.address}</p></span>
            <span className="inside-span"><i className="fa-solid fa-phone"></i><p>{contact.phone}</p></span>
            <span className="inside-span"><i className="fa-solid fa-envelope"></i><p>{contact.email}</p></span>
            </span>
        <span className="right-span"><i onClick={contact.pencil} className="fa-solid fa-pencil"></i><i onClick={contact.trash} className="fa-solid fa-trash"></i></span>
        </div>
        </div>
        </>
}