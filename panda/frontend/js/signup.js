const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
];

const signupBtn = document.getElementById('btn-submit');

// 1. 회원가입 버튼 클릭.
signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('회원가입 버튼 클릭됨.');
    
    const inputEmail = document.getElementById('input-email');
    // 2. 입력한 이메일이 데이터베이스에 존재하는지 확인.
    const findedUser = USER_DATA.find(user => user['email'] === inputEmail.value);
    if(findedUser) {
        alert('사용 중인 이메일입니다.');
    } else {
        alert('회원가입 성공! 로그인 페이지로 이동합니다.');
        // 3. 입력한 이메일이 데이터베이스에 없으면, 이동.
        window.location.href = "/login";
    }
});