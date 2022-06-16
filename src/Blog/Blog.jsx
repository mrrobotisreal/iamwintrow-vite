import { useState, useEffect } from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

import './Blog.css';

const Blog = () => {
  const [eKey, setEKey] = useState('');

  useEffect(() => {
    switch (eKey) {
      case 'CSS-color-changer':
        document.
    }
  }, [eKey]);

  function handleVanillaSelect(key) {
    setEKey(key);
  }

  return (
    <div style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}
      className="bottomContainer" id="blogDiv"
    >
      <Container>
        <Row>
          <Col>
            <h3 className="title">Blog Topics</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container className="topicsContainer">
              <Row>
                <Col>
                  <Dropdown onSelect={handleVanillaSelect}>
                    <Dropdown.Toggle variant="success" id="dropdown-vanilla-js">
                      Vanilla JavaScript
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="CSS-color-changer">How to build a CSS color changer</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Blog;