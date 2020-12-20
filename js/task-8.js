const controlsRef =document.querySelector('#controls');
const inputRef = document.querySelector('input[type="number"]');
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');
// console.dir(inputRef.value);

// Рандомный цвет

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// Размер дива

const defaultSize = 30;

btnRenderRef.addEventListener('click', renderDiv);
btnDestroyRef.addEventListener('click', destroyDiv);

function renderDiv (amount) {
    // console.log(inputRef.value);
    amount = Number(inputRef.value);
    console.log(amount);
    const boxes = [];
    for(let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.backgroundColor = random_rgba();
        div.style.marginTop = '10px';
        div.style.width = `${defaultSize + 10*i}px`;
        div.style.height = `${defaultSize + 10*i}px`;
        boxes.push(div);
    }
    console.log(boxes);
    boxesRef.append(...boxes);
};

function destroyDiv () {
    while (boxesRef.firstChild) {
        boxesRef.removeChild(boxesRef.firstChild);
      }
}