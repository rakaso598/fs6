// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list');

// li 요소 하나하나마다 클릭했을 때 요소에 done이라는 클래스를 토글
for (let item of list.children) { // list의 요소를 item에 각각 담음
	item.addEventListener('click', function(e) { // item에 클릭이 일어남녀 함수 실행
		e.target.classList.toggle('done') // 이벤트가 일어난 요소의 클레스에 done 토글
	})
}

const li = document.createElement('li'); // li 요소 생성
li.classList.add('item'); // li에 item 속성 추가
li.textContent = "일기 쓰기"; // textContent에 일기 쓰기 추가
list.append(li); //

