import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import PreFooterDecor from "./components/PreFooterDecor";

export default function App(){
    return(
        <>
            <Header />
            <Hero />
            <Services />
            <Testimonials />
            <PreFooterDecor />
        </>
    )
}