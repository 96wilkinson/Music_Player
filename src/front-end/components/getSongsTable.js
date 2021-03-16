import React from "react";
import axios from 'axios'

export default class getSongsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            selectedTrack: "nothing as of yet"
        }
    }
    componentWillMount() {
        axios.post('http://localhost:3001/getData')
            .then(response => this.setState({ items: response.data }))
    }

    onViewChange = (id) => {
        this.setState({selectedTrack: id}, () => console.log(this.state.id)) 
      };

    render() {
        let items = this.state.items;
        let track = this.state.selectedTrack;
        console.log(items)
        
        return (
            <div>
                <h1 id='Table Title'>Songs</h1>
                <table id='Songs'>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Length of the song</th>
                            <th></th>
                        </tr>
                        {items.map(items =>
                            <tr key={items.id}>
                                <td
                                  id={items.Title}
                                  onClick={() => this.onViewChange(items.Title)}>
                                    Play
                                </td>
                                <td>
                                    {items.Title}
                                </td>
                                <td>
                                    {items.Album}
                                </td>
                                <td>
                                    {items.Time}
                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>
                <h3>Playing: {track}</h3>
            </div>
        );
    }
}
