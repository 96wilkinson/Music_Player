import React from "react";
import axios from 'axios'
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default class getSongsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            selectedTrack: "nothing as of yet",
            selectedPlayList: "no selected playlist",
            playListName: "",
            loading: false,
            formCreation: false,
            playLists: []
        }
    }
    componentWillMount() {
        this.getPlayLists()
    }

    onViewChange = (id) => {
        this.setState({ selectedTrack: id }, () => this.props.selectedTrack(id))
    };

    selectedPlayList = (e, data) => {
        this.setState(
            { selectedPlayList: data.playLists.playlist },
            () => {
                this.getSongsForSelectedPlayList()
            }
        )
    }

    getPlayLists = () => {
        axios.post('http://localhost:3001/getAllPlaylists')
            .then(response => this.setState({ playLists: response.data }))
    }

    getSongsForSelectedPlayList() {
        let urlPreFix = 'http://localhost:3001/getSongsByPlayList?playList='
        let url = urlPreFix + this.state.selectedPlayList
        console.log(url)
        axios.post(url)
            .then(response => this.setState({ songs: response.data }))
    }

    addSongToPlayList = (Title, Artist, album, Time, TABLE_NAME) => {
        axios.post(`http://localhost:3001/addSongToPlayList?playListName=${TABLE_NAME}&Title=${Title}&Artist=${Artist}&Album=${album}&Time=${Time}`)
        alert(`Added To Playlist: ${TABLE_NAME}`);
    }

    createNewPlayList = (e) => {
        let urlPreFix = 'http://localhost:3001/createPlayList?playListName='
        let url = urlPreFix + this.state.playListName
        console.log(url)
        axios.post(url)
            .then(alert(`Created Playlist: ' + ${this.state.playListName}
            
            Allow some time and then refresh to see new playlist`))
         e.preventDefault(); //
    }

    deletePlaylist = (playListName) => {
        let urlPreFix = 'http://localhost:3001/deletePlayList?playListName='
        let url = urlPreFix + playListName
        console.log(url)
        axios.post(url)
            .then(alert('Removed Playlist: ' + playListName))

    }


    setPlayListState = (e) => {
        this.setState({ playListName: e.target.value })
    }

    render() {
        let songs = this.state.songs;
        let playLists = this.state.playLists
        return (
            <div>
                <h1 id='Table Title'>Playlists</h1>
                <div>

                    {this.state.formCreation === false ?
                        <button onClick={() => {
                            this.setState({
                                formCreation: true
                            })
                        }}>Create A PlayList</button> :
                        <div>
                            <button onClick={() => {
                                this.setState({
                                    formCreation: false
                                })
                            }}>Finished creating PlayList</button>

                            <form onSubmit={this.createNewPlayList}>
                                <label>
                                    Playlist Name:
                          <input type="text" value={this.state.playListName} onChange={this.setPlayListState} />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    }

                    {playLists === undefined ? (
                        <h3>no playLists detected</h3>
                    ) : (
                        <table>
                            <tr>
                                <th>Playlist Name</th>
                                <th>Remove Playlist</th>
                            </tr>
                            {playLists.map((playLists) => (
                                <tr>
                                    <td key={playLists.id} id={playLists.playlist} onClick={((e) => this.selectedPlayList(e, { playLists }))}>{playLists.playlist}</td>
                                    <td ><button onClick={()=> this.deletePlaylist(playLists.playlist)}>Remove Playlist</button></td>
                                </tr>
                            ))}
                        </table>
                    )}

                </div>
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
                                        {playLists === undefined ? (
                                            <h3>no playLists detected</h3>
                                        ) : (
                                            <DropdownButton id="dropdown-basic-button" title="Add To Playlist">
                                                {playLists.map(playLists =>
                                                    <Dropdown.Item
                                                        onClick={() => { this.addSongToPlayList(songs.Title, songs.Artist, songs.Album, songs.Time, playLists.playlist) }}>
                                                        {playLists.playlist}
                                                    </Dropdown.Item>
                                                )}
                                            </DropdownButton>
                                        )}

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
