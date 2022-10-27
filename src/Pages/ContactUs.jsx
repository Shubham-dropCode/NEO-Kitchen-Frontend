import React, { useEffect } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Nav />
            <BreadCrumb heading="Contact Us"/>
            <ContactForm />
            <Footer />
        </>
    )
}

export default ContactUs