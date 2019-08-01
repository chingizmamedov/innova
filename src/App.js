import React, { Component } from 'react'
import { connect } from "react-redux";

import { BrowserRouter as HashRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';


class App extends Component {
    render() {
        return (
            <HashRouter>
              <Layout />
            </HashRouter>
        )
    }
}

const MapState = (state) => {
    return {}
}


export default connect(MapState)(App)
