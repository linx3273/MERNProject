import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Catalogue from './components/Catalogue';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import {Route,Routes} from "react-router-dom";

const App = () =>{
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/catalogue' element={<Catalogue/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App;