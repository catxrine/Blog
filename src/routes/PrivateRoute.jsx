export default function PrivateRoute({ children, redirectPath = "/" }) {
  const user = localStorage.getItem("auth");
  return user ? children : (window.location.pathname = redirectPath);
}
