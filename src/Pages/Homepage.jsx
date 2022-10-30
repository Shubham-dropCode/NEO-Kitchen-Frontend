import React, { useEffect } from 'react'
import Nav from '../Components/Nav'
import ProductCategorie from "../Components/Product/ProductCatagorie"
import Product from "../Components/Product/Product"
import HeroNewSlider from '../Components/HeroNewSlider'
import HeroSlider from '../Components/HeroSlider'
import CreateEmotion from "../Components/CreateEmotion"
import HomeVideo from "../Components/HomeVideo"
import OurTeam from "../Components/OurTeam/OurTeam"
import Footer from "../Components/Footer"
import Navbar from '../Components/Navbar/Navbar'
import ProductListing from '../Components/Product/ProductListing'
const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>

        {/* <Navbar/> */}
            {/* <Nav /> */}
            {/* <HeroNewSlider /> */}
            <HeroSlider />

            <div className='main'>
                <CreateEmotion />
                <ProductCategorie />
                {/* <AboutUs /> */}
                {/* <HomeVideo /> */}
                <Product LinkTo="/ProductDetails"/>
                {/* <OurTeam /> */}
                <ProductListing/>
            </div>
            {/* <Footer /> */}


        </>
    )
}

export default Homepage