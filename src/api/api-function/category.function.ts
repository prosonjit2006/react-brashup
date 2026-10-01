import api from "../api";

export const CategoryAdd = () => {};

export const getCategoryFns = async () => {
  try {
    const res = await api.get("/recipe");

    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};
