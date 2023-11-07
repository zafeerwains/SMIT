import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from './Home'
import Contact from './Contact'
import Products from './Products'
export default function index() {
    return (
        <>

            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Products' element={<Products />} />

                </Routes>
            </main>
            <Footer />
        </>
    )
}
