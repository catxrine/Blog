import Layout from "../../components/Layout.jsx";
import SideBar from "../../components/SideBar.jsx";
import { Outlet } from "react-router-dom";

export default function Home() {
  return <Layout left={<SideBar />} right={<Outlet />} />;
}
