import React from 'react'
import Nav from '../Components/Nav'
import ProductCategorie from "../Components/Product/ProductCatagorie"
import HeroNewSlider from '../Components/HeroNewSlider'
import HeroSlider from '../Components/HeroSlider'
import CreateEmotion from "../Components/CreateEmotion"
import HomeVideo from "../Components/HomeVideo"
import OurTeam from "../Components/OurTeam/OurTeam"
import Footer from "../Components/Footer"
const Homepage = () => {
    return (
        <>


            <Nav />
            {/* <HeroNewSlider /> */}
            <HeroSlider />

            <div className='main'>
                <CreateEmotion />
                <ProductCategorie />
                {/* <AboutUs /> */}
                <HomeVideo />
                <OurTeam />
            </div>
            <Footer />


        </>
    )
}

export default Homepage