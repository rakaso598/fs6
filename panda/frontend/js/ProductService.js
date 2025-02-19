import axios from "axios";

// 핸들러
const requestErrorHandler = (e) => {
  if (e.response) {
    console.error(`${e.response.status},${e.response.data}`);
    return `${e.response.status},${e.response.data}`;
  } else {
    console.error(e.message);
    return `${e.message}`;
  }
};

// 상품목록
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
const productList = await getProductList();
console.log(productList);

// 상품
const getProductURL = "https://panda-market-api-crud.vercel.app/products/496";
const getProduct = async () => {
  try {
    const res = await axios.get(getProductURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};
const product = await getProduct();
console.log(product);

// 상품생성
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
const createProductResponse = await createProduct();
console.log(createProductResponse);

// 상품삭제
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
const deleteProductResponse = await deleteProduct();
console.log(deleteProductResponse);

// 상품수정
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
const patchProductResponse = await patchProduct();
console.log(patchProductResponse);
