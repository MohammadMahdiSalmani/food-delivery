import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='flex flex-col w-full justify-around py-10 min-h-56 border-t-2 border-lightGray my-10'>
            <div className='flex w-full justify-around text-gray'>
                <div className='flex flex-col w-1/3 justify-between'>
                    <Link to="/" className='flex justify-center m-1'>Privacy & Policy</Link>
                    <Link to="/" className='flex justify-center m-1'>Terms & Conditions</Link>
                    <Link to="/" className='flex justify-center m-1'>FAQ</Link>
                </div>

                <div className='flex flex-col w-1/3 justify-around'>
                    <Link to="/" className='flex justify-center m-1'>About Us</Link>
                    <Link to="/" className='flex justify-center m-1'>Customer Feedback</Link>
                    <Link to="/" className='flex justify-center m-1'>Community</Link>
                </div>
            </div>

            <p className='flex justify-center w-full text-sm'>© 2017 - 2024 McDonald's. All Rights Reserved</p>
        </footer>
    )
}

export default Footer