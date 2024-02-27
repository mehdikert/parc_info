import { useEffect, useState } from 'react'
import './login.scss'
import Form from 'react-bootstrap/Form';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';



function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3005/auth/login", {
                username: username,
                password: password
            })
            if (res.status = 200) {
                const token = res.data.token
                localStorage.setItem('token', token)
                toast.success("Login with success")
                navigate('/users');
                console.log(res);
            }

        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message)
        }
    }
    useEffect(() => {
        localStorage.removeItem('token')
        return () => { }
    }, [])

    return (
        <Container>
            <div>
                <Wrapper>
                    <Logo src='https://seaal.dz/fr/wp-content/uploads/sites/2/2023/02/LOGO-POUR-WEB-01.png' width={'50px'} />
                    <Title>Welcome , LogIn to Continue ...</Title>
                    <ContainerForm   >
                        <Form.Group className="mb-3">
                            <Form.Label>Username : </Form.Label>
                            <Form.Control placeholder="Username" type='text' value={username} onChange={(e) => {
                                e.preventDefault();
                                setUsername(e.currentTarget.value)
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password : </Form.Label>
                            <Form.Control placeholder='Password' type='password' value={password} onChange={(e) => {
                                e.preventDefault();
                                setPassword(e.currentTarget.value)
                            }} />

                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Show Password" />
                        </Form.Group>
                        <BtnDiv className='btn-div'>
                            <Button variant="outline-primary" type='submit' onClick={handleSubmit}>LOGIN</Button>
                            <Link to="/" className='home-link'>HOME</Link>
                        </BtnDiv>
                    </ContainerForm>
                </Wrapper>
            </div>

        </Container>
    )
}


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
`

const ContainerForm = styled.form``




export default Login