import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Navb from '../../Components/Navbar'
import SideBar from '../../Components/SideBar'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Navbar from '../../Components/Navbar'


function Dashboard() {
    const navigate = useNavigate()
    React.useEffect(() => {
        if (localStorage.getItem('token') === "" || !localStorage.getItem('token')) {
            navigate('/')
            toast.error("Expired session")
        }
        return () => { }
    }, [])

    return (
        <Container>
            <Navbar />
        </Container>
    )
}

const Container = styled.div`
display : flex ;
flex-direction: column;
& >  div{
display : flex ;
overflow: hidden;
}
`
const Wrapper = styled.div`
overflow: hidden;

`

export default Dashboard