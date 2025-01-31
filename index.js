'use strict';
const button = document.getElementById('btn');
const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
    input.addEventListener('keyup', () => {
        let currentInput = input;
        let nextInput = input.nextElementSibling;
        let previousInput = input.previousElementSibling;

            if (currentInput.value.length > 1) {
                currentInput.value = "";
                return;
            } 
            if(nextInput && nextInput.hasAttrbute('disabled') && currentInput.value !== "") {
                nextInput.removeAttribute('disabled');
                nextInput.focus();
            }
            if(e.key === 'Backspace') {
                input.forEach((input, index2) =>{
                    if(index <= index2 && previousInput) {
                        input.setAttribute('disabled', true);
                        currentInput.value = "";
                        previousInput.focus();
                    }
                })
            }
            if(!input[0].disabled && !input[4].value !== '') {
                button.classList.add('active');
                return;
            }else{
                button.classList.remove('active');
            }

    });
})
window.addEventListener('load', () => {
    inputs[0].focus();
})