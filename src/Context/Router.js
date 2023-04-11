import React, { useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Create from './Create'
import { stateContext } from './Data'
import { initialSate, stateReducer } from './Reducer'

export const Router = () => {
    const [state, dispatch] = useReducer(stateReducer, initialSate)
    return (
        <div>Router
            <stateContext.Provider value={{ state, dispatch }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/Login' element={<Login />}></Route>
                        <Route path='/Home' element={<Home />}></Route>
                        <Route path='/Create' element={<Create />}></Route>
                        <Route path='*' element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </stateContext.Provider>
        </div>
    )
}