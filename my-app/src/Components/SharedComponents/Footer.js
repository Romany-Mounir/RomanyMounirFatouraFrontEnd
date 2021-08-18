import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <>
    <div className="my-3"></div>
    <Navbar fixed="bottom" sticky="bottom" className="d-flex justify-content-center bg-warning fw-bold mt-3">
      <div  className="footer-copyright text-center py-3">© 2021 Copyright: 
        <a href="https://facebook.com/romanymounir.net"> Romany Mounir</a>
    </div>
    </Navbar>
    </ >
  );
}
