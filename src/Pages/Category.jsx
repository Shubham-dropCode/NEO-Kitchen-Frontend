import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import BreadCrumb from "../Components/BreadCrumb"
import Product from "../Components/Product/Product"
const Category = () => {
    return (
        <>
            <Nav />
            <BreadCrumb heading="Products" />
            <Product />
            <Footer />
        </>
    )
}

export default Category