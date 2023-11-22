export default function Comment({ username, comment, date }) {
  return (
    <li className=" mb-8 pt-4">
      <div className="comment-area-box">
        <h5 className="mb-1">{username}</h5>

        <div className="comment-content mt-3">
          <p>{comment}</p>
        </div>
        <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
          <span className="date-comm font-semibold">{date}</span>
        </div>
      </div>
    </li>
  );
}
