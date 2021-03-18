import React from "react";
import axios from 'axios'
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default class getSongsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            songQue: [],
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

    onViewChange = (id) => {
        this.setState({ selectedTrack: id }, () => this.props.selectedTrack(id))
        this.setState({ songQue: this.state.songs}, () => this.props.songQue(this.state.songs))
    };

    addSongToPlayList = (Title, Artist, album, Time, TABLE_NAME) => {
        axios.post(`http://localhost:3001/addSongToPlayList?playListName=${TABLE_NAME}&Title=${Title}&Artist=${Artist}&Album=${album}&Time=${Time}`)

        alert(`Added To Playlist: ${TABLE_NAME}`);
    }

    render() {
        let songs = this.state.songs;
        let playLists = this.state.playLists
        return (
            <div>
                <h1 id='Table Title'>Songs</h1>
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
                                    <td><button
                                        id={songs.Title}
                                        onClick={() => { this.props.onViewChange(songs.Title) }}>
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
