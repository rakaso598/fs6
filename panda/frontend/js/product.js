import axios from "axios";

const getProductListURL =
  "https://panda-market-api-crud.vercel.app/products?page=1&pageSize=10&orderBy=recent";
const getProductList = async () => {
  const res = await axios.get(getProductListURL);
  return res.data;
};
const productList = await getProductList();
console.log(productList);

const getProductURL = "https://panda-market-api-crud.vercel.app/products/496";
const getProduct = async () => {
  const res = await axios.get(getProductURL);
  return res.data;
};
const product = await getProduct();
console.log(product);

const createProductURL = "https://panda-market-api-crud.vercel.app/products";
const createProductData = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};
const createProduct = async () => {
  const res = await axios.post(createProductURL, createProductData);
  return res.data;
};
const createProductResponse = await createProduct();
console.log(createProductResponse);

const deleteProductURL =
  "https://panda-market-api-crud.vercel.app/products/495";
const deleteProduct = async () => {
  const res = await axios.delete(deleteProductURL);
  return res.data;
};
const deleteProductResponse = await deleteProduct();
console.log(deleteProductResponse);

const patchProductURL = "https://panda-market-api-crud.vercel.app/products/496";
const patchProductData = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};
const patchProduct = async () => {
  const res = await axios.patch(patchProductURL, patchProductData);
  return res.data;
};
const patchProductResponse = await patchProduct();
console.log(patchProductResponse);
