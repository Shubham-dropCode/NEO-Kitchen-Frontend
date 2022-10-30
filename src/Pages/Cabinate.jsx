import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Product from "../Components/Product/Product"
import BreadCrumb from "../Components/BreadCrumb"
const NeoBath = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            {/* <Nav /> */}
            <BreadCrumb heading="Kitchen Cabinate" />
            <Product LinkTo="/ProductDetails"/>
            {/* <Footer /> */}
        </>
    )
}

export default NeoBath