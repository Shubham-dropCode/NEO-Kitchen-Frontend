import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import BreadCrumb from "../Components/BreadCrumb"
import Product from '../Components/Product/Product'

const NeoPro = () => {
    return (
        <>
            <Nav />
            <BreadCrumb heading="Neo Pro" />
            <Product />
            <Footer />
        </>
    )
}

export default NeoPro