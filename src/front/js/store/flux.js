const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null
		},
		actions: {
			createUser: data => {
				const endpoint = "https://3001-ec1dd19e-a313-4c97-8825-19da154c8241.ws-eu03.gitpod.io/api/users";
				const method = "POST";
				const config = {
					method: method,
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(data)
				};
				fetch(endpoint, config).then(response => {
					console.log(response);
				});
			}
		}
	};
};

export default getState;
