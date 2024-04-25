import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import netflix from "../img/netflix.png";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <img width={100} src="https://jbinyim12.cafe24.com/img/netflix.png" />
        {/* <img width={100} src={netflix} alt="netflix" /> */}
        {/* <div className="img"></div> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-item" href="#action1">
              Home
            </Link>
            <Link to="/movie" className="nav-item" href="#action2">
              Movies
            </Link>
            <Link to="/tv" className="nav-item" href="#action2">
              TV
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
