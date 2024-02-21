import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import "./home.scss"
import login from "../../assets/RegisterIcon.png"
import register from "../../assets/loginIcon.png"

const Container = styled.div`
 background: #232b26 ;
 width: 100vw;
 height: 100vh;
 
 & >div{
    position : absolute ;
    top : 50% ;
    left : 50% ;
    translate : -50% -50% ;
    width: max-content;
    padding : 150px ;
    display: flex;
    flex-direction: column;
    align-items: center ;
    gap:100px ; 
    z-index: 2;
    border-radius: 25px ;
    & > div{
        display : flex ;
        gap : 50px ;
    }
 }
`
const Button = styled.button`
width: 300px;
min-width: 100px;
font-size: 1.2rem;
padding : 5px 0px ;
cursor : pointer;
background : white ;
border : none ;
display : flex ;
align-items: center;
justify-content: center;
gap : 20px ;
& > *{
    color : black ;
} ; 
`
const Logo = styled.img`
transform : rotatez(60deg) infinite ;
animation: infinite;
`


function Home() {
    return (
        <Container>
            <div>
                <div className='logo-login-container'>
                    <Logo className='logo-login' src='https://seaal.dz/fr/wp-content/uploads/sites/2/2023/02/LOGO-POUR-WEB-01.png' alt='logo' />
                </div>
                <div>
                    <Link to='/login'><Button className='btn btn-login'><div className='icon-gif' style={
                        {
                            background: `url(${login})`,
                            backgroundSize: "cover",
                        }
                    }></div> Login</Button></Link>
                    <Link to='/register'><Button className='btn btn-register'><div className='icon-gif' style={
                        {
                            background: `url(${register}) center`,
                            backgroundSize: 'contain;'
                        }
                    }></div> Register</Button></Link>
                </div>
            </div>
        </Container >
    )
}

export default Home