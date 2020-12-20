const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', changeClass);

function changeClass (event) {
  if(event.target.value.length === Number(event.target.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
  inputRef.classList.add('invalid');
  event.target.classList.remove('valid');
}
}