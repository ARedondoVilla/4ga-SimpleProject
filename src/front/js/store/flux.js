const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: null
		},
		actions: {
			createUser: data => {
				const endpoint = "https://3001-a8577a9d-5150-4641-8f98-4c0f77437a36.ws-eu03.gitpod.io/api/users";
				const method = "POST";
				const config = {
					method: method,
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				};
				fetch(endpoint, config).then(response => {
					console.log(response);
				});
			},
			userLogin: data => {
				const actions = getActions();
				const endpoint = "https://3001-a8577a9d-5150-4641-8f98-4c0f77437a36.ws-eu03.gitpod.io/api/login";
				const method = "POST";
				const config = {
					method: method,
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(data)
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({ token: data.token }); // EL DATA EN ESTA LINEA ES EL CONTENIDO DE LA RESPUESTA (return DE def login() EN routes.py)
						actions.test();
					});
			},
			test() {
				const store = getStore();
				console.log("token: ", store.token);
				const endpoint = "https://3001-a8577a9d-5150-4641-8f98-4c0f77437a36.ws-eu03.gitpod.io/api/test";
				const method = "GET";
				const config = {
					method: method,
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${store.token}` // CUIDADO CON EL ACENTO, NO ES UNA COMILLA (`)=>OK (')=>NO OK
						// TODAS LAS PETICIONES QUE DEPENDAN DE UN USUARIO TIENE QUE TENER LA LINEA DE CODIGO 49
					}
				};
				fetch(endpoint, config)
					.then(response => response.json())
					.then(data => console.log(data));
			}
		}
	};
};

export default getState;
