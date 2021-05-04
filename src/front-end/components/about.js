import React from "react";
import { Container, Card } from 'react-bootstrap';

const About = () => (
  <div>
    <h1 className="title is-1">This is the About Page</h1>
    <Container>
      <Card>
        <Card.Body>
          The Home page offers to be a landing stage in this stage of the project. The about page offers to be an explanation of the application. The browse page offers to be the main page of the application where it is broken down into 3 pieces. The first piece is all the songs the user will have, where they will have the option to add any song to a currently existing playlist. Albums shows every album the user has and if the user clicks on any album it will load songs according to that album where they will be able to add any song to any currently existing playlist. Finally the 3rd piece is playlists where you are able to create playlists, and click on a playlist and see the songs on each playlist.
          Each song will have the option to "play" on the first column which will enable the player at the bottom of the screen and gives some functionality to the user on the song including: shuffle, rewind 10 seconds, previous song, play/pause, next song and fast forward 10 seconds.
                        </Card.Body>
      </Card>
    </Container>
  </div>
);

export default About;