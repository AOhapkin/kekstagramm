const RANDOM_PICTURES_COUNT = 10;

function setFilterDefault(pictures) {
	return pictures.sort((a, b) => a.id > b.id ? 1 : -1);
}

function setFilterRandom(pictures) {
	const randomPictures = pictures.slice().sort(() => Math.random() - 0.5);
	return randomPictures.slice(0, RANDOM_PICTURES_COUNT);
}

function setFilterDiscussed(pictures) {
	return pictures.sort((a, b) => b.comments.length - a.comments.length);
}

export { setFilterDefault, setFilterRandom, setFilterDiscussed }