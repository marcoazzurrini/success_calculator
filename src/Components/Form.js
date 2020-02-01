import React, { Component } from 'react'

export default class Form extends Component {

    state = { revenue: '', saleWorth: '' };

    handleChange = e => {
        switch(e.target.id) {
            case 'revenue': this.setState({ revenue: e.target.value }); break;
            case 'saleWorth': this.setState({ saleWorth: e.target.value }); break;
            default: console.log('something went wrong');
        }
    }

    render() {
        return (
            <form className="calculator__form">

               <label className="calculator__form--label">How much do you wanna make in a year</label>
               <input className="calculator__form--input" required placeholder="Desired yearly revenue" type="number" 
                id="revenue" value={this.state.revenue} onChange={this.handleChange}
               />

               <label className="calculator__form--label">How much do you charge for your product?</label>
               <input className="calculator__form--input" required placeholder="Single sale net worth" type="number" 
                id="saleWorth" value={this.state.saleWorth} onChange={this.handleChange}
               />
            </form>
        )
    }
}
