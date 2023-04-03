import {showBigPicture} from "./big-picture.js";

function findElementById(id, array) {
    return array.find(element => element.id === +id);
}

function renderPictures(data) {
    const picturesContainer = document.querySelector('.pictures');
    const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
    const picturesFragment = document.createDocumentFragment();

    for (let i = 0; i < data.length; i++) {
        let picture = pictureTemplate.cloneNode(true);
        picture.querySelector('.picture__img').src = data[i].url;
        picture.querySelector('.picture__img').alt = data[i].alt;
        picture.querySelector('.picture__comments').textContent = data[i].comments.length;
        picture.querySelector('.picture__likes').textContent = data[i].likes;
        picture.dataset.id = data[i].id;
        picturesFragment.append(picture);
    }
    picturesContainer.append(picturesFragment);
    picturesContainer.addEventListener('click', (evt) => {
        if (evt.target.closest('.picture')) {
            const id = evt.target.closest('.picture').dataset.id;
            console.log(id);
            showBigPicture(findElementById(id, data));
        }
    });
}

export {renderPictures};
