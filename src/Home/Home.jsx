import { useState } from 'react';
import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';

import './Home.css';

function Home(props) {
  // STATE
  const [poster, setPoster] = useState('');
  const [commentEntry, setCommentEntry] = useState('');
  const { darkMode } = props;

  // HANDLERS
  function handlePosterEntry(e) {
    setPoster(e.target.value);
  }

  function handleCommentEntry(e) {
    setCommentEntry(e.target.value);
  }

  function handleCommentClick(e) {
    if (poster === '') {
      alert('You must write your name or handle to leave a comment');
      return;
    }
    if (commentEntry === '') {
      alert('You must write something to leave a comment');
      return;
    }
    let options = {
      poster: poster,
      comment: commentEntry
    }
    axios.post('http://localhost:54321/comments', options)
      .then(({ data }) => {
        console.log('successfully sent http request for comments');
      })
      .catch((err) => console.error(err));
  }

  return (
    <div style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}} className="bottomContainer" id="homeDiv">
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
            <iframe className="vid" width="560" height="315" src="https://www.youtube.com/embed/KLrgkf58xxw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="aboutMe">
              <span>
                {
                  `I'm Mitchell Wintrow, and let me tell you, I'm still learning more about myself every day. There are some things that I can tell you though, first and foremost, I have an amazing and beautiful wife V??n, and a wonderful son Gabriel. I am so grateful to have them in my life, and their love and support has helped enable me to do what I love. My passion for software engineering, cyber security, web/app development, and learning in general is currently becoming my reality as a career.`
                }
              </span>
              <br />
              <br />
              <span>
                {
                  `I have graduated from Hack Reactor's Advanced Software Engineering Immersive bootcamp, and I'm looking to expand my skills now by working somewhere. My skills are strongest with vanilla JavaScript, Node.js, React, jQuery, React Native, PostgreSQL, MySQL, SQLite, MongoDB, NGINX, and I can design systems and APIs on AWS. Although my skills are strongest with what I previously listed, I am also decently skilled with Golang, Java, and Python. I was also accepted into the VMware Ascent program, which is essentially another 12 week bootcamp, however, it will be about the backend and it will cover Java and C#, which I'm really looking forward to.`
                }
              </span>
              <br />
              <br />
              <span>
                {
                  `As for my projects, you can go ahead and check them out via the Projects tab I've put in the navbar. Personally, one of my favorite projects has been the FlashFire flashcard I made. It uses React, Node.js, Express, and MongoDB, and I have also included authentication. You can create an account and sign in if you already have one, I use cookies to keep you logged in once you create an account or sign in, but there is also an option to sign out. You can create collections of flashcards, give them a name and category, and then you can optionally include an image with the question part of the card, and then of course fill out the answer part of the card. You can create as many collections as you and each collection can have as many cards as you, but the recommended amount of cards per collection is 6 or more. The reason why I recommend 6 or more cards is because I not only created a study mode for you to study the flashcards you made, but I also created an easy and a difficult mode which randomizes the answers from you flashcards into multiple choice answers. You can also set a timer while you study or test yourself, and if you're tired of a collection, you can edit it and add more cards, remove cards, or edit the cards you already have. I will be adding a lot more functionality to it soon.`
                }
              </span>
            </div>
          </Col>
        </Row>
        <Row className="commentTitle">
          <Col>
            <h5 className="title">Want to leave a comment?</h5>
          </Col>
        </Row>
        <Row>
          <Col className="leaveComment">
            <Form>
              <Form.Label>Who are you?</Form.Label>
              <FormControl
                style={{backgroundColor: darkMode ? '#606060' : 'white', color: darkMode ? 'white' : 'black'}}
                type="text"
                placeholder="Name Or Handle Goes Here"
                className="me-2"
                aria-label="Who are you?"
                onChange={handlePosterEntry}
                required
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="leaveComment">
            <Form>
              <Form.Label>Leave your comment here:</Form.Label>
              <FormControl
                style={{backgroundColor: darkMode ? '#606060' : 'white', color: darkMode ? 'white' : 'black'}}
                as="textarea"
                rows={4}
                aria-label="Leave a comment here"
                onChange={handleCommentEntry}
                required
              />
            </Form>
            <Button onClick={handleCommentClick} className="commentButton" variant="outline-success">
              Post Comment
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;