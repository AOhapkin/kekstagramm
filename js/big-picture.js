const bigPicture = document.querySelector('.big-picture');
const image = bigPicture.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCounterBlock = bigPicture.querySelector('.social__comment-count');
const commentsTotalCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');

let comments = [];

function clearComments() {
    commentsList.innerHTML = '';
}

function setCommentCounter() {
    commentsCounterBlock.innerHTML = `${commentsList.children.length} из <span class="comments-count">${comments.length}</span> комментариев`;
}

function renderBigPicture(data) {
    console.log(data);

    image.src = data.url
    image.alt = data.description;
    likesCount.textContent = data.likes;
    commentsTotalCount.textContent = data.comments.length;
    comments = data.comments;
    clearComments();
    if (comments.length > 0) {
        // showComments();
    }
    setCommentCounter();
}

function showBigPicture(pictureData) {

    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');

    renderBigPicture(pictureData);
}

export {showBigPicture}
