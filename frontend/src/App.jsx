import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SideBar from './Components/SideBar';
import styled from "styled-components"
import UserCard from './Components/UserCard';
import Crud_User from './Pages/Users/Crud.User';
import axios from "axios"


const Container = styled.div`
width : 100% ;
`

const Cont = styled.div`
display : flex ;
`

function handleClick() {
  console.log('hello ')
  axios.get('http://localhost:3005/user/get')
}

function App() {

  return (
    <Cont>
      <SideBar />
      <button onClick={handleClick}>test</button>
      <Container className='app-container'>
        <Crud_User />
      </Container>
    </Cont >
  )
}

export default App
