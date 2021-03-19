import React from "react";
import axios from 'axios'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import songQueReOrder from '../utils/songQueReOrder'
import secondsIntoTime from '../utils/secondsIntoTime'
import '../styling/table.css'

export default class getSongsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            songQue: [],
            time: {minutes: 0, seconds: 0},
            selectedTrack: "nothing as of yet",
            playLists: []
        }
    }
    componentWillMount() {
        axios.post('http://localhost:3001/getData')
            .then(response => this.setState({ songs: response.data }))

        axios.post('http://localhost:3001/getAllPlaylists')
            .then(response => this.setState({ playLists: response.data }))
    }

    trackOrchestrator = (id, songs) => {
        secondsIntoTime(id,songs).then(response => this.props.songTimeSetter(response));
        this.props.onViewChange(id, songs)
        this.songQueSetterPreStep(id, songs)
    };

    onViewChange = (id, songs) => {
        this.setState({ selectedTrack: id },
            () => { this.props.selectedTrack(id) })
    };

    songQueSetterPreStep = (id, songs) => {
        songQueReOrder(id, songs).then(response => this.props.songQueSetter(id, response))

    }

    songQueSetter = (id, songs) => {
        this.setState({ songQue: songs },
            () => { this.props.songQue(songs) })
    };

    songTimeSetter = (time) => {
        this.setState({time: time},
            () => { this.props.time(time) })
    }

    addSongToPlayList = (Title, Artist, album, Time, TABLE_NAME) => {
        axios.post(`http://localhost:3001/addSongToPlayList?playListName=${TABLE_NAME}&Title=${Title}&Artist=${Artist}&Album=${album}&Time=${Time}`)

        alert(`Added To Playlist: ${TABLE_NAME}`);
    }

    render() {
        let songs = this.state.songs;
        let playLists = this.state.playLists
        return (
            <div>
                <h1 id='tableSongs'>Songs</h1>
                <div>
                    <table id='Songs'>
                        <tbody>
                            <tr>
                                <th>Play Option</th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Length of the song</th>
                                <th>Playlist</th>
                            </tr>
                            {songs.map(songs =>
                                <tr key={songs.id}>
                                    <td>
                                        <button
                                            id={songs.Title}
                                            onClick={() => { this.trackOrchestrator(songs.Title, this.state.songs) }}>
                                            Play
                                    </button>

                                    </td>
                                    <td>
                                        {songs.Title}
                                    </td>
                                    <td>
                                        {songs.Artist}
                                    </td>
                                    <td>
                                        {songs.Album}
                                    </td>
                                    <td>
                                        {songs.Time}
                                    </td>
                                    <td>
                                        <DropdownButton id="dropdown-basic-button" title="Add To Playlist">
                                            {playLists.map(playLists =>
                                                <Dropdown.Item
                                                    onClick={() => { this.addSongToPlayList(songs.Title, songs.Artist, songs.Album, songs.Time, playLists.playlist) }}>
                                                    {playLists.playlist}
                                                </Dropdown.Item>
                                            )}
                                        </DropdownButton>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
