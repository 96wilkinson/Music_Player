import React from "react";
import { Container, Card, Row } from 'react-bootstrap';

const About = () => (
  <div>
    <h1 className="title is-1">This is the About Page</h1>

    <Container>
                    <Card>
                        <Card.Body>
                          Currently the home and about page do not offer much in the way of functionallity.
                        </Card.Body>
                        <Card.Body>
                          However the Browse page offers a music libary based on all the songs, songs by album and your own playlists
                        </Card.Body>
                        <Card.Body>
                          There is a bug where next song on the browse page will only work if you have shuffled first.
                        </Card.Body>
                    </Card>
                </Container>
  </div>
);

export default About;