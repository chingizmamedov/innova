import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contacts';
import Circle from '../pages/Circle';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Route path={'/'} exact component={Home} />
                <Route path={'/about'} component={About} />
                <Route path={'/projects'} component={Projects} />
                <Route path={'/contacts'} component={Contacts} />
                <Route path={'/circle'} component={Circle} />
            </div>
        )
    }
}
