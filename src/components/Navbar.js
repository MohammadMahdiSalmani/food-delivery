import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex py-4 w-11/12 rounded-2xl self-center fixed bottom-1 backdrop-blur-3xl'>
        <ul className='flex justify-around'>
            <li className='flex justify-center w-1/3 cursor-pointer'>
                <img alt='Home' src='./img/home.svg' className='w-1/5' />
            </li>

            <li className='flex justify-center w-1/3 cursor-pointer'>
                <img alt='Profile' src='./img/user.svg' className='w-1/5' />
            </li>

            <li className='flex justify-center w-1/3 cursor-pointer'>
                <img alt='History' src='./img/history.svg' className='w-1/5' />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar