import React from "react";
import CardWidget from "../CardWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">The Black Library</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Categoria 1</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Categoria 2</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Categoria 3</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Categoria 4#</a>
                    </li>
                    <li>
                        <CardWidget></CardWidget>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;