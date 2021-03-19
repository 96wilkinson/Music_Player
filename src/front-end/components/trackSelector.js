import React from "react";
import shuffleFunction from '../utils/shuffleFunction';
import { Container, Card, Row, Col } from 'react-bootstrap';
import previousSong from '../utils/previousSong';
import nextSong from '../utils/nextSong';

export default class trackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTrack: "nothing as of yet",
            time: 0,
            songQueList: [],
            isPlaying: false
        }
    }

    onViewChange = (id) => {
        this.setState({ selectedTrack: id },
            () => { this.props.selectedTrack(id) })
    };

    turnSecondsIntoMinutes = () => {
        
    }

    songQueSetterPreStep = () => {
        this.setState({ songQueList: this.props.songQue },
            () => { shuffleFunction(this.state.songQueList).then(response => this.setState({ songQueList: response })) })
    }

    previousSong = () => {
        previousSong(this.state.songQueList).then(response => this.setStateOfSongs(response))
    }

    nextSong = () => {
        nextSong(this.state.songQueList).then(response => this.setStateOfSongs(response))
    }

    setStateOfSongs = (input) => {
        this.setState({ songQueList: input.songList })
        this.props.onViewChange(input.currentSong.Title)
    }

    render() {
        let track = this.props.selectedTrack
        let que = this.props.songQue
        return (
            <div>

                <Container>
                    <Card>
                        <Row>
                            <h3>Currently Playing: {track}</h3>
                        </Row>
                        <Row>
                            <button onClick={() => { this.previousSong() }}>
                                Previous Song
                            </button>
                            {this.props.selectedTrack === "nothing as of yet" ?
                                <h3> select a song to play</h3> :
                                this.state.isPlaying === false ?
                                    <button onClick={() => this.setState({ isPlaying: true })}>Play</button> :
                                    <button onClick={() => this.setState({ isPlaying: false })}>Pause</button>}
                            <button onClick={() => { this.nextSong() }}>
                                Next Song
                            </button>
                        </Row>
                    </Card>
                </Container>
                <button onClick={() => { this.songQueSetterPreStep() }}>Shuffle</button>
                {que === undefined ?
                    <h3>no que detected</h3>
                    : this.state.songQueList === [] ?
                        <Container>
                            {que.map((que) => (
                                <Card id={que} >
                                    <Row>
                                        {que.Title}
                                    </Row>
                                </Card>
                            ))}
                        </Container>
                        : <Container>
                            {que.map((que) => (
                                <Card id={que} >
                                    <Row>
                                        {que.Title}
                                    </Row>
                                </Card>
                            ))}
                        </Container>
                }
            </div>
        )
    }
}