import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './LoginFrom/Home'
import Login from './LoginFrom/Login'
import Create from './LoginFrom/Create'

const RouterLog = () => {
  return (
    <>
    <BrowserRouter>
    <h1>RouterLog</h1>
      <Routes>
        <Route path='/Home'element={<Home />}></Route>
        <Route path='/Login'element={<Login />}></Route>
        <Route path='/Create'element={<Create />}></Route>
        <Route path='*'element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouterLog