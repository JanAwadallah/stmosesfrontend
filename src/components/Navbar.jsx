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
    <Navbar collapseOnSelect={true} bg="light" expand="lg" className="nav">
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

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              eventKey="1"
              as={Link}
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active underline" : "nav-link"
              }
            >
              <FaHome /> Home
            </Nav.Link>

            <Nav.Item>
              <Nav.Link
                eventKey="2"
                as={Link}
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active underline" : "nav-link"
                }
              >
                <FaChurch /> Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="3"
                as={Link}
                to="/child-safety"
                className={({ isActive }) =>
                  isActive ? "nav-link active underline" : "nav-link"
                }
              >
                <FaChild /> Child Safety
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="4"
                as={Link}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active underline" : "nav-link"
                }
              >
                <FaEnvelopeOpenText /> Contact Us
              </Nav.Link>
            </Nav.Item>

            {!user ? (
              <>
                <Nav.Item>
                  <Nav.Link
                    eventKey="5"
                    as={Link}
                    to="/register"
                    className={({ isActive }) =>
                      isActive ? "nav-link active underline" : "nav-link"
                    }
                  >
                    <FaUserAlt /> Sign Up
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="6"
                    as={Link}
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "nav-link active underline" : "nav-link"
                    }
                  >
                    <FaSignInAlt /> Login
                  </Nav.Link>
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
            <Nav.Link
              as={Link}
              to="/donate"
              eventKey="7"
              size="sm"
              variant="outline-success"
              style={{borderRadius:"50%"}}
              className="btn btn-outline-success"
            >
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
