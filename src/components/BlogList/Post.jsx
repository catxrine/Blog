import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div className="col-lg-4 mb-4">
      <div className="post-entry-alt">
        <a href="single.html" className="img-link">
          <img
            src="images/img_5_horizontal.jpg"
            alt="Image"
            className="img-fluid"
          />
        </a>
        <div className="excerpt">
          <h2>
            <a href="single.html">
              Startup vs corporate: What job suits you best?
            </a>
          </h2>
          <div className="post-meta align-items-center text-left clearfix">
            <span className="d-inline-block mt-1">
              By <a href="#">David Anderson</a>
            </span>
            <span>&nbsp;-&nbsp; July 19, 2019</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt
            tempora dolor laudantium sed optio, explicabo ad deleniti impedit
            facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id
            est.
          </p>
          <p>
            <Link to="/article" className="read-more">
              Continue Reading
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
