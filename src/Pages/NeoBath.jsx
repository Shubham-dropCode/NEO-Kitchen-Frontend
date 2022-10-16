import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import Product from "../Components/Product/Product"
import BreadCrumb from "../Components/BreadCrumb"
const NeoBath = () => {
    return (
        <>
            <Nav />
            <BreadCrumb heading="Neo Bath" />
            <Product />
            <Footer />
        </>
    )
}

export default NeoBath