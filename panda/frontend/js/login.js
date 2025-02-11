const inputEmail = document.getElementById('input-email');
const emailError = document.getElementById('email-error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 확인 정규표현식
let isEmailOk = false;

inputEmail.addEventListener('focusin', (event) => {
  // 포커스인 테두리 설정
  inputEmail.style.borderColor = '#f3f4f6';
});

inputEmail.addEventListener('focusout', (event) => {
  event.preventDefault();
  if (inputEmail.value === '') {
    // 값이 없을 때
    console.log('값이 없음');
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.color = 'red';
    isEmailOk = false;
  } else if (emailRegex.test(inputEmail.value) === false) {
    // 이메일 형식이 아닐때
    console.log('이메일 형식이 아님');
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailError.style.color = 'red';
    isEmailOk = false;
  } else {
    isEmailOk = true;
  }
  // 상태값에 따라 스타일 설정
  if (isEmailOk === false) {
    inputEmail.style.borderColor = 'red';
    inputEmail.style.borderWidth = '2px';
  } else {
    emailError.textContent = '';
    inputEmail.style.borderColor = '#f3f4f6';
    console.log("올바른 이메일 형식입니다!")
  }
});