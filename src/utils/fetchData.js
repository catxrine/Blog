export const baseUrl = "http://localhost:8000";

export function fetchData({ url, auth = "", method, body }) {
  let options = {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      jwt: auth,
    },
  };

  return fetch(`${baseUrl}${url}`, options).then(async (res) => {
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    return data;
  });
}
