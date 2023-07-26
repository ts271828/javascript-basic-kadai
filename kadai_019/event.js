const text = document.querySelector('#text');
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました'
})