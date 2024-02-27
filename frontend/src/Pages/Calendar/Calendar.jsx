import styled from "styled-components"
import Navbar from "../../Components/Navbar"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const Container = styled.div`
& .calendar{
    border : solid 1.5px ; 
    margin : 0 ; 
    background : #cacdcd;
    margin : 100px ;
    &:hover{
        transform: scale(1.1);
        transition : .8s;
        box-shadow: -10px 10px 10px #00000067 ;
    }
}
`

function Calendar() {
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
            <h1>hello</h1>
        </Container >
    )
}

export default Calendar