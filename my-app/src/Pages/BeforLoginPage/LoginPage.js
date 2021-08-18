import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
export default function LoginPage() {
  return (
    <>
      <Container className="mt-5 pt-5 mb-5" >
        <Row className="d-flex justify-content-center mt-5 "  >
          <Col ></Col>
          <Col>
            <Form className="form-signin border border-1 px-3 py-3 bg-light rounded my-4" >


              <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label className="d-flex align-items-left">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted d-flex align-items-left">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="d-flex align-items-left">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" className="container my-3" type="submit">
                Login
              </Button>
            </Form>

          </Col>
          <Col></Col>

        </Row>
      </Container>
      
    </>
  );
}
