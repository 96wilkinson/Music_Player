import React from "react";

export default class trackSelector extends React.Component {
    render() {
        let track = this.props.selectedTrack
        console.log(track)
        return (
            <div>
                <h3>Currently Playing: {track}</h3>

            </div>
        )
    }
}