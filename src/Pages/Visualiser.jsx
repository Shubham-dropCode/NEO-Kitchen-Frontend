import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import BreadCrumb from "../Components/BreadCrumb"
import AboutUs from "../Components/AboutUs"

const Visualiser = () => {
    useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
            {/* <Nav /> */}
            <BreadCrumb heading="Visualiser" />
            <AboutUs />
            {/* <Footer /> */}
        </>
    )
}

export default Visualiser