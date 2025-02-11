const inputEmail = document.getElementById('input-email');
const emailError = document.getElementById('email-error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 확인정규표현식
let isEmailOk = false;

const inputPw = document.getElementById('input-pw');
const pwError = document.getElementById('pw-error');
let isPwOk = false;

/* ************ Email 이메일 ************* */
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
/* ************************************* */


/* ************ Pw 비밀번호 ************* */
inputPw.addEventListener('focusin', (event) => {
  // 포커스인 테두리 설정
  inputPw.style.borderColor = '#f3f4f6';
});

inputPw.addEventListener('focusout', (event) => {
  event.preventDefault();
  if (inputPw.value === '') {
    // 값이 없을 때
    console.log('비밀번호가 없음');
    pwError.textContent = '비밀번호를 입력해주세요.';
    pwError.style.color = 'red';
    isPwOk = false;
  } else if ((inputPw.value.length < 8) === true) {
    // 값이 8자 미만일 경우
    console.log('비밀번호 8자 미만임.');
    pwError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    pwError.style.color = 'red';
    isPwOk = false;
  } else {
    isPwOk = true;
  }
  // 상태값에 따라 스타일 설정
  if (isPwOk === false) {
    // 빈 값이 있거나 에러 메세지가 있는 경우 -> 로그인 버튼 비활성화
    inputPw.style.borderColor = 'red';
    inputPw.style.borderWidth = '2px';
  } else {
    // 유효한 값이 입력되면 로그인 버튼이 활성화 -> "/items" 이동
    pwError.textContent = '';
    inputPw.style.borderColor = '#f3f4f6';
    console.log("올바른 비밀번호 형식입니다!")
  }
});
/* ************************************* */