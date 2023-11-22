export default function Comment({ username, date, comment }) {
  return (
    <li className="comment">
      <div className="vcard"></div>
      <div className="comment-body">
        <h3>{username}</h3>
        <div className="meta">{date}</div>
        <p>{comment}</p>
      </div>
    </li>
  );
}
