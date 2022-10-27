import React, { useEffect } from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import BreadCrumb from "../Components/BreadCrumb"
import Product from "../Components/Product/Product"
const Category = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Nav />
            <BreadCrumb heading="Products" />
            <Product LinkTo="/ProductDetails" />
            <Footer />
        </>
    )
}

export default Category