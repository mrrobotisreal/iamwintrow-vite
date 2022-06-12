import { useState } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';

import './Home.css';

function Home() {
  // STATE
  const [commentEntry, setCommentEntry] = useState('');

  // HANDLERS
  function handleCommentEntry(e) {
    setCommentEntry(e.target.value);
  }

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
            <h3 className="title">
              Who in the world is Mitchell Wintrow?
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="aboutMe">
              {
              `This is the main body of my About me section.
              I hope that this will still look good, even though
              I'm using a <pre> tag... I guess we'll see soon enough.`
              }
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Want to leave a comment?</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Label>Leave your comment here:</Form.Label>
              <FormControl
                as="textarea"
                rows={4}
                aria-label="Leave a comment here"
                onChange={handleCommentEntry}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;