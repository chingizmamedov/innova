import React from 'react'
import { Link } from "react-router-dom";
import Drawer from '../Drawer/Drawer';
import './header.scss'

export default function Header() {
    return (
      <header className="header container">
      <Link className="logo" to="/">
        <h2>Digital DEV TEAM</h2>
      </Link>
        
        <div className="d-flex">
          <Drawer/>
          <a className="linktel" href="tel:+351 765-21-01">351 765-21-01</a>
        </div>

      </header>
    );
  }
