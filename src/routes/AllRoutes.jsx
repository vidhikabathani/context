import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginf from '../pages/Loginf'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Product from '../pages/Product'

function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route> 
                <Route path='/login' element={<Loginf/>}></Route> 
                <Route path='/signup' element={<Signup/>}></Route> 
                <Route path='/product' element={<Product/>}></Route> 
            </Routes>
        </div>
    )
}

export default AllRoutes