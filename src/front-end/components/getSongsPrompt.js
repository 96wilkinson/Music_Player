import React from "react";
import axios from 'axios'

export default class getSongsPrompt extends React.Component {
    handleClick () {
        axios.post('http://localhost:3001/getData')
          .then(response => console.log(response))
      }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        );
    }
}