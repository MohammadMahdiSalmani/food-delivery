import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "antd"
import Login from './pages/Login'
import Home from './pages/Home'

import "./styles/index.css"
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Layout className="flex flex-col w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Navbar />
      </Layout>
    </Router>
  )
}

export default App