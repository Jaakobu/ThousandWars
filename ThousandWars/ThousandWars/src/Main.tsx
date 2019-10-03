import React from 'react';
// import { Navigation } from './Navigation';
import { Container } from 'react-bootstrap';
import { Routes } from './components/routes';


export const Main = () =>(
  <Container className="body">
    {/* <div className="banner_title">
      <img src={ require('./img/banner_TW.png') } alt="Thousand_Wars"/>
    </div> */}
    {/* <Navigation /> */}
    <Routes />
    {/* <Navigation /> */}
  </Container>
  );
  