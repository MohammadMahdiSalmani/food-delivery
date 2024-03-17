import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex py-4 w-11/12 rounded-2xl self-center fixed bottom-1 backdrop-blur-3xl'>
            <ul className='flex justify-around'>
                <li className='flex justify-center w-1/3 cursor-pointer'>
                    <Link to="/" className='flex justify-center'>
                        <img alt='Home' src="./img/home.svg" className='w-1/5' />
                    </Link>
                </li>

                <li className='flex justify-center w-1/3 cursor-pointer'>
                    <Link to="/profile" className='flex justify-center'>
                        <img alt='Profile' src="./img/user.svg" className='w-1/5' />
                    </Link>
                </li>

                <li className='flex justify-center w-1/3 cursor-pointer'>
                    <Link to="/history" className='flex justify-center'>
                        <img alt='History' src="./img/history.svg" className='w-1/5' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar