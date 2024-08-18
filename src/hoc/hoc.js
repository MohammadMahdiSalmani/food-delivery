import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Hoc = ({ children }) => {
    return (
        <>
            {children}
            <nav className='flex py-4 w-11/12 rounded-2xl self-center fixed bottom-1 backdrop-blur-3xl lg:hidden'>
                <Navbar />
            </nav>
            <Footer />
        </>
    )
}

export default Hoc