import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Layout } from "antd"
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Checkout from './pages/Checkout'
import Pay from './pages/Pay'
import Hoc from './hoc/hoc'
import Menu from './components/Menu'

import "./styles/index.css"

const App = () => {
  return (
    <Router>
      <Layout className="flex flex-col w-full">
          <Routes>
            <Route path="/" element={<Hoc><Home /><Menu /></Hoc>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<><Profile /></>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pay" element={<Pay />} />
          </Routes>
      </Layout>
    </Router>
  )
}

export default App