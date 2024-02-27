import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import styled from "styled-components"
import Crud_User from './Pages/Users/Crud_Add.User';
import Calendar from './Pages/Calendar/Calendar';
import Profile from './Pages/Profile/Profile';
import Materiels from './Pages/Materiels/Materiels';
import Materiel from './Pages/Materiels/Materiel';
import Login from './Pages/Login/Login';
import Users from './Pages/Users/Users';
import Crud_materiel from './Pages/Materiels/Crud.materiel';
import User from './Pages/Users/User';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import { useNavigate, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Auth from './Auth';


const Container = styled.div`
width : 100% ;
`

const Cont = styled.div``


function App() {

  const [login, setLogin] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    console.log('localStorage.getItem()', localStorage.getItem('token'),)
    console.log(localStorage.getItem('token') !== null);
    if (localStorage.getItem('token') !== null) {
      setLogin(true)
    } else {
      setLogin(false)
      navigate('/')
    }
    console.log(login);
    return () => { }
  }, [login])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/calendar' element={<Auth><Calendar /></Auth>} />
        <Route path='/products' element={<Auth><Materiels /></Auth>} />
        <Route path='/product/:id' element={<Auth><Materiel /></Auth>} />
        <Route path='/product/crud' element={<Auth><Crud_materiel /></Auth>} />
        <Route path='/profile/:id' element={<Auth><Profile /></Auth>} />
        <Route path='/users' element={<Auth><Users /></Auth>} />
        <Route path='/user/:id' element={<Auth><User /></Auth>} />
        <Route path='/user/crud' element={<Auth><Crud_User /></Auth>} />
        <Route path='/user/dashboard' element={<Auth> <Dashboard /></Auth>} />
      </Routes >
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
        transition:Bounce
      />
    </>
  )
}

export default App
