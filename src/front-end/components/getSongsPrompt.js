import React from "react";
import getSongs from '../../back-end/Utils/getSongs'

export default class LoggingButton extends React.Component {
    handleClick() {
        getSongs();
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