import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BreadCrumb from "../Components/BreadCrumb"
import ProductListing from '../Components/Product/ProductListing'
const Category = () => {
    const [error, setError] = useState(null);
    const [sink, setSink] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

       useEffect(() => {
    axios
      .get("http://localhost:1337/api/Sinks?populate=*")
      .then(({ data }) => setSink(data.data))
      .catch((error) => setError(error));
  }, []);
  
 

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
    return (
        <>
            {/* <Nav /> */}
            <BreadCrumb heading="Products" />
            <ProductListing  LinkTo="/ProductDetails" />
            {/* <Footer /> */}
        </>
    )
}

export default Category