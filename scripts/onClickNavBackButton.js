
let backButton = document.getElementById('back-button');

function onClickPrevPage() {
    history.go(-1);
}

backButton.addEventListener("click", onClickPrevPage);

