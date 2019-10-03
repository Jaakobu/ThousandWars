import React from 'react';
import * as routes from "./constant/routes"
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const Navigation = () =>(
  <Container className="body">
    <Row className="nav">
      <Col md={3}>
      <NavLink to={routes.SIGN_IN}>Sign In</NavLink>
      </Col>
      <Col md={3}>
      <NavLink to={routes.SIGN_UP}>Sign Up</NavLink>
      </Col>
      <Col md={3}>
      <NavLink to={routes.GAME}>Game</NavLink>
      </Col>
      <Col md={3}>
      <NavLink to={routes.RESET_PASSWORD}>Reset Password</NavLink>
      </Col>
    </Row>
  </Container>
  )

  
