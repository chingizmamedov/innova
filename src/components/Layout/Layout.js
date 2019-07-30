import React, { Component } from 'react'
import Header from '../Header/Header';
import Main from '../Main/Main';

export default class Layout extends Component {
    render() {
        return (
            <main>
                <Header />
                <Main />
            </main>
        )
    }
}
