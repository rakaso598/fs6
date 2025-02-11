const inputEmail = document.getElementById('input-email');
const emailError = document.getElementById('email-error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 정규표현식
let isEmailOK = false;

const inputPw = document.getElementById('input-pw');
const pwError = document.getElementById('pw-error');
let isPwOK = false;

const btnSubmit = document.getElementById('btn-submit');

updateButtonState();

/* ************ Email 이메일 ************* */
inputEmail.addEventListener('focusin', (event) => {
  // 포커스인 테두리 설정
  inputEmail.style.borderColor = '#f3f4f6';
});

inputEmail.addEventListener('focusout', (event) => {
  event.preventDefault();
  if (inputEmail.value === '') {
    // 이메일이 없을 때
    console.log('이메일 입력 없음.');
    emailError.textContent = '이메일을 입력해주세요.';
    emailError.style.color = 'red';
    inputEmail.style.borderColor = 'red';
    inputEmail.style.borderWidth = '2px';
    isEmailOK = false;
  } else if (emailRegex.test(inputEmail.value) === false) {
    // 이메일 형식이 아닐때
    console.log('이메일 형식이 아님.');
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailError.style.color = 'red';
    inputEmail.style.borderColor = 'red';
    inputEmail.style.borderWidth = '2px';
    isEmailOK = false;
  } else {
    emailError.textContent = '';
    inputEmail.style.borderColor = '#f3f4f6';
    isEmailOK = true;
  }
  updateButtonState()
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
    // 비밀번호가 없을 때
    console.log('비밀번호 입력 없음.');
    pwError.textContent = '비밀번호를 입력해주세요.';
    pwError.style.color = 'red';
    inputPw.style.borderColor = 'red';
    inputPw.style.borderWidth = '2px';
    isPwOK = false;
  } else if ((inputPw.value.length < 8) === true) {
    // 값이 8자 미만일 경우
    console.log('비밀번호가 8자 미만임.');
    pwError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    pwError.style.color = 'red';
    inputPw.style.borderColor = 'red';
    inputPw.style.borderWidth = '2px';
    isPwOK = false;
  } else {
    pwError.textContent = '';
    inputPw.style.borderColor = '#f3f4f6';
    isPwOK = true;
  }
  updateButtonState()
});
/* ************************************* */


/* ************* 버튼 함수 ************* */
function updateButtonState() {
  btnSubmit.disabled = true;
  if ((isEmailOK && isPwOK) === false) {
    btnSubmit.disabled = true;
    console.log('<로그인버튼> 입력값 누락!');
    btnSubmit.style.backgroundColor = 'gray';
    btnSubmit.style.cursor = 'default';
  } else {
    console.log('<로그인버튼> 조건을 만족했습니다.');
    btnSubmit.style.backgroundColor = '#3691FF';
    btnSubmit.style.cursor = 'pointer';
    btnSubmit.disabled = false;
  }
}
/* ************************************* */

