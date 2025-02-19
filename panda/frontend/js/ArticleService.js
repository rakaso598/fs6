import axios from "axios";

// 핸들러
const requestErrorHandler = (e) => {
  if (e.response) {
    return `요청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.`;
  } else {
    return `현재 서버에 접속할 수 없습니다. 잠시 후 다시 시도해주세요.`;
  }
};

// 목록조회
const getArticleList = async (page, pageSize, orderBy = "recent", keyword) => {
  try {
    if (keyword) {
      const res = await axios.get(
        `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`
      );
      return res.data;
    } else {
      const res = await axios.get(
        `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
      );
      return res.data;
    }
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 개별조회
const getArticle = async (productId) => {
  try {
    const res = await axios.get(
      `https://panda-market-api-crud.vercel.app/articles/${productId}`
    );
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 생성
const createArticleURL = "https://panda-market-api-crud.vercel.app/articles";
const createArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const createArticle = async () => {
  try {
    const res = await axios.post(createArticleURL, createArticleData);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 삭제
const deleteArticleURL =
  "https://panda-market-api-crud.vercel.app/articles/495";
const deleteArticle = async () => {
  try {
    const res = await axios.delete(deleteArticleURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 수정
const patchArticleURL = "https://panda-market-api-crud.vercel.app/articles/427";
const patchArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const patchArticle = async () => {
  try {
    const res = await axios.patch(patchArticleURL, patchArticleData);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

export {
  getArticleList,
  getArticle,
  createArticle,
  deleteArticle,
  patchArticle,
};
