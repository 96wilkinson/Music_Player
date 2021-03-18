import React from "react";

export default class trackSelector extends React.Component {
    render() {
        let track = this.props.selectedTrack
        let que = this.props.songQue
        return (
            <div>
                <h3>Currently Playing: {track}</h3>
                {que === undefined ? (
                        <h3>no que detected</h3>
                    ) : (
                        <ul>
                            {que.map((que) => (
                                <li id={que} onClick={((e) => this.selectedAlbum(e, { que }))}>{que.Title}</li>
                            ))}
                        </ul>
                    )}
            </div>
        )
    }
}