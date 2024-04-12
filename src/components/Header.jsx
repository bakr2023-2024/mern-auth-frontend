import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ToggleButton from "react-bootstrap/ToggleButton";
import {
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { setStyle } from "../slices/styleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Header = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.style);
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutBackend] = useLogoutMutation();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutBackend().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <header>
      <Navbar collapseOnSelect variant={theme} bg={theme} expand="lg">
        <Container>
          <ToggleButton
            id="toggle-check"
            type="checkbox"
            className={`border-0 bg-${theme} text-${
              theme === "light" ? "dark" : "light"
            }`}
            checked={checked}
            onChange={(e) => setChecked(e.currentTarget.checked)}
            onClick={() =>
              dispatch(setStyle(theme === "light" ? "dark" : "light"))
            }
          >
            {theme.toUpperCase()}
          </ToggleButton>
          <LinkContainer to="/">
            <Navbar.Brand>MERN Auth</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {userInfo ? (
              <Nav className="ms-auto">
                <LinkContainer to="/profile">
                  <Nav.Link>
                    <FaUserAlt />
                    {userInfo.name}
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={handleLogout}>
                  <FaSignOutAlt />
                  Logout
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FaSignInAlt />
                    Login
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>
                    <FaUserPlus />
                    Sign up
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
