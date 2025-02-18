import axios from "axios";

const baseURL = "https://learn.codeit.kr/api/color-surveys";

const instance = axios.create({ baseURL });

const handleError = (func) => {
  try {
    return func();
  } catch (e) {
    if (e.response) {
      console.log(e.response.status);
      console.log(e.response.data);
    } else {
      console.log("request failed");
    }
  }
};

/**
 * 설문 응답 생성
 */
const createSurvey = (data) => {
  return handleError(async () => {
    const res = await instance.post("/", data);
    return res.data;
  });
};

/**
 * 여러 설문 응답 조회
 */
const getSurveys = async (params) => {
  return handleError(async () => {
    const res = await instance.get("/", { params });
    return res.data;
  });
};

/**
 * 단일 설문 조회
 */
const getSurvey = async (id) => {
  const res = await instance.get(`/${id}`);
  return res.data;
};

/**
 * 설문 삭제
 */
const deleteSurvey = async (id, password) => {
  const res = await instance.delete(`/${id}`, { password });
  return res.data;
};

/**
 * 설문 수정
 */
const updateSurvey = async (id, data) => {
  const res = await instance.patch(`/${id}`, data);
  return res.data;
};

// const surveys = await getSurveys({
//   mbti: 'enfj',
//   limit: 50,
// })
// console.log(surveys)

// export { createSurvey, getSurveys, getSurvey, deleteSurvey, updateSurvey };

export default baseURL;
