import React, { useEffect } from 'react'
import BreadCrumb from "../Components/BreadCrumb"
import ProductListing from '../Components/Product/ProductListing'
const Category = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            {/* <Nav /> */}
            <BreadCrumb heading="Products" />
            <ProductListing LinkTo="/ProductDetails" />
            {/* <Footer /> */}
        </>
    )
}

export default Category