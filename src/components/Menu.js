import React from 'react'

const Menu = () => {
    return (
        <nav className='flex justify-between px-10 w-full h-36'>
            <span className='flex justify-start w-1/2'>
                <img src='./img/menu.svg' alt='Menu' className="w-1/6 cursor-pointer" />
            </span>
            
            <span className='flex justify-end w-1/2'>
                <img src='./img/cart.svg' alt='Cart' className="w-1/6 cursor-pointer" />
            </span>
        </nav>
    )
}

export default Menu