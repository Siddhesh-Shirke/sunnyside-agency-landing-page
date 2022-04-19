import React from "react";

export default function Testimonial(props){
    return(
        <div className="testimonial">
            <img src={props.profile} className="profile--pic" alt="" />
            <p className="comment">{props.comment}</p>
            <p className="name">{props.name}</p>
            <p className="designation">{props.designation}</p>
        </div>
    )
}