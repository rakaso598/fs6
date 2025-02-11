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


/* ************로그인버튼로직************ */
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const userForm = document.getElementById('user-form'); // 폼 객체
  const email = document.getElementById('input-email').value; // 이메일 값
  const password = document.getElementById('input-pw').value; // 비밀번호 값

  const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
  ];

  if (USER_DATA[email] === password) {
    form.submit();
  } else {
    alert('비밀번호가 일치하지 않습니다.')
    isPwOK = false;
    userForm.reset();
    updateButtonState();
  }
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


/* **************유저데이터************** */
// const USER_DATA = [
//   { email: 'codeit1@codeit.com', password: "codeit101!" },
//   { email: 'codeit2@codeit.com', password: "codeit202!" },
//   { email: 'codeit3@codeit.com', password: "codeit303!" },
//   { email: 'codeit4@codeit.com', password: "codeit404!" },
//   { email: 'codeit5@codeit.com', password: "codeit505!" },
//   { email: 'codeit6@codeit.com', password: "codeit606!" },
// ]
/* ************************************* */


