import React, { useState } from 'react'
import './login.scss'
import Form from 'react-bootstrap/Form';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import Navb from '../../Components/Navbar';
import SideBar from '../../Components/SideBar';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Container = styled.div` 
width: 100vw;
height: 100vh;
position: relative;
background : url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fcool_3d_water_drops_hd_cool_3d-2560x1440.jpg&f=1&nofb=1&ipt=d18a5271b3aa052b5a8f51349a00f1c208a66dda95676be0bae369f1921b7d88&ipo=images) no-repeat center ;
background-size: cover ;
& > div {
position: absolute;
top : 50% ;
left : 50% ; 
translate: -50% -50%;
background : white ;
} ;
`
const Wrapper = styled.div`
display : flex ;
flex-direction : column ;
width : max-content ;
gap : 50px ;
border : solid 2px #0000002c ;
padding: 50px 100px ;
box-shadow: 0px 20px 20px #00000038 ;
width: max-content;
`
const Title = styled.h1`
text-align: center;
`
const Logo = styled.img`
position : absolute ;
top : -5%;
left : 5% ;
`

const BtnDiv = styled.div`
display : flex ;
align-items: center;
gap : 30px ;
& > .home-link {
border : none ;
text-decoration: none;
font-size : 1.2rem ; 
padding : 3px 10px;
width: max-content ;
text-align: center;
border-radius : 5px;
display : flex ;
align-items: center ;
gap : 10px ;
position : relative ;
z-index: 0;
color : red;
overflow: hidden;
} ; 
&> .home-link::before{
    content : "" ; 
    position : absolute ; 
    width : 100% ; 
    height : 100% ; 
    background : red ;
    top : 0% ;
    left : -100% ;
    z-index: -1;border-radius : 5px;
    border : solid 1px red ;
    border-radius: 550px;
}
& > .home-link:hover{
    color : white ;
    transition : 1s ;
  &::before{
    top:0 ;
    left : 0px ;
    transition : .6s ;
    border-radius: 5px;
  }  
}
`

const ContainerForm = styled.form``
function Login() {
    const [values, setValues] = useState(
        {
            username: '',
            password: ''
        }
    )
    return (
        <Container>
            <div>
                <Wrapper>
                    <Logo src='https://seaal.dz/fr/wp-content/uploads/sites/2/2023/02/LOGO-POUR-WEB-01.png' width={'50px'} />
                    <Title>Welcome , LogIn to Continue ...</Title>
                    <ContainerForm method='GET' >
                        <Form.Group className="mb-3">
                            <Form.Label>Username : </Form.Label>
                            <Form.Control placeholder="Username" type='text' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password : </Form.Label>
                            <Form.Control placeholder='Password' type='password' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Show Password" />
                        </Form.Group>
                        <BtnDiv>
                            <Button variant="outline-primary">LOGIN</Button>
                            <Link to="/" className='home-link'><HomeIcon /> HOME</Link>
                        </BtnDiv>
                    </ContainerForm>
                </Wrapper>
            </div>
        </Container>
    )
}

export default Login