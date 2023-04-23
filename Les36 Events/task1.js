"use strict";

document.addEventListener('keydown', (event) => {
    if (event.code === 'ControlLeft') {
        event.preventDefault();
    }
    if (event.code === 'KeyE' || event.code === 'KeyS') {
        event.preventDefault();
    }
});

const createParagraph = function() {
    let newParagraph = document.createElement('div');
    newParagraph.classList.add('saved-text');
    newParagraph.textContent = document.querySelector('.textarea').value;
    document.body.appendChild(newParagraph);
}

const createTextArea = function() { 
    let textarea = document.createElement('textarea');
    textarea.value = document.querySelector('.saved-text').textContent;
    textarea.classList.add('textarea');
    textarea.style.fontSize = '20 px';
    textarea.cols = 38;
    document.body.appendChild(textarea);
}


document.onkeydown = function (event) {
    if (event.code === 'ControlLeft') {
        document.onkeyup = function (event) {
            if (event.code === 'KeyE') {
                createTextArea();
                document.querySelector('.saved-text').remove();
            } 
            else if (event.code === 'KeyS') {
                createParagraph();
                document.querySelector('.textarea').remove();
            }
            document.onkeyup = null;
        }
    }
}

