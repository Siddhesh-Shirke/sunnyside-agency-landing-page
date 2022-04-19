import React from "react";
import arrowDown from "../images/icon-arrow-down.svg"

export default function Hero(){
    return(
        <section className="hero">
            <p>WE ARE CREATIVES.</p>
            <img src={arrowDown} alt=""/>
        </section>
    )
}