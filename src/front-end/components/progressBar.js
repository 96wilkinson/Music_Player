import React from "react";
import Slider from '@material-ui/core/Slider';
import '../styling/progressBar.css'
import '../styling/circle.css'


export default class trackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: { minutes: 0, seconds: 0, totalTime: 0 },
            percentage: 0
        }
    }
    render() {
        let percentage = this.props.percentage
        return (
            <div>
                <Slider
                    defaultValue={0}
                    value={percentage}
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                    aria-labelledby="continuous-slider"
                />
            </div>
        )
    }
}