import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="menu-bg-wrap">
            <div className="site-navigation">
              <div className="row g-0 align-items-center">
                <div className="col-2">
                  <Link to="/" className="logo m-0 float-start">
                    AC<span className="text-primary">.</span>
                  </Link>
                </div>
                <div className="col-8 text-center">
                  <form
                    action="#"
                    className="search-form d-inline-block d-lg-none"
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                    <span className="bi-search"></span>
                  </form>

                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="has-children">
                      <a>Categoties</a>
                      <ul className="dropdown">
                        <li>
                          <a href="search-result.html">Science</a>
                        </li>
                        <li>
                          <a href="blog.html">Cooking</a>
                        </li>
                        <li>
                          <a href="single.html">Ideas</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
