import React from "react";

export default function ServiceDesc(props){
    return(
        <div className="service--desc">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <a href="#">CLICK HERE</a>
        </div>
    )
}