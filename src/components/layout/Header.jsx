import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.getElementById("mainNavbar");

    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg custom-nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="logo" height="40" className="nav-logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/industries">
                Industries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-nav" to="/about">
                About Us
              </Link>
            </li>
          </ul>

          <button className="custom-btn border-0">Get a Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
