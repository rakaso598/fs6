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
const getProductListURL =
  "https://panda-market-api-crud.vercel.app/products?page=1&pageSize=10&orderBy=recent";
const getProductList = async () => {
  try {
    const res = await axios.get(getProductListURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 개별조회
const getProductURL = "https://panda-market-api-crud.vercel.app/products/496";
const getProduct = async () => {
  try {
    const res = await axios.get(getProductURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 생성
const createProductURL = "https://panda-market-api-crud.vercel.app/products";
const createProductData = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};
const createProduct = async () => {
  try {
    const res = await axios.post(createProductURL, createProductData);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 삭제
const deleteProductURL =
  "https://panda-market-api-crud.vercel.app/products/495";
const deleteProduct = async () => {
  try {
    const res = await axios.delete(deleteProductURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

// 수정
const patchProductURL = "https://panda-market-api-crud.vercel.app/products/496";
const patchProductData = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};
const patchProduct = async () => {
  try {
    const res = await axios.patch(patchProductURL, patchProductData);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};

export {
  getProductList,
  getProduct,
  createProduct,
  deleteProduct,
  patchProduct,
};
