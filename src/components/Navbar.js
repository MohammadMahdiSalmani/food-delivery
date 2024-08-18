import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='flex justify-around lg:justify-start lg:w-full'>
            <li className='flex justify-center w-1/3 lg:w-1/6 cursor-pointer'>
                <Link to="/" className='flex w-full justify-center items-center hover:text-primary'>
                    <img alt='Home' src="./img/home.svg" className='w-1/5 lg:hidden' />
                    <span className='text-xl max-sm:hidden'>Home</span>
                </Link>
            </li>

            <li className='flex justify-center w-1/3 lg:w-1/6 cursor-pointer'>
                <Link to="/profile" className='flex w-full justify-center items-center hover:text-primary'>
                    <img alt='Profile' src="./img/user.svg" className='w-1/5 lg:hidden' />
                    <span className='text-xl max-sm:hidden'>Profile</span>
                </Link>
            </li>

            <li className='flex justify-center w-1/3 lg:w-1/6 cursor-pointer'>
                <Link to="/history" className='flex w-full justify-center items-center hover:text-primary'>
                    <img alt='History' src="./img/history.svg" className='w-1/5 lg:hidden' />
                    <span className='text-xl max-sm:hidden'>History</span>
                </Link>
            </li>
        </ul>
    )
}

export default Navbar