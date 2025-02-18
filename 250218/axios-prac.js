import axios from "axios";

/**
 * 여러 설문 응답 조회
 */

const getSurveys = async () => {
  // url 준비
  const url = new URL("https://learn.codeit.kr/api/color-surveys");

  // 파라미터 준비
  const params = {
    mbti: "intp",
    limit: 50,
  };

  // 엑시오스 요청
  const res = await axios.get(url, { params });

  // 결과
  return res.data;
};

// getSurveys의 프로미스 결과값 저장
const surveys = await getSurveys();
console.log(surveys);
