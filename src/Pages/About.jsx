import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import BreadCrumb from "../Components/BreadCrumb"
import AboutUs from "../Components/AboutUs"
const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Nav />
            <BreadCrumb heading="About Us" />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About