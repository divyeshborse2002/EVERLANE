import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Women from './Women'
import Men from './Men'
import Product from './Product'
import Descriptionpage from './Descriptionpage'
import Form from './Form'
import Cart from '../Cart'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Women />}></Route>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/description/:id' element={<Descriptionpage />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
