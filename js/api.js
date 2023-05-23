const API_URL = '';

function getData(onSuccess, onError) {
	return fetch(`${API_URL}/data`)
		.then((response) => response.json())
		.then((pictures) => {
			onSuccess(pictures);
		})
		.catch(() => {
			onError();
		});
}

// function sendData(onSuccess, onError, data)