import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import "./home.scss"
import login from "../../assets/loginIcon.png"
import loginGif from "../../assets/loginIcon.gif"
import register from "../../assets/registerIcon.png"
import registerGif from "../../assets/registerIcon.gif"


function Home() {
    const [hoverLogin, setHoverLogin] = useState(false);
    const [hoverRegister, setHoverRegister] = useState(false);
    useEffect(() => {
        localStorage.clear('token')
    }, [])
    return (
        <Container>
            <div>
                <div className='logo-login-container'>
                    <Logo className='logo-login' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJxBXD9EEkotmfUbYuHvImguksXY-savL2PvsQ%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=45981a554cfc2b6edadd6e58d6a231cc2ca115d9adf6042c65834b0323917f31&ipo=images' alt='SEAAL_logo' />
                </div>
                <div>
                    <Link onMouseOver={() => { setHoverLogin(true) }} onMouseOut={() => { setHoverLogin(false) }} className='link-home' to='/login'><img width={"30px"} src={hoverLogin === false ? register : registerGif} className='icon-gif' /> Login</Link>
                </div>
            </div>
        </Container >
    )
}


const Container = styled.div`
 background: #2A3648 ;
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
        gap : 150px ;
    } ; 
    & .btn{
        text-decoration: none;
    }
 }
`

const Logo = styled.img`
transform : rotatez(60deg) infinite ;
animation: infinite;
`





export default Home