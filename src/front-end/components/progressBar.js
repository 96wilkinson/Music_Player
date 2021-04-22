import React from "react";
import '../styling/progressBar.css'



export default class trackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {minutes: 0, seconds: 0, totalTime: 0},
            percentage: 0
        }
    }


    setPercentage = (input) => {
        this.setState({ percentage: input },
            () => { this.props.percentage(input) })
    };

    render() {
        let percentage = this.props.percentage
        return (
            <div>
                <div className="progress-bar">
                <div className="filler" style={{ width: `${percentage}%` }} />
        </div>
            </div>
        )

    }
 }