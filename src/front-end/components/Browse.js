import React from "react";
import GetSongsTable from './getSongsTable'
import TrackSelector from './trackSelector'

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.onViewChange = this.onViewChange.bind(this)
        this.state = {
            items: [],
            selectedTrack: "nothing as of yet"
        }
    }
    onViewChange = (id) => {
        this.setState({ selectedTrack: id })
    };

    render() {
        return (
            <div>
                <div>
                    <GetSongsTable onViewChange={this.onViewChange} />
                </div>
                <div>
                    <TrackSelector selectedTrack={this.state.selectedTrack} />
                </div>
            </div>
        )
    }
}