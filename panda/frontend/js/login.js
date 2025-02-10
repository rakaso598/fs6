const emailInput = document.getElementById('input-email');

emailInput.addEventListener('invalid', (event) => {
  event.preventDefault();
  console.log('이벤트감지')
  emailInput.style.borderColor = 'red';
});