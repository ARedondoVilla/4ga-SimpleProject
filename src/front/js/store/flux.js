const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null
		},
		actions: {
			createUser: data => {
				const endpoint = "https://3001-ef6fd197-7d44-4852-9aa0-2cc5b328b38e.ws-eu03.gitpod.io/api/users";
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
				const endpoint = "https://3001-ef6fd197-7d44-4852-9aa0-2cc5b328b38e.ws-eu03.gitpod.io/api/login";
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
					.then(data => console.log(data));
			}
		}
	};
};

export default getState;
