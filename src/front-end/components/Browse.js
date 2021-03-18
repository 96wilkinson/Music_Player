import React from "react";
import GetSongsTable from './getSongsTable'
import TrackSelector from './trackSelector'
import GetSongsByAlbum from './getSongsByAlbum'

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.onViewChange = this.onViewChange.bind(this)
        this.state = {
            songs: [],
            selectedTrack: "nothing as of yet",
            listType: "song"
        }
    }
    onViewChange = (id) => {
        this.setState({ selectedTrack: id })
    };

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        listType: "song"
                    })
                }}>Songs</button>
                <button onClick={() => {
                    this.setState({
                        listType: "album"
                    })
                }}>Albums</button>
                <button onClick={() => {
                    this.setState({
                        listType: "playlist"
                    })
                }}>Playlists</button>
                <div>
                    {this.state.listType === 'song' ? (
                        <div><GetSongsTable onViewChange={this.onViewChange} listType={this.state.listType} /></div>
                    ) : (
                        <div><GetSongsByAlbum onViewChange={this.onViewChange} listType={this.state.listType} /></div>
                    )}
                </div>
                <div>
                    <TrackSelector selectedTrack={this.state.selectedTrack} />
                </div>
            </div>
        )
    }
}