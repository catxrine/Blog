import { Link } from "react-router-dom";

export default function ProfileIntro({ data, button = true }) {
  return (
    <div className="sidebar-box">
      <div className="bio text-center">
        <div className="bio-body">
          <h2>{data?.creator.name}</h2>
          <p className="mb-2">{data?.creator.bio || ""}</p>
          {button && (
            <Link
              to={`/user/${data?.creator.id}`}
              className="btn-variant-1 text-white"
            >
              Check out my profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
