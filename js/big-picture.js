import {isEscEvent} from "./utils.js";

const bigPicture = document.querySelector('.big-picture');
const image = bigPicture.querySelector('img');
const imageCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCounterBlock = bigPicture.querySelector('.social__comment-count');
const commentsTotalCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment')
    .content
    .querySelector('.social__comment');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

let comments = [];
const MIN_COMMENTS_NUMBER = 5;
let maxCommentsOnDisplay = MIN_COMMENTS_NUMBER;

function clearComments() {
    commentsList.innerHTML = '';
}

function setCommentCounter() {
    commentsCounterBlock.innerHTML = `${commentsList.children.length} из <span class="comments-count">${comments.length}</span> комментариев`;
}

function createComment(commentData) {
    let comment = commentTemplate.cloneNode(true);
    let image = comment.querySelector('.social__picture');
    let text = comment.querySelector('.social__text');

    image.src = commentData.avatar;
    image.alt = commentData.name;
    text.textContent = commentData.message;

    return comment;
}

function showComments() {
    const fragment = document.createDocumentFragment();
    comments.slice(0, maxCommentsOnDisplay).forEach((comment) => {
        fragment.append(createComment(comment));
    });
    commentsList.append(fragment);

}

function renderBigPicture(data) {
    // console.log(data);

    image.src = data.url
    image.alt = data.description;
    imageCaption.textContent = data.description;
    likesCount.textContent = data.likes;
    commentsTotalCount.textContent = data.comments.length + '';
    comments = data.comments;
    clearComments();
    if (comments.length > 0) {
        showComments();
    }

    //временно
    commentsCounterBlock.classList.add('hidden');
    setCommentCounter();
}

function onCloseButtonClick() {
    closeBigPicture();
}

function onDocumentKeydown(event) {
    if (isEscEvent(event)) {
        closeBigPicture();
    }
}

function showBigPicture(pictureData) {

    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onDocumentKeydown);

    renderBigPicture(pictureData);
}

function closeBigPicture() {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    closeButton.removeEventListener('click', onCloseButtonClick);
}

export {showBigPicture}
