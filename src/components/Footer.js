import React from "react";
import Facebook from "../images/icon-facebook.svg"
import Instagram from "../images/icon-instagram.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Twitter from "../images/icon-twitter.svg"

export default function Footer(){
    return(
        <footer>
            <h1>sunnyside</h1>
            <nav className="footer--nav">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </nav>
            <div className="social--media--icons">
                <a href="#"><img src={Facebook} alt=""/></a>
                <a href="#"><img src={Instagram} alt=""/></a>
                <a href="#"><img src={Pinterest} alt=""/></a>
                <a href="#"><img src={Twitter} alt=""/></a>
            </div>
        </footer>
    )
}