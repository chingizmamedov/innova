import React from 'react'
import { NavLink } from "react-router-dom";


const links = ['Home', 'About', 'Contacts']

const linksList = links.map((item, index) => {
    return (
        <li  key={index}>
            <NavLink className="navlink" to={`${item.toLowerCase() == 'home' ? '/' : item.toLowerCase()}`}>{item}</NavLink>
        </li>
    )
})


export default function Drawer() {
    return (
        <ul className="navigation">
            {linksList}
        </ul>
    )
}
