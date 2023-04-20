"use strict"

document.querySelector('.open-button').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('open');
});
document.querySelector('.modal__close-button').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('open');
});
