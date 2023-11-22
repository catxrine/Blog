export default function Post({ title, date }) {
  return (
    <li>
      <a href="">
        <div className="text">
          <h4>{title}</h4>
          <div className="post-meta">
            <span className="mr-2">{date}</span>
          </div>
        </div>
      </a>
    </li>
  );
}
