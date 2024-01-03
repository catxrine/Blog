import { fetchData } from "../utils/fetchData";

export function getPosts(currentPage) {
  return fetchData({
    url: `/api/posts?page=${currentPage}`,
    method: "GET",
  });
}

export function getArticle(id) {
  return fetchData({
    url: `/api/post/${id}`,
    method: "GET",
  });
}
