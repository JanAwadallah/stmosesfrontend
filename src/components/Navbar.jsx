import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import {
  FaChild,
  FaChurch,
  FaEnvelopeOpenText,
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container>
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <NavLink
            to="/"
            style={{
              fontWeight: "900",
              display: "flex",
            }}
            className="navbar-brand"
          >
            <img
              src="images/StMoses3.png"
              alt="St.Moses"
              style={{ width: "5rem", marginRight: "3px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              St. Moses The Strong
              <span style={{ fontWeight: "300" }}>Coptic Orthodox Church</span>
              <span style={{ fontWeight: "300" }}>Geelong , VIC</span>
            </div>
          </NavLink>
        </motion.div>

        <Navbar.Toggle collapseOnSelect aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
<Nav.Item>
            <NavLink
eventKey="1"
as={Link}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active underline" : "nav-link"
              }
            >
              <FaHome /> Home

            </NavLink>
</Nav.Item>
<Nav.Item>
            <NavLink
eventKey="2"
as={Link}
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active underline" : "nav-link"
              }
            >
              <FaChurch /> Services

            </NavLink>
</Nav.Item>
<Nav.Item>
            <NavLink
eventKey="3"
as={Link}
              to="/child-safety"
              className={({ isActive }) =>
                isActive ? "nav-link active underline" : "nav-link"
              }
            >
              <FaChild /> Child Safety
            </NavLink>
            <NavLink
eventKey="4"
as={Link}
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active underline" : "nav-link"
              }
            >
              <FaEnvelopeOpenText /> Contact Us
            </NavLink>
</Nav.Item>

            {!user ? (
              <>
<Nav.Item>
                <NavLink
eventKey="5"
as={Link}
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "nav-link active underline" : "nav-link"
                  }
                >
                  <FaUserAlt /> Sign Up
                </NavLink>
</Nav.Item>
<Nav.Item>
                <NavLink
eventKey="6"
as={Link}
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "nav-link active underline" : "nav-link"
                  }
                >
                  <FaSignInAlt /> Login
                </NavLink>
</Nav.Item>
              </>
            ) : (
              <div
                className="m-2"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleLogout}
              >
                <span>{user.firstName}</span>
                <span>
                  <FaSignOutAlt /> Logout
                </span>
              </div>
            )}
            <Button
              onClick={(e) => navigate("/donate")}
              size="sm"
              variant="outline-success"
            >
              Donate
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
