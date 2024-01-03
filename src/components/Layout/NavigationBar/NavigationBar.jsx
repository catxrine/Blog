import { Link } from "react-router-dom";
import { useEffect } from "react";
import { isAuth, removeAuth } from "../../../utils/user.js";
import { mobileNavigationControl } from "../../../utils/utils.js";
import Categories from "./Categories.jsx";

export default function NavigationBar() {
  const authorizedTemplate = () => {
    return (
      <>
        <li>
          <Link to="/login" onClick={() => removeAuth()}>
            Logout
          </Link>
        </li>
        <li>
          <Link to={`/user/6`}>Profile</Link>
        </li>
        <li>
          <Link to={`/settings`}>Settings</Link>
        </li>
      </>
    );
  };

  useEffect(() => {
    mobileNavigationControl();
  });

  const unAutorizedTemplate = () => {
    return (
      <>
        <li>
          <Link to="/login" onClick={() => removeAuth()}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </>
    );
  };

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

      <nav className="site-nav top-0 sticky z-10">
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
                  <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="has-children">
                      <a>Categoties</a>
                      <ul className="dropdown">
                        <Categories />
                      </ul>
                    </li>
                    {isAuth ? authorizedTemplate() : unAutorizedTemplate()}
                  </ul>
                </div>
                <div className="col-2 text-end">
                  <a className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
