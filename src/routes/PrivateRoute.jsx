import { isAuth } from "../utils/user";

export default function PrivateRoute({ children, redirectPath = "/" }) {
  return isAuth ? children : (window.location.pathname = redirectPath);
}
