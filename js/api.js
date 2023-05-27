const API_URL = 'https://25.javascript.pages.academy/kekstagram';

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

export { getData }