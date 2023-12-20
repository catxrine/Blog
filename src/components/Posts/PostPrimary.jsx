import { Link } from "react-router-dom";

export default function PostPrimary({ data }) {
  const postDirectory = `/article/${data.id}`;

  return (
    <div className="col-lg-4 mb-4">
      <div className="post-entry-alt">
        <Link to={postDirectory} className="img-link">
          <img
            src={data.image}
            alt="image"
            className="object-cover h-48 w-96"
          />
        </Link>
        <h2 className="m-0 p-0">
          <Link to={postDirectory}>{data.title}</Link>
        </h2>
        <div className="post-meta align-items-center text-left clearfix">
          <span className="d-inline-block mt-1">
            By&nbsp;
            <Link to={`/user/${data.created_by}`}>{data.creator?.name}</Link>
          </span>
          <span>
            &nbsp;-&nbsp;
            {new Date(data.created_at).toLocaleDateString()},&nbsp;
            {new Date(data.created_at).toLocaleTimeString()}
          </span>
        </div>

        <p className="break-all h-[120px]">
          {data.description.length >= 200
            ? data.description.slice(0, 200) + "..."
            : data.description}
        </p>
        <Link to={postDirectory}>Continue Reading</Link>
      </div>
    </div>
  );
}
