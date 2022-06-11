import React, { useState, useEffect } from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import moon from './moonLogo.png';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// react logo https://www.patterns.dev/img/reactjs/react-logo@3x.svg

export default function NavBar() {
  return (
    <div>
      <Navbar bg="myRed" variant="dark" sticky="top" expand="lg" collapseOnSelect
        style={{paddingLeft: '2%', paddingRight: '2%'}}
      >
        <Navbar.Brand>
          <img className="logo" src={moon} /> {' '}
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{justifyContent: 'space-between'}}>
          <Nav>
            <Nav.Link href="#home">
              Home
            </Nav.Link>
            <NavDropdown title="Blog">
              <NavDropdown.Item href="#blog/vanilla-js">
                Vanilla JS
              </NavDropdown.Item>
              <NavDropdown.Item href="#blog/react">
                React
              </NavDropdown.Item>
              <NavDropdown.Item href="#blog/react-native">
                React Native
              </NavDropdown.Item>
              <NavDropdown.Item href="#blog/golang">
                Golang
              </NavDropdown.Item>
              <NavDropdown.Item href="#blog/java">
                Java
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">
              Blog
            </Nav.Link>
            <Nav.Link href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link href="#achievements">
              Achievements
            </Nav.Link>
            <Nav.Link href="#youtube">
              YouTube
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Online"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}