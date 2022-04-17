import React from "react";

export default function Header(){
    return(
        <header>
            <a href="#">sunnyside</a>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#" className="contact--cta">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}