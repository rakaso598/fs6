// import * as api from "./index.js";
import asdf, { getSurveys, deleteSurvey as removeSurvey } from './index.js'

const surveys = await api.getSurveys({
  mbti: "enfj",
  limit: 50,
});
console.log(surveys);

await api.removeSurvey(300, "1234")