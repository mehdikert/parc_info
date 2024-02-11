import React from 'react'
import './login.scss'
import Form from 'react-bootstrap/Form';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';


const Container = styled.div`
display : flex ;
flex-direction : column ;
width : max-content ;
gap : 50px ;
position :relative ;
border : solid 2px #0000002c ;
top : 25%;
left: 50% ;
padding: 50px 100px ;
translate: -50%;
box-shadow: 0px 20px 20px #00000038 ;
`
const Title = styled.h1`
text-align: center;
`
const Logo = styled.img`
position : absolute ;
top : -5%;
left : 5% ;
`

const ContainerForm = styled.div``
function Login() {
    return (
        <Container>
            <Logo src='https://seaal.dz/fr/wp-content/uploads/sites/2/2023/02/LOGO-POUR-WEB-01.png' width={'50px'} />
            <Title>Welcome , Login In to Continue ...</Title>
            <ContainerForm>
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
                <Button variant="outline-primary">LOGIN</Button>
            </ContainerForm>
        </Container>
    )
}

export default Login