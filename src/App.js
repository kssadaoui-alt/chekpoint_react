import React from "react";  
import { Navbar, Container, Nav, Card, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Heading */}
      <Container className="text-center my-5">
        <h1>Welcome to Our React App!</h1>
        <p>Explore our services and latest products below.</p>
      </Container>

      {/* Cards Section */}
      <Container className="mb-5">
        <Row className="g-4">
          {/* Product 1 */}
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&w=400"
              />
              <Card.Body>
                <Card.Title>Laptop Pro</Card.Title>
                <Card.Text>
                  High performance laptop for developers and designers.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Product 2 */}
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1585386959984-a41552231693?auto=format&w=400"
              />
              <Card.Body>
                <Card.Title>Wireless Headphones</Card.Title>
                <Card.Text>
                  Enjoy high quality sound with noise cancellation.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Product 3 */}
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&w=400"
              />
              <Card.Body>
                <Card.Title>Smartphone X</Card.Title>
                <Card.Text>
                  Fast, powerful and stylish smartphone for everyday use.
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
