import axios from "axios";

export const url = "https://ashykduken-api.herokuapp.com";

export const instance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const ItemsService = {
  get: () => instance.get("/"),
  getDetail: (id: Number) => instance.get(`/${id}/`),
};

export const CategoriesService = {
  get: () => instance.get("/categories"),
};
