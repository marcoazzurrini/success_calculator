import React, { Component } from 'react'

export default class Footer extends Component {

    state = { btnText: 'Next' };

    render() {
        return (
            <div className="calculator__footer">

                <p className="calculator__form--reset">Reset Fields</p>

                <button type="submit" className="calculator__footer--btn">{this.state.btnText}</button>
            
            </div>
        )
    }
}
