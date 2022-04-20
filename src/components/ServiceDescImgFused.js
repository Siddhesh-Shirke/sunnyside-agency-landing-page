import React from "react";

export default function ServiceDescImgFused(props){
    const styles = {
        backgroundImage: `URL(${props.url})`,
        backgroundSize: "cover",
        color: `${props.color}`
    }

    return(
        <div style={styles} className="service--Desc--Img--Fused">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    )
}