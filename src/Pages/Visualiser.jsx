import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import BreadCrumb from "../Components/BreadCrumb"
import AboutUs from "../Components/AboutUs"

const Visualiser = () => {
    return (
        <>
            <Nav />
            <BreadCrumb heading="Visualiser" />
            <AboutUs />
            <Footer />
        </>
    )
}

export default Visualiser