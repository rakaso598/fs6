const myNumberTag = document.getElementById('myNumber');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

let myNumber = +myNumberTag.textContent;

decreaseBtn.onclick = function () {
  myNumber--;
  myNumberTag.textContent = myNumber;
  console.log(myNumber); // 콘솔에 화면과 같은 숫자 출력
};

increaseBtn.onclick = function () {
  console.log("increase btn cliecked!")
  myNumber++;
  myNumberTag.textContent = myNumber;
};

const colorBtns = document.getElementsByClassName('color-btn');
console.log(colorBtns);
console.log(colorBtns[0]);

for (let btn of colorBtns) {
  btn.onclick = function () {
    myNumberTag.style.color = btn.dataset.color;
  };
}

const btns = document.getElementById('btns');
console.log(btns.children);
console.log(btns.parentElement);
console.log(btns.previousElementSibling);
console.log(btns.nextElementSibling);

// console.log(colorBtns[1].previousElementSibling);
// console.log(colorBtns[1].nextElementSibling);

// const orange = btns.children[1].children[1];

// ID는 하나만 지정하지만 CLASS는 여러개일수 있으므로,
// CLASS로 get하면 컬렉션이 반환됨. 그래서 컬렉션에서 [index] 번호를 지정해줘야 하나를 골라낼 수 있음.
const orangeOnlyHTMLCollection = document.getElementsByClassName('orange'); // orange를 get 하는 컬렉션 반환 및 저장
const orange = orangeOnlyHTMLCollection[0]; // 컬렉션에서 0번째 값만 저장


console.log(orange.previousElementSibling);
console.log(orange.nextElementSibling);

// btns.children[1].children[4].previousElementSibling // 타고타고 들어가서 선택도 가능

console.log(document.getElementById('increase')); // OK
const increaseXXX = document.getElementById('increase');

console.log(increaseXXX.parentElement.parentElement.children[1].children[3]);
const greenBtn = increaseXXX.parentElement.parentElement.children[1].children[3];

console.log("그린버튼= ", greenBtn);