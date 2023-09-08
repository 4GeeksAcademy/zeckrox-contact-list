const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [
				{
					"address": "Venezuela",
					"agenda_slug": "Zeckrox",
					"email": "stefano@boschetti.com",
					"full_name": "Stefano elLoco",
					"id": 1,
					"phone": "4149202732"
				},
				{
					"address": "Venezuela",
					"agenda_slug": "Zeckrox",
					"email": "stefano@boschetti.com",
					"full_name": "Stefano elLoco",
					"id": 2,
					"phone": "12412412412"
				},
				{
					"address": "Venezuela",
					"agenda_slug": "Zeckrox",
					"email": "stefano@boschetti.com",
					"full_name": "Stefano elLoco",
					"id": 3,
					"phone": "574564"
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			createContact: (contact, id) => {
				const store = getStore();
				if(contact.full_name=="" || contact.email=="" || contact.phone=="" || contact.address=="")return false

				setStore({...store, contactList:[...store.contactList, {...contact, id, "agenda_slug": "Zeckrox"}]});
				return true
			},
			deleteContact: (elm) => {
				const store = getStore();
				setStore({...store , contactList: store.contactList.filter(contacts => contacts.id != elm.id)})
			},
			editContact:(currentContact, contactNewInfo)=>{
				const store = getStore();
				let searchContact = store.contactList.find(person => currentContact.id == person.id)
				if(searchContact){
					contactNewInfo.full_name!=""? searchContact.full_name = contactNewInfo.full_name : ""
					contactNewInfo.email!=""? searchContact.email = contactNewInfo.email : ""
					contactNewInfo.phone!=""? searchContact.phone = contactNewInfo.phone : ""  
					contactNewInfo.address!=""?searchContact.address = contactNewInfo.address : ""
					setStore("")
				}
				return true
			},
		}
	};
};

export default getState;
