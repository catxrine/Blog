import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-full pb-16 overflow-y-auto">
      <div className="h-screen pb-20 flex flex-col justify-center items-center m-auto">
        <h1 className="text-[140px] font-semibold text-gray-700">404</h1>
        <p className="text-gray-700 text-lg">
          Page not found. Check the address or
          <button
            onClick={() => navigate(-1)}
            className="text-purple-600 hover:underline pl-2"
          >
            Go back
          </button>
          .
        </p>
      </div>
    </div>
  );
}
