import { get, post, del, patch } from "../utils/request";
export const getProductList = async () => {
  const result = await get("product");
  return result;
};

export const createProduct = async (data) => {
  const result = await post("product", data);
  return result;
};

export const deleteProduct = async (id) => {
  const result = await del(`product/${id}`);
  return result;
};

export const editProduct = async (id, option) => {
  const result = await patch(`product/${id}`, option);
  return result;
};

export const getDetailProduct = async (id) => {
  const result = await get(`product/${id}`);
  return result;
};


