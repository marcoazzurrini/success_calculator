import React, { Component } from 'react';

import Header from './Header';
import Form from './Form';
import Footer from './Footer';
import ProgressBar from './ProgressBar';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="calculator">
                    <ProgressBar />
                    <Header />
                    <Form />
                    <Footer />
                </div>
            </div>
        )
    }
}
