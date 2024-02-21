import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import styled from "styled-components"
import Crud_User from './Pages/Users/Crud.User';
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
      navigate('/login')
    }
    console.log(login);
  }, [login])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/materiels' element={<Materiels />} />
      <Route path='/materiel/:id' element={<Materiel />} />
      <Route path='/materiel/crud' element={<Crud_materiel />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/users' element={<Users />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/user/crud' element={<Crud_User />} />
    </Routes >
  )
}

export default App
