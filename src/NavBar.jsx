import React, { useState, useEffect } from 'react';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import moon from './moonLogo.png';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// react logo https://www.patterns.dev/img/reactjs/react-logo@3x.svg

export default function NavBar() {
  function handleFlashFireClick(e) {
    e.preventDefault();
    window.open('http://3.137.200.234/');
  }

  function handleYoutubeChannelClick(e) {
    e.preventDefault();
    window.open('https://www.youtube.com/channel/UCvL509Dm5ZfVnWNYpblFyRg');
  }

  return (
    <div>
      <Navbar bg="myMidnightBlue" variant="dark" sticky="top" expand="lg" collapseOnSelect
        style={{paddingLeft: '2%', paddingRight: '2%'}}
      >
        <Navbar.Brand>
          <img className="logo" src={moon} /> {' '}
          I Am Wintrow
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse style={{justifyContent: 'space-between'}}>
          <Nav>
            <Nav.Link href="#home">
              Home
            </Nav.Link>
            <NavDropdown title="Blogs">
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
            <NavDropdown title="Projects">
              <NavDropdown.Item onClick={handleFlashFireClick}>
                {`FlashFire (Flashcards)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#projects/codybot2000">
                Codybot2000
              </NavDropdown.Item>
              <NavDropdown.Item href="#projects/blue-steel">
                Blue Steel Brand
              </NavDropdown.Item>
              <NavDropdown.Item href="#projects/twiddler">
                Twiddler
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Certifications">
              <NavDropdown.Item href="#certifications/hack-reactor">
                {`Hack Reactor Advanced Software Engineering (Galvanize)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/pre-security">
                {`Pre-Security (TryHackMe)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/js-weird-parts">
                {`JavaScript: The Weird Parts (Udemy)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/linux-cli">
                {`Linux Command Line (Udemy)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/osint">
                {`Open Source Intelligence Fundamentals (Udemy)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/tefl">
                {`Master: Teaching English as a Foreign Language (Accreditat/TEFL Full Circle)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/teyl">
                {`Teaching English to Young Learners (Accreditat/TEFL Full Circle)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/tesol">
                {`Teaching English to Speakers of Other Languages (International Open Academy)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/vietnamese">
                {`Vietnamese 60 hours (Preply)`}
              </NavDropdown.Item>
              <NavDropdown.Item href="#certifications/chinese-mandarin">
                {`Mandarin Chinese 60 hours (Preply)`}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="YouTube">
              <NavDropdown.Item onClick={handleYoutubeChannelClick}>
                {`My Channel (Mitchell Wintrow)`}
              </NavDropdown.Item>
            </NavDropdown>
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