import React from "react";
import Testimonial from "./Testimonial";

export default function Testimonials(){
    return(
        <section className="testimonials--wrapper">
            <h1 className="testimonials--heading">CLIENT TESTIMONIALS</h1>
            <div className="testimonials">
                <Testimonial profile="https://siddheshshirke.files.wordpress.com/2022/04/image-emily.jpg"
                            comment="We put our trust in Sunnyside and the delivered, making sure our needs were met and deadlines were always hit."
                            name="Emily R."
                            designation="Marketing Director"
                />
                <Testimonial profile="https://siddheshshirke.files.wordpress.com/2022/04/image-thomas.jpg"
                            comment="Sunnysides's enthusiasm coupled with their keen interest in our brands' success made it a satisfying and enjoyable experience."
                            name="Thomas S."
                            designation="Chief Operating Officer"
                />
                <Testimonial profile="https://siddheshshirke.files.wordpress.com/2022/04/image-jennie.jpg"
                            comment="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                            name="Jennie F."
                            designation="Business Owner"
                />
            </div>
        </section>
    )
}