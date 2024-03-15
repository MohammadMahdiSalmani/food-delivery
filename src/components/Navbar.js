import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [activeTab, setActiveTab] = useState("home")

    const changeTabHandler = value => {
        if (value === "home") {
            setActiveTab("home")
        } else if (value === "profile") {
            setActiveTab("profile")
        } else {
            setActiveTab("history")
        }
    }

    return (
        <nav className='flex py-4 w-11/12 rounded-2xl self-center fixed bottom-1 backdrop-blur-3xl'>
            <ul className='flex justify-around'>
                <li className='flex justify-center w-1/3 cursor-pointer'>
                    <Link to="/" className='flex justify-center'>
                        <img alt='Home' onClick={() => changeTabHandler("home")} src={`./img/home${activeTab === "home" ? "-solid.svg" : ".svg"}`} className='w-1/5' />
                    </Link>
                </li>

                <li className='flex justify-center w-1/3 cursor-pointer'>
                    <Link to="/login" className='flex justify-center'>
                        <img alt='Profile' onClick={() => changeTabHandler("profile")} src={`./img/user${activeTab === "profile" ? "-solid.svg" : ".svg"}`} className='w-1/5' />
                    </Link>
                </li>

                <li className='flex justify-center w-1/3 cursor-pointer'>
                    <Link to="/history" className='flex justify-center'>
                        <img alt='History' onClick={() => changeTabHandler("history")} src={`./img/history${activeTab === "history" ? "-solid.svg" : ".svg"}`} className='w-1/5' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar