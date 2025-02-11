const inputEmail = document.getElementById('input-email');
const emailError =  document.getElementById('email-error')

inputEmail.addEventListener('focusin', (event) => {
  // 포커스인 테두리 설정
  inputEmail.style.borderColor = '#f3f4f6';
})

inputEmail.addEventListener('focusout', (event) => {
  event.preventDefault();
  // 포커스아웃 감지 시
  if (inputEmail.value === '') {
    console.log('값이 없음');
    inputEmail.style.borderColor = 'red';
    inputEmail.style.borderWidth = '2px';
    emailError.textContent = '이메일을 입력해주세요.';
    
  } else {
    inputEmail.style.borderColor = '#f3f4f6';
    emailError.textContent = '';
    emailError.style.color = 'red';
  }
});