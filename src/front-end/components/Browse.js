import React from "react";
import GetSongsTable from './getSongsTable'
import TrackSelector from './trackSelector'
import GetSongsByAlbum from './getSongsByAlbum'
import GetSongsByPlayList from './getSongsByPlayList'

export default class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.onViewChange = this.onViewChange.bind(this)
        this.songQueSetter = this.songQueSetter.bind(this)
        this.state = {
            songs: [],
            songQue: [],
            selectedTrack: "nothing as of yet",
            listType: "song"
        }
    }
    onViewChange = (id) => {
        this.setState({ selectedTrack: id })
    };

    songQueSetter = (id, songs) =>{
        this.setState({ songQue: songs})
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
                    {this.state.listType === 'song' ?
                        <div><GetSongsTable onViewChange={this.onViewChange} songQueSetter={this.songQueSetter} listType={this.state.listType} /></div>
                        : this.state.listType === 'album' ?
                        <div><GetSongsByAlbum onViewChange={this.onViewChange} songQueSetter={this.songQueSetter} listType={this.state.listType} /></div>
                            : <div><GetSongsByPlayList onViewChange={this.onViewChange} songQueSetter={this.songQueSetter} listType={this.state.listType} /></div>
                    }
                </div>
                <div>
                    <TrackSelector selectedTrack={this.state.selectedTrack} songQue={this.state.songQue} onViewChange={this.onViewChange}/>
                </div>
            </div>
        )
    }
}