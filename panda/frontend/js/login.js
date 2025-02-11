const inputEmail = document.getElementById('input-email');

inputEmail.addEventListener('focusin', (event) => {
  // 포커스인 테두리 설정
  inputEmail.style.borderColor = '#f3f4f6';
})

inputEmail.addEventListener('focusout', (event) => {
  event.preventDefault();
  // 포커스아웃 감지 시
  if (inputEmail.value === '') {
    inputEmail.style.borderColor = 'red';
    inputEmail.style.borderWidth = '2px';
    console.log('값이 없음');
  } else {
    inputEmail.style.borderColor = '#f3f4f6';
  }
});