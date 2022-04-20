import React from "react";

export default function ServiceDesc(props){

    return(
        <div className="service--desc">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            {
                (props.serviceNo === "2") 
                ? 
                <a href="#" className="stand--out--click--here">CLICK HERE</a> 
                : 
                <a href="#" className="transform--click--here">CLICK HERE</a>
            }
        </div>
    )
}