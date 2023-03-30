
function renderPictures(data) {
    const PICTURES_CONTAINER = document.querySelector('.pictures');
    const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
    const picturesFragment = document.createDocumentFragment();

    for (let i = 0; i < data.length; i++) {
        let picture = pictureTemplate.cloneNode(true);
        picture.querySelector('.picture__img').src = data[i].url;
        picture.querySelector('.picture__img').alt = data[i].alt;
        picture.querySelector('.picture__comments').textContent = data[i].comments.length;
        picture.querySelector('.picture__likes').textContent = data[i].likes;
        picturesFragment.append(picture);
    }
    PICTURES_CONTAINER.append(picturesFragment);
}

export {renderPictures};
