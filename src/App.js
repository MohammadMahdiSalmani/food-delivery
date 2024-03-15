import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "antd"
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './components/Menu'

import "./styles/index.css"

const App = () => {
  return (
    <Router>
      <Layout className="flex flex-col w-full">
        <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Navbar />
        <Footer />
      </Layout>
    </Router>
  )
}

export default App