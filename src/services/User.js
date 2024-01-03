import { fetchData } from "../utils/fetchData";

export function registerUser(params) {
  return fetchData({
    url: "/api/register",
    method: "POST",
    body: { ...params },
  });
}

export function logIn(params) {
  return fetchData({
    url: "/api/login",
    method: "POST",
    body: { ...params },
  });
}
