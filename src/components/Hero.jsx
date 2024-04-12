import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
const Hero = () => {
  const { theme } = useSelector((state) => state.style);
  return (
    <Container
      className={`container d-flex flex-column justify-content-center align-items-center bg-${theme} text-${
        theme === "light" ? "dark" : "light"
      }`}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>Welcome to Our Application</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content.
      </p>
      <div>
        <LinkContainer to="/login">
          <Button variant="primary" className="me-3">
            <FaSignInAlt /> Login
          </Button>
        </LinkContainer>
        <LinkContainer to="/register">
          <Button variant="success">
            <FaUserPlus /> Signup
          </Button>
        </LinkContainer>
      </div>
    </Container>
  );
};

export default Hero;
