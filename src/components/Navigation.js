import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" expand="sm">
        <Container>
          <Navbar.Brand href="">RLDC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link href="/home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactus">
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/paymentdetails">
                <Nav.Link href="/paymentdetails">Payment Details</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/search">
                <Nav.Link href="/search">Search</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <LinkContainer to="/login">
                <Nav.Link href="/login">Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link href="/signup">SignUp</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br />
    </>
  );
}

export default Navigation;
