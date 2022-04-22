import React from "react";
import hamburger from "../images/icon-hamburger.svg"

export default function Header(){

    React.useEffect(() => {
        document.getElementById("hamburger--menu").addEventListener("click",() => {
                document.getElementById("header--nav--ul").classList.toggle("active");
            })
        },[])

    return(
        <header>
            <a href="#">sunnyside</a>
            <img src={hamburger} id="hamburger--menu" className="hamburger--menu" alt="" />
            <nav id="header--nav" className="header--nav">
                <ul id="header--nav--ul" className="header--nav--ul">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#" className="contact--cta">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}