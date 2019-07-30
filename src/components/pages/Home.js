import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <h1 className="main__h1">Разработка сайтов любой сложности</h1>
            <Link className="btn-link" to="/projects">Составить свой проект</Link>
            <div className="home-links">
                <Link to="/circle">цикл разработки</Link>
                <Link to="/about">О команде</Link>
                <Link to="/contacts">Контакты</Link>
            </div>
        </div>
    )
}
