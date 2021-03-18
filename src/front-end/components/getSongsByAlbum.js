import React from "react";
import arrayDuplicateRemoval from '../utils/arrayDuplicateRemoval'
import axios from 'axios'
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default class getSongsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            albums: [],
            selectedTrack: "nothing as of yet",
            selectedAlbum: "No Album Selected",
            playLists: []
            
        }
    }

    componentWillMount() {
        arrayDuplicateRemoval().then(response => this.setState({ albums: response }))

        axios.post('http://localhost:3001/getAllPlaylists')
        .then(response => this.setState({ playLists: response.data }))
    }

    onViewChange = (id) => {
        this.setState({ selectedTrack: id }, () => this.props.selectedTrack(id))
    };

    selectedAlbum = (e, data) => {
        this.setState({ selectedAlbum: data.albums })
        let url = 'http://localhost:3001/getSongsByAlbum?album='
        axios.post(url + this.state.selectedAlbum)
            .then(response => this.setState({ songs: response.data }))
        console.log(this.state.songs)
    }

    addSongToPlayList = (Title, Artist, album, Time, TABLE_NAME) => {
        axios.post(`http://localhost:3001/addSongToPlayList?playListName=${TABLE_NAME}&Title=${Title}&Artist=${Artist}&Album=${album}&Time=${Time}`)

        alert(`Added To Playlist: ${TABLE_NAME}`);
    }

    render() {
        let albums = this.state.albums
        let songs = this.state.songs;
        let playLists = this.state.playLists
        return (
            <div>
                <h1 id='Table Title'>Albums</h1>
                <div>
                    {albums === undefined ? (
                        <h3>no albums detected</h3>
                    ) : (
                        <ul>
                            {albums.map((albums) => (
                                <li id={albums} onClick={((e) => this.selectedAlbum(e, { albums }))}>{albums}</li>
                            ))}
                        </ul>
                    )}

                </div>
                <div>
                    <h3>Current Album: {this.state.selectedAlbum}</h3>
                    <table id='Songs'>
                        <tbody>
                            <tr>
                                <th>Play Option</th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Length of the song</th>
                                <th></th>
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
                                                    onClick={() => { this.addSongToPlayList(songs.Title, songs.Artist, songs.album, songs.Time, playLists.TABLE_NAME) }}>
                                                    {playLists.TABLE_NAME}
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
