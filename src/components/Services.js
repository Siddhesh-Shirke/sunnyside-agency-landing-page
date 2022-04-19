import React from "react";
import ServiceDesc from "./ServiceDesc";
import ServiceImg from "./ServiceImg";
import ServiceDescImgFused from "./ServiceDescImgFused";

export default function Services(){
    return(
        <section className="services">
            <ServiceDesc heading="Transform your brand"
                         text="We are a full services creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marjeting for you."/>
            <ServiceImg url="https://siddheshshirke.files.wordpress.com/2022/04/image-transform.jpg"/>
            <ServiceImg url="https://siddheshshirke.files.wordpress.com/2022/04/image-stand-out.jpg"/> 
            <ServiceDesc heading="Stand out to the right audience"
                         text="Using a collaborative formula of designers, researcher, photographers, videographers and copywriters, we'll build and extend your brand in digital places." 
            />
            <ServiceDescImgFused url="https://siddheshshirke.files.wordpress.com/2022/04/image-graphic-design.jpg"
                                 heading="Graphic Design"
                                 color="hsl(167, 40%, 24%)"
                                 text="Great designs make you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."/>
            <ServiceDescImgFused url="https://siddheshshirke.files.wordpress.com/2022/04/image-photography.jpg"
                                color="hsl(198, 62%, 26%)"
                                 heading="Photography"
                                 text="Increase your credibility by getting the most stunning, high quality photos that increase your business image."/>

        </section>
    )
}