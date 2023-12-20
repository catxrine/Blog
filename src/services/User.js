import { fetchData } from "../utils/fetchData";

export function registerUser(params, setErrorMessage) {
  fetchData({
    url: "/api/register",
    method: "POST",
    body: {
      email: params.email,
      password: params.password,
      name: params.name,
      c_password: params.repeatPassword,
    },
  }).then((res) => {
    if (res.success) {
      localStorage.setItem("jwt", res.data.token);
      window.location.pathname = `/user/${res.data.id}`;
    } else {
      setErrorMessage(Object.values(res.data));
    }
  });
}

export function logIn(params, setErrorMessage) {
  fetchData({
    url: "/api/login",
    method: "POST",
    body: { email: params.email, password: params.password },
  }).then((res) => {
    if (res.success) {
      localStorage.setItem("jwt", res.data.token);
      window.location.pathname = `/user/${res.data.id}`;
    } else {
      setErrorMessage(Object.values(res.data));
    }
  });
}
