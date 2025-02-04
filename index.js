'use strict';
const timerElement = document.querySelector('.timer');
const verifyButton = document.querySelector('.verifyButton');
const inputs = document.querySelectorAll('.otp-input');

window.onload = function() {
    startCountdown();
    setupInputs();
};
function startCountdown() {
    var timeLeft = 60;
    var interval = setInterval(function() {
      if (timeLeft <= 0) {
        clearInterval(interval);
        var anchor = document.createElement('a');
        anchor.href = '#';
        anchor.innerHTML = 'Resend OTP?';
        timerElement.innerHTML = "";
        timerElement.appendChild(anchor);
        disableInputs();
      } else {
        timerElement.innerHTML = 'Time remaining: ' + timeLeft + 's';
      }
      timeLeft -= 1;
    }, 1000); // Update every second
}
function setupInputs() {
    inputs.forEach(function(input, index) {
      input.addEventListener('input', function() {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
        checkInputs();
      });
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace') {
          if (input.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
          } else if (input.value.length === 1) {
            input.value = '';
          }
        }
      });
    });
  }

  function checkInputs() {
    var allFilled = true;
    inputs.forEach(function(input) {
      if (input.value.length !== 1) {
        allFilled = false;
      }
      if (input.value.length > 1) {
        input.value = "";
        return;
    } 
    });
    verifyButton.style.display = allFilled ? 'block' : 'none';
  }

  function disableInputs() {
    inputs.forEach(function(input) {
      input.disabled = true;
      input.value = " ";
    });
    verifyButton.disabled = true;
  }