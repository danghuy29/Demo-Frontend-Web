import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div id="header" className="bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-light bg-dark">
                    <Link to={"/home"} className="navbar-brand" >HOME</Link>
                </nav>
            </div>
        </div>
    )
}
