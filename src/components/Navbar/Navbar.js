import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logout from "../Logout/Logout";
import "./Navbar.css";
import Timer from "../Timer/Timer";
import { useState } from "react";

const Navbar = ({finalTime}) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const location = useLocation();
  console.log(location.pathname === "/questionhub");
  if (
    location.pathname === "/questionhub" ||
    location.pathname === "/submissions" ||
    location.pathname === "/leaderboard" ||
    location.pathname === "/coding" ||
    location.pathname === "/testcases"
  )
    return (
      <nav className="navbar navbar-expand-md ">
        <button
          className="navbar-toggler navbar-dark "
          type="button"
          data-toggle="collapse"ev
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon navbar-dark" />
        </button>
        <img className="logo pisb" alt="PISB Logo" src="../img/pisblogo.png" />
      
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/questionhub"
                className="nav-link"
                activeClassName="currentpage"
              >
                QuestionHub
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/submissions"
                className="nav-link"
                activeClassName="currentpage"
              >
                Submissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/leaderboard"
                className="nav-link"
                activeClassName="currentpage"
              >
                Leaderboard
              </NavLink>
            </li>

          </ul>
         
        </div>
        <Logout />
        <img className="logo ctd" alt="RC Logo" src="../img/rclogo.png" />
      </nav>
    );

  return (<nav className="navbar navbar-expand-lg ">
    <img className="logo pisb" alt="PISB Logo" src="../img/pisblogo.png"  />
    <img className="logo ctd ml-auto" alt="RC Logo" src="../img/rclogo.png"  /></nav>);
};

export default Navbar;
