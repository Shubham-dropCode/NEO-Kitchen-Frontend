import React, { useEffect } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Product from '../Components/Product/Product'

const Accessories = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            {/* <Nav /> */}
            <BreadCrumb heading="Kitchen Accessories" />
            <Product LinkTo="/ProductDetails"/>
            {/* <Footer /> */}
        </>
    )
}


export default Accessories