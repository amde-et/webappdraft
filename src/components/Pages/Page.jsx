import React from 'react'
import Home from '../Home/Home'
import {Contact} from '../../components/Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Questions } from '../Questions/Questions';

const Page = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/info' element={<Questions/>} />
          <Route  path='/services' element={<Services/>} />
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default Page