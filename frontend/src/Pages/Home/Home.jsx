import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"


const Container = styled.div`
 & >div{
    position : absolute ; 
    top : 50% ;
    left : 50% ;
    translate : -50% -50% ;
    width: max-content;
    background: blue ;
    padding : 150px ;
    display: flex;
    flex-direction: column;
    align-items: center ;
    gap:50px ; 
    & > div{
        display : flex ;
        gap : 20px ;
    }
 }
`
const Button = styled.button`
width: 300px;
min-width: 100px;
font-size: 1.2rem;
padding : 5px 0px ;
cursor : pointer;
& > *{
    color : black ;
}
`
const Logo = styled.img``


function Home() {
    return (
        <Container>
            <div>
                <Logo src='https://seaal.dz/fr/wp-content/uploads/sites/2/2023/02/LOGO-POUR-WEB-01.png' alt='logo' width={'100px'} />
                <div>
                    <Link to='/login'><Button>Login</Button></Link>
                    <Link to='/register'><Button>Register</Button></Link>
                </div>
            </div>
        </Container >
    )
}

export default Home