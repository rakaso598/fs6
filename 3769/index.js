const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function() {
  myNumber--;
  myNumberTag.textContent = myNumber;
  console.log(myNumber); // 콘솔에 화면과 같은 숫자 출력
};

increaseBtn.onclick = function() {
  console.log("increase btn cliecked!")
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');
console.log(colorBtns);
console.log(colorBtns[0]);

for (let btn of colorBtns) {
  btn.onclick = function() {
    myNumberTag.style.color = btn.dataset.color;
  };
}

const btns = document.getElementById('btns');
console.log(btns.children);
console.log(btns.parentElement);
console.log(btns.previousElementSibling);
console.log(btns.nextElementSibling);

console.log(colorBtns[1].previousElementSibling);
console.log(colorBtns[1].nextElementSibling);