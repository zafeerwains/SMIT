import React from 'react'

export default function Contact() {
    return (
        <>
            <h1 className="text-center text-primary pt-4">Contact Us</h1>
            <div className="container-xxl">
                <div className="row pt-5">
                    <div className="col-12 col-sm-6 col-md-4 px-2">
                        <div className="card text-center px-1 px-sm-3 px-md-5 py-5 mb-3">
                            <h1 className='text-primary'>
                                Call us on
                            </h1>
                            <a href="tel:+923100073599" style={{ textDecoration: "none" }} aria-label="Call US">+923100073599</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 px-2">
                        <div className="card text-center px-1 px-sm-3 px-md-5 py-5 mb-3">
                            <h1 className='text-primary'>
                                Email Adress
                            </h1>
                            <a href="mailto:zafeerwains@gmail.com" style={{ textDecoration: "none" }} aria-label="Call US">zafeerwains@gamil.com</a>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 px-2">
                        <div className="card text-center px-1 px-sm-3 px-md-5 py-5 mb-3">
                            <h1 className='text-primary'>
                                Messege Us                           </h1>
                            <a href="http://wa.me/923100073599" style={{ textDecoration: "none" }} aria-label="Call US">Messege us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
