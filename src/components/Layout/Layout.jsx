import NavigationBar from "./NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
export default function PublicLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
