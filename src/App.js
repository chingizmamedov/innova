import React, { Component } from 'react'
import { connect } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout/Layout';


class App extends Component {
    render() {
        return (
            <Router>
              <Layout />
              
            </Router>
        )
    }
}

const MapState = (state) => {
    return {}
}


export default connect(MapState)(App)
