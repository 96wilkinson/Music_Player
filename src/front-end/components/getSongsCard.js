import React from "react";
import axios from 'axios'

export default class getSongsCard extends React.Component {
    constructor() {
        super();
        this.state = { items: [] }
    }
    componentWillMount() {
        axios.post('http://localhost:3001/getData')
            .then(response  => this.setState({ items: response.data }))
    }


    render() {
        let items = this.state.items;
        console.log(items)
        return (
            <div>
                {items.map(item =>
                    <h4 >{item.Title}{item.id}</h4>)}
            </div>
        );
    }
}