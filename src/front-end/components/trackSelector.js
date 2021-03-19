import React from "react";
import shuffleFunction from '../utils/shuffleFunction';
import { Container, Card, Row, Col } from 'react-bootstrap';
import previousSong from '../utils/previousSong';
import nextSong from '../utils/nextSong';
import secondsIntoTime from '../utils/secondsIntoTime'
import timeInterval from '../utils/timerInterval'

export default class trackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTrack: "nothing as of yet",
            time: { minutes: 0, seconds: 0 },
            songQueList: [],
            isPlaying: false
        }
    }

    onViewChange = (id) => {
        this.setState({ selectedTrack: id },
            () => { this.props.selectedTrack(id) })
    };

    songTimeSetter = (time) => {
        this.setState({ time: time },
            () => { this.props.time(time) }).then(console.log(this.props.time))
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

    startPlaying = () => {
        this.setState({ isPlaying: true })
        if ((this.state.time.minutes !== 0 && this.state.time.seconds !== 0) || this.state.isPlaying === false) {
            this.interval = setInterval(() => timeInterval(this.props.time.minutes, this.props.time.seconds)
                .then(response => this.timeIntervalReached(response)), 1000);
        }
        else {
            clearInterval(this.interval).then(nextSong())
        }
    }

    timeIntervalReached = (input) => {
            this.setState({ time: input },
                () => { this.props.songTimeSetter(input) })
    }

    clearInterval = () => {
        this.setState({ isPlaying: false })
        clearInterval(this.interval)
    }


    setStateOfSongs = (input) => {
        this.setState({ songQueList: input.songList })
        this.props.onViewChange(input.currentSong.Title)
        secondsIntoTime(input.currentSong.Title, input.songList).then(response => this.props.songTimeSetter(response))
    }

    render() {
        let track = this.props.selectedTrack
        let time = this.props.time
        let que = this.props.songQue
        return (
            <div>

                <Container>
                    <Card>
                        <Row>
                            <h3>Currently Playing: {track}</h3>
                        </Row>
                        <Row>
                            {this.props.selectedTrack === "nothing as of yet" ?
                                <h3>    timing Placeholder</h3> :
                                <div>
                                    <h3>Time Remaining: </h3>
                                    <h3>Minutes: {time.minutes} Seconds: {time.seconds}</h3>
                                </div>
                            }
                        </Row>
                        <Row>
                            <button onClick={() => { this.previousSong() }}>
                                Previous Song
                            </button>
                            {this.props.selectedTrack === "nothing as of yet" ?
                                <h3> select a song to play</h3> :
                                this.state.isPlaying === false ?
                                    <button onClick={() => this.startPlaying()}>Play</button> :
                                    <button onClick={() => this.clearInterval()}>Pause</button>}
                            <button onClick={() => { this.nextSong() }}>
                                Next Song
                            </button>
                        </Row>
                    </Card>
                </Container>
                {this.props.selectedTrack === "nothing as of yet" ?
                 <div></div> : <button onClick={() => { this.songQueSetterPreStep() }}>Shuffle</button>}
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