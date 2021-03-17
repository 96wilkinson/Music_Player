import React from "react";
import arrayDuplicateRemoval from '../arrayDuplicateRemoval'

export default class getSongsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            albums: [],
            selectedTrack: "nothing as of yet",
            selectedAlbum: "No Album Selected"

        }
    }

    componentWillMount() {
        arrayDuplicateRemoval().then(response => this.setState({ albums: response }))
        console.log(this.state.albums)

    }

    onViewChange = (id) => {
        this.setState({ selectedTrack: id }, () => this.props.selectedTrack(id))
    };

    selectedAlbum = (e, data) => {
        this.setState({selectedAlbum: data.albums})
    }

    render() {
        let albums = this.state.albums
        return (
            <div>
                <h1 id='Table Title'>Albums</h1>
                <div>
                    {albums === undefined ? (
                        <h3>no albums detected</h3>
                    ) : (
                        <ul>
                            {albums.map((albums) => (
                                <li id={albums} onClick={((e) => this.selectedAlbum(e, {albums}))}>{albums}</li>
                            ))}
                        </ul>
                    )}

                </div>
                <div>
                    <h3>Current Album: {this.state.selectedAlbum}</h3>
                </div>
                
            </div>
        );
    }
}
