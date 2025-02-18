// DELETE /api/color-surveys/:id

import axios from "axios";

const deleteSurvey = async (id, password) => {
  try {
    const url = new URL(`https://learn.codeit.kr/api/color-surveys/${id}`);
    const res = await axios.delete(url, { password });
    return res.data;
  } catch (e) {
    if (e.response) {
      console.log(e.reponse.status);
      console.log(e.reponse.data);
    } else {
      console.log("request failed");
    }
  }
};
