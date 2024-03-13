import React from 'react'

const Menu = () => {
    return (
        <nav className='flex justify-end px-10 py-5 w-full fixed z-50 backdrop-blur-3xl'>
            <span className='flex justify-end w-1/2'>
                <img src='./img/cart.svg' alt='Cart' className="w-1/5 cursor-pointer" />
            </span>
        </nav>
    )
}

export default Menu