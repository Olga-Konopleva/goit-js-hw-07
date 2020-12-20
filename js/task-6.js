const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', event => {
    
    if(event.target.value.length === Number(event.target.dataset.length)) {
        inputRef.classList.add('valid');
    } else {
    inputRef.classList.add('invalid');
  }
});