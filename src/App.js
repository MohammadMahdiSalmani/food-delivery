import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "antd"
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './components/Menu'

import "./styles/index.css"

const App = () => {
  return (
    <Router>
      <Layout className="flex flex-col w-full">
          <Routes>
            <Route path="/" element={<><Home /><Menu /><Navbar /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<><Profile /><Navbar /></>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App