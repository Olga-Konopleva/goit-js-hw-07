const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
textRef.style.fontSize = '50px';

inputRef.addEventListener('input', inputEventHendler);

function inputEventHendler (event) {
    console.dir(event.target.value);
    textRef.style.fontSize = `${event.target.value}px`;
};

