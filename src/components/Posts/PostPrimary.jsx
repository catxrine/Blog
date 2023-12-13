import { Link } from "react-router-dom";

export default function PostPrimary({ author, date, description, title }) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="post-entry-alt">
        <Link to="/article/1" className="img-link">
          <img
            src="/public/images/img_5_horizontal.jpg"
            alt="Image"
            className="img-fluid"
          />
        </Link>
        <div className="excerpt">
          <h2>
            <Link to="/article/1">
              Startup vs corporate: What job suits you best?
            </Link>
          </h2>
          <div className="post-meta align-items-center text-left clearfix">
            <span className="d-inline-block mt-1">
              By <Link to="/user/1">David Anderson</Link>
            </span>
            <span>&nbsp;-&nbsp; July 19, 2019</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt
            tempora dolor laudantium sed optio, explicabo ad deleniti impedit
            facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id
            est.
          </p>
          <Link to="/article/1">Continue Reading</Link>
        </div>
      </div>
    </div>
  );
}
