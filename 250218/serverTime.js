const res = await fetch("https://learn.codeit.kr/api/color-surveys");
const data = await res.json();

const serverTime = res.headers.get('Date');

function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'long', // 'long'으로 설정하면 'February'와 같이 월 이름으로 표시
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Asia/Seoul', // 한국 시간대로 설정
    hour12: false // 24시간 형식 사용 (true로 설정하면 12시간 형식)
  };

  return date.toLocaleDateString('ko-KR', options); // 한국어 locale을 사용하여 날짜 및 시간 형식 지정
}

const formattedTime = formatDate(serverTime);
console.log(formattedTime); // 예: 2025년 2월 18일 10:06