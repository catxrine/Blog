export default function ProfileIntro({ username, bio }) {
  return (
    <div className="sidebar-box">
      <div className="bio text-center">
        <div className="bio-body">
          <h2>{username}</h2>
          <p className="mb-4">{bio}</p>
          <p>
            <a className="btn-variant-1 text-white">Check out my profile</a>
          </p>
        </div>
      </div>
    </div>
  );
}
