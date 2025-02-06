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

let list = document.getElementById('list');
const addListBtn = document.getElementById('add-list');

addListBtn.onclick = function () {
  list.innerHTML += '<li>Hello</li>';
  console.log(list.outerHTML);
};

const resetListBtn = document.getElementById('reset-list');
resetListBtn.onclick = function () {
  list.outerHTML = '<ul id="list"></ul>';
  list = document.getElementById('list');
};

const updateListBtn = document.getElementById('update-list');
updateListBtn.onclick = function () {

  // <ul> 태그를 <ol> 태그로 변경
  const itemsString = list.innerHTML; // 이너html 저장
  console.log(list.innerHTML);
  console.log(list.outerHTML);
  list.outerHTML = '<ol id="list"></ol>'; // ol태그로 변경
  list = document.getElementById('list'); // list 재선택
  list.innerHTML = itemsString; // list의 이너html을 itemsString 다시 assign.

}

// innerHTML 은 줄의 안쪽(태그제외)
// outerHTML 은 줄의 태그까지 포함 전부
// // textContent 은 콘텐트(내용만)

// changeListBtn.id // change-list
// orange.className // color-btn orange

const att1 = document.getElementById('att1');
const att2 = document.getElementById('att2');

att1.href = "https://google.com";
att2.href = "https://google.com";

console.log(att1.href);
console.log(att2.href);

// tag.getAttribute("href") // 속성을 출력해서 보여준다.
// tag.setAttribute("href", "https://google.com") // 속성에 값을 설정한다.
// tag.removeAttribute("href") // 속성을 제거한다.

// att2.getAttribute();

// att1.className = "color-btn orange";

// att1.classList.add("done"); // 요소의 클래스트리스트에 클래스 추가
// att1.classList.remove("done");
// att1.classList.add("done");

// att1.classList.contains("done"); // 요소의 클래스리스트에 done이 있는지 없는지

// document.getElementById('style').textContent


const item = document.getElementById('style')
item.onclick = function () {
  const isLarge = item.classList.contains('large');
  const isBlue = item.classList.contains('blue-text');
  
  if (!isLarge && !isBlue) {
    // 아무 효과가 없는 상태
    item.classList.add("large");
  } else if (isLarge && !isBlue) {
    // 글자 크기가 커진 상태
    item.classList.add('blue-text');
  } else {
    // 글자 크기가 크고 and 글자가 파란색인 상태
    item.classList.remove('large');
    item.classList.remove('blue-text');
  }
}


// if (document.getElementById('style').classList.contains(null)) {
//   document.getElementById('style').classList.add('step_1');
// }

// if (document.getElementById('style').classList.contains('step_1')) {
//   document.getElementById('style').classList.add('step_2');
// }

// if (document.getElementById('style').classList.contains('step_2')) {
//   document.getElementById('style').classList.remove('step_1','step_2');
// }



// // 폰트사이즈 포함
// document.getElementById('style').classList.contains('font-size')

// // 컬러 포함
// document.getElementById('style').classList.contains('color')