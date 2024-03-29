import React from "react";
import { Button } from "react-bootstrap";
import { logout, reset } from "../features/auth/authSlice";
import {
  FaRegEnvelope,
  FaSignOutAlt,
  FaFacebookSquare,
  FaSignInAlt,
  FaUserAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-container">
      <div className="left">
        <img
          style={{ width: "100%", height: "auto", maxWidth: "150px" }}
          src="./images/StMoses3.png"
          alt="logo"
        />
        <span>
          <strong>Contact us</strong>
        </span>
        <span>
          <FaRegEnvelope /> contact@stmosescopts.org.au
        </span>

        <span>
          <FaFacebookSquare /> www.facebook.com/st.moses-geelong
        </span>
      </div>
      <div className="middle">
        <span
          style={{ fontFamily: "cursive", fontWeight: "900", fontSize: "2rem" }}
        >
          St.Moses
        </span>
        <ul>
          <li  onClick={() => window.scrollTo(0, 0)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/services">Services</Link>
          </li>

          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/child-safety">Child Safety</Link>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <Link to="/contact">Contact Us</Link>
          </li>

          {!user ? (
            <>
              <li onClick={() => window.scrollTo(0, 0)}>
                <Link to="/register">Sign Up</Link>
              </li>
              <li onClick={() => window.scrollTo(0, 0)}>
                <Link to="/login">Login</Link>
              </li>
            </>
          ) : (
            <li className="pointer" onClick={handleLogout}>Logout</li>
          )}
        </ul>
      </div>
      <div className="right">
        <span
          style={{ fontFamily: "cursive", fontWeight: "900", fontSize: "2rem" }}
        >
          Our Goal
        </span>
        <span>
          Share with us the blessings and make us one more step closer to our
          goal
        </span>
        <Button
          onClick={(e) => {
                  navigate("/donate");
                  window.scrollTo(0, 0);
                }}
          size="sm"
          variant="outline-success"
        >
          Donate
        </Button>
      </div>
    </div>
  );
};

export default Footer;
