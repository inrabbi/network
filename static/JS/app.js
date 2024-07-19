// static/JS/app.js

document.getElementById('continue-btn').addEventListener('click', function(event) {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordDiv = document.querySelector('.password-input');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  
  if (!emailInput.value) {
    emailError.classList.remove('hidden');
  } else if (passwordDiv.style.display === 'none') {
    // Hide email error message and show password input
    emailError.classList.add('hidden');
    passwordDiv.style.display = 'block';
    passwordInput.focus();
  } else if (!passwordInput.value) {
    passwordError.classList.remove('hidden');
  } else {
    document.getElementById('form').submit();
  }
});
