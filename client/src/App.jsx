import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'
import Signup from './Signup'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<SignIn/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
