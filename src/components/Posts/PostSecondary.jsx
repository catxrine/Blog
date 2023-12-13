import { Link } from "react-router-dom";

export default function PostSeconary({ title, date }) {
  return (
    <li>
      <Link to="">
        <div className="text">
          <h4>{title}</h4>
          <div className="post-meta">
            <span className="mr-2">{date}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
