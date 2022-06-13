import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.css';
import moon from './moonLogo.png';
import sun from './sunLogo.png';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// react logo https://www.patterns.dev/img/reactjs/react-logo@3x.svg

export default function NavBar(props) {
  /* STATE */
  const [searchEntry, setSearchEntry] = useState('');
  const [screenWidth, setScreenWidth] = useState(992);
  // const dispatch = useDispatch();
  // const darkMode = useSelector(state => state.darkMode);
  const { toggleDarkMode } = props;
  const { darkMode } = props;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [window.innerWidth]);

  /* HANDLERS */
  function handleFlashFireClick(e) {
    e.preventDefault();
    window.open('http://3.137.200.234/');
  }

  function handleYoutubeChannelClick(e) {
    e.preventDefault();
    window.open('https://www.youtube.com/channel/UCvL509Dm5ZfVnWNYpblFyRg');
  }

  function handleSearchEntry(e) {
    console.log('search entry:-> ', searchEntry);
    setSearchEntry(e.target.value);
  }

  function handleSearchClick(e) {
    e.preventDefault();
    window.open('https://duckduckgo.com/?q=' + searchEntry, 'searchTermWindow');
    setSearchEntry('');
  }
  function handleDarkModeToggle(e) {
    console.log('click!');
    console.log('darkMode is: ', darkMode);
    e.preventDefault();
    toggleDarkMode();
  }

  return (
    <div>
      <Navbar bg={darkMode ? 'myMidnightBlue' : 'mySkyBlue'} variant={darkMode ? 'dark' : 'light'} sticky="top" expand="lg" collapseOnSelect
        style={{paddingLeft: '2%', paddingRight: '2%'}}
      >
        <Navbar.Brand>
          <img onClick={handleDarkModeToggle} className="logo" src={darkMode ? moon : sun}
            style={{cursor: 'pointer', backgroundColor: darkMode ? '#FFFFE0' : 'yellow'}}
          /> {' '}
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
            <div className="translationDiv translatediv"
              style={{marginLeft: window.innerWidth >= 992 ? '8%' : '0%'}}
            >
              <div id="google_translate_element"></div>
            </div>
          </Nav>
          <Form className="d-flex">
            <FormControl
              style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}
              type="search"
              placeholder="Search Online"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchEntry}
            />
            <Button variant="outline-success" onClick={handleSearchClick}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}