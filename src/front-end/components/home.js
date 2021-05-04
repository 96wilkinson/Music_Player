import React from "react";
import { Container, Card } from 'react-bootstrap';

const Home = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <Container>
      <Card>
        <Card.Body>
          Welcome to the Music Player Application
        </Card.Body>
      </Card>
    </Container>
  </div>
);

export default Home;