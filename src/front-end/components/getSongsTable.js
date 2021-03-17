import React from "react";
import axios from 'axios'

export default class getSongsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            selectedTrack: "nothing as of yet"
        }
    }
    componentWillMount() {
        axios.post('http://localhost:3001/getData')
            .then(response => this.setState({ songs: response.data }))
    }

    onViewChange = (id) => {
        this.setState({ selectedTrack: id }, () => this.props.selectedTrack(id))
    };

    render() {
        let songs = this.state.songs;
        return (
            <div>
                <h1 id='Table Title'>Songs</h1>
                    <div>
                            <table id='Songs'>
                                <tbody>
                                    <tr>
                                        <th>Play Option</th>
                                        <th>Title</th>
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
                                            {songs.Album}
                                        </td>
                                        <td>
                                            {songs.Time}
                                        </td>
                                    </tr>
                                                            )}
                                </tbody>
                            </table>
                    </div>
                <h3>{this.props.listType}</h3>
            </div>
        );
    }
}
