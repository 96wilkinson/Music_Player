import React from "react";
import shuffleFunction from '../utils/shuffleFunction'
import { Container, Card, Row, Col } from 'react-bootstrap';

export default class trackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songQueList: [],
            isPlaying: false
        }
    }

    songQueSetterPreStep = () => {
        this.setState({ songQueList: this.props.songQue },
            () => { shuffleFunction(this.state.songQueList).then(response => this.setState({songQueList: response})) })
        // shuffleFunction(this.props.songQue).then(response => console.log(response))
    }

    render() {
        let track = this.props.selectedTrack
        let que = this.props.songQue
        let shuffledQue = this.state.songQueList
        console.log(shuffledQue)
        return (
            <div>

                <Container>
                    <Card>
                        <Row>
                            <h3>Currently Playing: {track}</h3>
                        </Row>
                        <Row>
                            {this.props.selectedTrack === "nothing as of yet" ?
                                <h3> select a song to play</h3> :
                                this.state.isPlaying === false ?
                                    <button onClick={() => this.setState({ isPlaying: true })}>Play</button> :
                                    <button onClick={() => this.setState({ isPlaying: false })}>Pause</button>}
                        </Row>
                    </Card>
                </Container>
                <button onClick={() => { this.songQueSetterPreStep() }}>Shuffle</button>
                {que === undefined ?
                    <h3>no que detected</h3>
                    : this.state.songQueList === [] ?
                        <ul>
                            {que.map((que) => (
                                <li id={que}>{que.Title}</li>
                            ))}
                        </ul>
                        : <ul>
                            {que.map((que) => (
                                <li id={que} >{que.Title}</li>
                            ))}
                        </ul>
                }
            </div>
        )
    }
}