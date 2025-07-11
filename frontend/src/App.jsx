import React from 'react'
import { assets } from './assets/assets'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment.jsx'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import Payment from './pages/Payment.jsx'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar />
      <Routes path='/'>
        <Route path='' element={<Home/>} />
        <Route path='doctors' element={<Doctors/>} />
        <Route path='doctors/:speciality' element={<Doctors/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='login' element={<Login/>} />
        <Route path='my-appointments' element={<MyAppointments/>} />
        <Route path='my-profile' element={<MyProfile/>} />
        <Route path='appointment/:docId' element={<Appointment/>} />
        <Route path='makepayment/:appointmentId' element={<Payment/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App