import { Link } from "react-router-dom";

export default function ProfileIntro({ username, bio, button = true }) {
  return (
    <div className="sidebar-box">
      <div className="bio text-center">
        <div className="bio-body">
          <h2>{username}</h2>
          <p className="mb-2">{bio}</p>
          {button && (
            <Link to="/user/1" className="btn-variant-1 text-white">
              Check out my profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
