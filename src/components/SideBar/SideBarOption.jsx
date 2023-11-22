import { useNavigate } from "react-router-dom";

export default function SideBarOption({ label, icon, navigateTo }) {
  const navigate = useNavigate();
  return (
    <li
      className="relative px-6 py-3 cursor-pointer"
      onClick={() => navigate(navigateTo)}
    >
      <a className="inline-flex items-center w-full text-lg font-semibold transition-colors duration-150 hover:text-gray-800">
        <span className="material-symbols-outlined">{icon}</span>
        <span className="ml-4">{label}</span>
      </a>
    </li>
  );
}
