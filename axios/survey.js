import * as api from "./index.js";

const surveys = await api.getSurveys({
  mbti: "enfj",
  limit: 50,
});
console.log(surveys);

await api.deleteSurvey(300, "1234")