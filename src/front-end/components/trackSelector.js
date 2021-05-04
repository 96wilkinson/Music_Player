import React from "react";
import shuffleFunction from '../utils/shuffleFunction';
import { Container, Card } from 'react-bootstrap';
import previousSong from '../utils/previousSong';
import nextSong from '../utils/nextSong';
import secondsIntoTime from '../utils/secondsIntoTime'
import timeInterval from '../utils/timerInterval'
import ProgressBar from './progressBar'
import skipForward10Utility from '../utils/skipForward10'
import '../styling/trackSelector.css'
import '../styling/progressBar.css'


export default class trackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.setPercentage = this.setPercentage.bind(this)
        this.state = {
            selectedTrack: "nothing as of yet",
            time: {minutes: 0, seconds: 0, totalTime: 0},
            songQueList: [],
            isPlaying: false,
            percentage: 0
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
            this.interval = setInterval(() => timeInterval(this.props.time.minutes, this.props.time.seconds,this.props.time.totalTime)
                .then(response => this.timeIntervalReached(response)), 1000);
        }
        else {
            clearInterval(this.interval).then(nextSong())
        }
    }

    timeIntervalReached = (input) => {
        this.setState({ time: input.time },
            () => { this.props.songTimeSetter(input.time) })
        this.setPercentage(input)
    }

    setPercentage = (input) => {
        this.setState({percentage: input.percentage})
    }

    clearInterval = () => {
        this.setState({ isPlaying: false })
        clearInterval(this.interval)
    }

    skipForward10 = () => {
        skipForward10Utility(this.state.time).then(response => this.skipOrchestrator(response))
    }

    skipOrchestrator = (input) => {
        this.setPercentage(input.percentage);
        this.setTime(input.time)
    }

    setTime = (input) => {
        this.setState({ time: input.time },
            () => { this.props.songTimeSetter(input.time) })
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
        let percentage = this.props.percentage
        return (
            <div>
                {que === undefined ?
                    <h3>no que detected</h3>
                    : this.state.songQueList === [] ?
                        <Container id="trackList">
                            {que.map((que) => (
                                <Card id={que} >
                                    <Card.Body>
                                        {que.Title}
                                    </Card.Body>
                                </Card>
                            ))}
                        </Container>
                        : <Container id="trackList">
                            {que.map((que) => (
                                <Card id={que} >
                                    <Card.Body>
                                        {que.Title}
                                    </Card.Body>
                                </Card>
                            ))}
                        </Container>
                }
                <Container id="trackSelectorContainer">
                    <Card id="trackSelectorCard">
                        <Card.Body id="trackSelectorBody">
                            <h3>Currently Playing: {track}</h3>
                            {this.props.selectedTrack === "nothing as of yet" ?
                                <h3> select a song to play</h3> :
                                // Did put in a div element to avoid a parent element error but a react fragment works just as well
                                <React.Fragment>
                                    <h3>Time Remaining: {time.minutes}m:{time.seconds}s</h3>
                                    <button className="standardButton" onClick={() => { this.songQueSetterPreStep() }}>Shuffle</button>
                                </React.Fragment>
                            }
                            <button>
                                10-s
                            </button>
                            <button className="standardButton" onClick={() => { this.previousSong() }}>
                                Previous Song
                            </button>
                            {this.state.isPlaying === false ?
                                <button className="standardButton" onClick={() => this.startPlaying()}>Play</button> :
                                <button className="standardButton" onClick={() => this.clearInterval()}>Pause</button>}
                            <button className="standardButton" onClick={() => { this.nextSong() }}>
                                Next Song
                            </button>
                            <button onClick={() => {this.skipForward10()}}>
                                10+s
                            </button>

                            <ProgressBar percentage={this.state.percentage}/>
                        </Card.Body>
                    </Card>
                </Container>

            </div>
        )
    }
}