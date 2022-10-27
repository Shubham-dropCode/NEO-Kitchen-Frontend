import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import BreadCrumb from "../Components/BreadCrumb"
import Product from '../Components/Product/Product'

const NeoSink = () => {
    return (
        <>
            <Nav />
            <BreadCrumb heading="Neo Sink" />
            <Product LinkTo="/ProductDetails"/>
            <Footer />
        </>
    )
}

export default NeoSink