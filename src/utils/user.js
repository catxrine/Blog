export const isAuth = localStorage.getItem("jwt");
export const removeAuth = () => localStorage.removeItem("jwt");
