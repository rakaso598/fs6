/*

post로 만든 녀석 id를 가지고, PATCH 요청과 DELETE 요청을 한번씩 해보자.

API문서 보면서 코드를 만들자.

*/

const surveyData = {
  "mbti": "ISTJ",
  "colorCode": "#000000",
  "password": "0124"
};

const url = new URL("https://learn.codeit.kr/api/color-surveys/14");
const res = await fetch(url, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(surveyData),
});

// const data = await res.json();
console.log(res);
