import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>TheShop</Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                {" "}
                <i className="fas fa-shopping-cart"></i> CART
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </header>
  );
};

export default Header;
