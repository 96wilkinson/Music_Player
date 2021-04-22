import React from "react";
import shuffleFunction from '../utils/shuffleFunction';
import { Container, Card } from 'react-bootstrap';
import previousSong from '../utils/previousSong';
import nextSong from '../utils/nextSong';
import secondsIntoTime from '../utils/secondsIntoTime'
import timeInterval from '../utils/timerInterval'
import ProgressBar from './progressBar'
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
        console.log(this.state.percentage,this.props.percentage);
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
                                    <h3>Time Remaining: </h3>
                                    <h3>Minutes: {time.minutes} Seconds: {time.seconds}</h3>
                                    <button onClick={() => { this.songQueSetterPreStep() }}>Shuffle</button>
                                </React.Fragment>
                            }
                            <button onClick={() => { this.previousSong() }}>
                                Previous Song
                            </button>
                            {this.state.isPlaying === false ?
                                <button onClick={() => this.startPlaying()}>Play</button> :
                                <button onClick={() => this.clearInterval()}>Pause</button>}


                            <button onClick={() => { this.nextSong() }}>
                                Next Song
                            </button>

                            <ProgressBar percentage={this.state.percentage}/>
                        </Card.Body>
                    </Card>
                </Container>

            </div>
        )
    }
}