import { Link } from "react-router-dom";
export default function Post({ title, description, date }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="blog-entry">
        <Link to="/article/1" className="img-link">
          <img
            src="images/img_2_horizontal.jpg"
            alt="Image"
            className="img-fluid"
          />
        </Link>
        <span className="date">Apr. 14th, 2022</span>
        <h2>
          <Link to="/article/1">
            Startup vs corporate: What job suits you best?
          </Link>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link to="/article/1">Continue Reading</Link>
      </div>
    </div>
  );
}
