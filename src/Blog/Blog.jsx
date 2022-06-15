import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import './Blog.css';

const Blog = () => {
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
      </Container>
    </div>
  )
}

export default Blog;