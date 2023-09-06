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
					"address": "Miami",
					"agenda_slug": "Zeckrox",
					"email": "lio@goat.com",
					"full_name": "Lionel Messi",
					"id": 2,
					"phone": "565653232"
				},
				{
					"address": "En todos lados",
					"agenda_slug": "Zeckrox",
					"email": "chuito_god@sky.com",
					"full_name": "Jesucristo",
					"id": 3,
					"phone": "65623232323"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			createContact: (full_name, email, phone, address, id) => {
				const store = getStore();
				if(full_name=="" || email=="" || phone=="" || address==""){return alert("Fill all fields")}
				setStore({...store, contactList:[...store.contactList, {full_name, email, phone, address, id, "agenda_slug": "Zeckrox"}]});
				id++
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		}
	};
};

export default getState;
