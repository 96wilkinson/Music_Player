import React from "react";
import axios from 'axios'

export default class getSongsTable extends React.Component {
    constructor() {
        super();
        this.state = { items: [] }
    }
    componentWillMount() {
        axios.post('http://localhost:3001/getData')
            .then(response => this.setState({ items: response.data }))
    }


    render() {
        let items = this.state.items;
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
                        </tr>
                        {items.map(item =>


                            <tr key={item.id}>
                                <td>{item.Title}</td>
                                <td>{item.Album}</td>
                                <td>{item.Time}</td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
