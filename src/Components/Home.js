import React from "react";
import Navbar from "./Navbar";
import MainBanner from "./MainBanner"
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";

export default function Home(){
    return (
        <>
        <Navbar />
        <MainBanner />
        <About />
        <Services />
        <Portfolio />
        </>
    )
}