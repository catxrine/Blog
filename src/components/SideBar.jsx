import SideBarOption from "./SideBarOption";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <aside className="w-56 overflow-y-auto bg-white md:block">
      <div className="py-4 text-gray-600">
        <span
          onClick={() => navigate("/")}
          className="material-symbols-outlined transition-colors duration-150 hover:text-gray-800 float-right cursor-pointer"
        >
          logout
        </span>
        <ul className="mt-6">
          <SideBarOption
            label="Admin Panel"
            icon="admin_panel_settings"
            navigateTo="admin-panel"
          />
          <SideBarOption label="Home" icon="home" navigateTo="/home" />
          <SideBarOption label="Profile" icon="person" navigateTo="profile" />
          <SideBarOption
            label="Settings"
            icon="settings"
            navigateTo="settings"
          />
        </ul>
      </div>
    </aside>
  );
}
