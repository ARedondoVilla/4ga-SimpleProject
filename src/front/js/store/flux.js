const baseUrl = "https://3001-a7922c47-739b-4d6a-b225-83394fcf757e.ws-eu03.gitpod.io/api";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: null
		},
		actions: {
			createUser: (data, callback) => {
				const endpoint = `${baseUrl}/users`;
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
					callback();
				});
			},
			userLogin: async data => {
				const actions = getActions();
				const endpoint = `${baseUrl}/login`;
				const method = "POST";
				const config = {
					method: method,
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(data)
				};
				await fetch(endpoint, config)
					.then(response => response.json())
					.then(data => {
						setStore({ token: data.token }); // EL DATA EN ESTA LINEA ES EL CONTENIDO DE LA RESPUESTA (return DE def login() EN routes.py)
						actions.test();
					});
			},
			test() {
				const store = getStore();
				console.log("token: ", store.token);
				const endpoint = `${baseUrl}/test`;
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
