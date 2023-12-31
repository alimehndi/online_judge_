import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/home">Online Judge</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/questionlist">Question List</Nav.Link>
            <Nav.Link href="/questionlist/:id">Question Submission</Nav.Link>
            <Nav.Link href="/totalsubmittedquestion">Total submitted question</Nav.Link>          
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header