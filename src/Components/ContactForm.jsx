import React from 'react'

const ContactForm = () => {
    return (
        <section className="module" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h2 className="module-title font-alt">Contact us</h2>
                        <div className="module-subtitle font-serif" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <form
                            id="contactForm"
                            role="form"
                            method="post"
                            action="php/contact.php"
                        >
                            <div className="form-group">
                                <label className="sr-only" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name*"
                                    required="required"
                                    data-validation-required-message="Please enter your name."
                                />
                                <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="form-control"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email*"
                                    required="required"
                                    data-validation-required-message="Please enter your email address."
                                />
                                <p className="help-block text-danger" />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    rows={7}
                                    id="message"
                                    name="message"
                                    placeholder="Your Message*"
                                    required="required"
                                    data-validation-required-message="Please enter your message."
                                    defaultValue={""}
                                />
                                <p className="help-block text-danger" />
                            </div>
                            <div className="text-center">
                                <button
                                    className="btn btn-block btn-round btn-d"
                                    id="cfsubmit"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="ajax-response font-alt" id="contactFormResponse" />
                    </div>
                    <div className="col-sm-4">
                        <div className="alt-features-item mt-0">
                            <div className="alt-features-icon">
                                <span className="icon-megaphone" />
                            </div>
                            <h3 className="alt-features-title font-alt">Where to meet</h3>Titan
                            Company
                            <br />
                            23 Greate Street
                            <br />
                            Los Angeles, 12345 LS
                        </div>
                        <div className="alt-features-item mt-xs-60">
                            <div className="alt-features-icon">
                                <span className="icon-map" />
                            </div>
                            <h3 className="alt-features-title font-alt">Say Hello</h3>Email:
                            somecompany@example.com
                            <br />
                            Phone: +1 234 567 89 10
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm