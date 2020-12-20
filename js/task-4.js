const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;

decrementBtnRef.addEventListener('click', increment);

incrementBtnRef.addEventListener('click', decrement);

 function increment () {
    counterValue -= 1;
   spanRef.textContent = counterValue;
};

function decrement () {
    counterValue += 1;
   spanRef.textContent = counterValue;
};

