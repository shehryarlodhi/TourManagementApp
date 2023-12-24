import React, { useState } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  let token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const role = decodedToken.role;

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Epic Adventures</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="nav-links" to="/viewtour">
              <i className="fa-solid fa-eye"></i> View
            </Link>
          </li>

          {role === "touragent" && (
            <>
              <li>
                <Link className="nav-links" to="/addtour">
                  <i className="fa-sharp fa-solid fa-plus"></i> Add
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/updatetour">
                  <i className="fa-solid fa-pen-to-square"></i> Update
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/deletetour">
                  <i className="fa-solid fa-trash"></i> Delete
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/bookings">
                  <i className="fas fa-calendar-check"></i> My Bookings
                </Link>
              </li>
            </>
          )}

          {role === "customer" && (
            <>
              <li>
                <Link className="nav-links" to="/viewbookings">
                  <i className="fas fa-calendar-check"></i> My Bookings
                </Link>
              </li>
            </>
          )}

          <li>
            <button className="nav-btn" onClick={handleLogout}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
