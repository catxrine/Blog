import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return <Layout left={<SideBar />} right={<Outlet />} />;
}
