import React from "react";
import { Link, useLocation } from "react-router-dom";
import wslogo from "../../../Assets/wslogo.png";
import "./Header.css";
// import component ?
import Drawer from "react-modern-drawer";

//import styles ?
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  const manuItems = (
    <>
      <li className={splitLocation[1] === "courses" ? "active" : ""}>
        <Link to="courses">Courses</Link>
      </li>
      <li className={splitLocation[1] === "bookstore" ? "active" : ""}>
        <Link to="bookstore">Book Store</Link>
      </li>
      <li className={splitLocation[1] === "admission" ? "active" : ""}>
        <Link to="admission">Admission</Link>
      </li>
      <li className={splitLocation[1] === "jobs" ? "active" : ""}>
        <Link to="jobs">Jobs</Link>
      </li>
      <li className={splitLocation[1] === "blogs" ? "active" : ""}>
        <Link to="blogs">Blog</Link>
      </li>
      <li className={splitLocation[1] === "login" ? "active" : ""}>
        <Link to="login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-lg fixed top-0 w-full z-50 lg:px-10  bg-base-100 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div className="navbar-start">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="top">
          <div>
            <ul tabindex="0" className="p-2 bg-base-100 ">
                <Link to="/">
                  <img className="w-36 mt-2 mb-1 mx-auto" src={wslogo} alt=""></img>
                </Link>
                <hr />
              <li className="my-2 text-lg text-center">
                <Link to="courses">Courses</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="bookstore">Book Store</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="admission">Admission</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="jobs">Jobs</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="blogs">Blog</Link>
              </li>
              <hr />
              <li className="my-2 text-lg text-center">
                <Link to="Login">Login</Link>
              </li>
            </ul>
          </div>
        </Drawer>
        <Link to="/">
          <div>
          <img className="w-36" src={wslogo} alt=""></img>
          </div>
        </Link>
      </div>
      <div className="navbar-center lg:mr-56">
        <ul className="hidden space-x-5 lg:flex mr-10 text-lg">{manuItems}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <label
            onClick={toggleDrawer}
            tabindex="0"
            className="mx-4 text-2xl lg:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;