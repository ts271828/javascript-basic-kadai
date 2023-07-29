const button = document.querySelector('#btn');
const text = document.querySelector('#text');

function change_text() {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
};

button.addEventListener('click', change_text);