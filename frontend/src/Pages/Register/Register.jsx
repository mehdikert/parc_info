import { useState } from 'react'
import './register.scss'
import Form from 'react-bootstrap/Form';
import styled from "styled-components"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function Register() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [direction, setDirection] = useState('')
    const [department, setDepartment] = useState('')
    const [service, setService] = useState('')
    const [site, setSite] = useState('')
    const [structure, setStructure] = useState(1)
    const [wilaya, setWilaya] = useState(1)
    const [bureau, setBureau] = useState(1)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hi ');
        try {
            const res = await axios.post("http://localhost:3005/auth/register/", {
                nom: firstname,
                prenom: lastname,
                direction: direction,
                departement: department,
                service: service,
                site: site,
                structure: structure,
                wilaya: wilaya,
                bureau_util: bureau,
                username: username,
                email: email,
                password: password
            })
            if (res.status === 200) {
                alert('register with success')
                navigate('/login');
            } else {
                alert('eror')
            }

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Container>
            <div>
                <Wrapper>
                    <Logo src='https://seaal.dz/fr/wp-content/uploads/sites/2/2023/02/LOGO-POUR-WEB-01.png' width={'50px'} />
                    <Title>Welcome , Create an Account Now !</Title>
                    <ContainerForm onSubmit={handleSubmit}  >
                        <div className='input-container'>
                            <Form.Group className="mb-3">
                                <Form.Label>Fisrtname : </Form.Label>
                                <Form.Control placeholder="Firstname" type='text' value={firstname} onChange={(e) => {
                                    e.preventDefault();
                                    setFirstname(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Lastname : </Form.Label>
                                <Form.Control placeholder="Lastname" type='text' value={lastname} onChange={(e) => {
                                    e.preventDefault();
                                    setLastname(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Direction : </Form.Label>
                                <Form.Control placeholder="Direction" type='text' value={direction} onChange={(e) => {
                                    e.preventDefault();
                                    setDirection(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Departement : </Form.Label>
                                <Form.Control placeholder="Departement" type='text' value={department} onChange={(e) => {
                                    e.preventDefault();
                                    setDepartment(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Service : </Form.Label>
                                <Form.Control placeholder="Service" type='text' value={service} onChange={(e) => {
                                    e.preventDefault();
                                    setService(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Site : </Form.Label>
                                <Form.Control placeholder='Site' type='text' value={site} onChange={(e) => {
                                    e.preventDefault();
                                    setSite(e.currentTarget.value)
                                }} required />

                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Structure :</Form.Label>
                                <Form.Control placeholder='Structure' type='number' value={structure} onChange={(e) => {
                                    e.preventDefault();
                                    setStructure(e.currentTarget.value)
                                }} required />

                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Wilaya : </Form.Label>
                                <Form.Control placeholder='Wilaya' type='number' value={wilaya} onChange={(e) => {
                                    e.preventDefault();
                                    setWilaya(e.currentTarget.value)
                                }} max={"58"} min={"1"} required />

                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Bureau :</Form.Label>
                                <Form.Control placeholder='Bureau' type='number' value={bureau} onChange={(e) => {
                                    e.preventDefault();
                                    setBureau(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Username :</Form.Label>
                                <Form.Control placeholder='Username' type='text' value={username} onChange={(e) => {
                                    e.preventDefault();
                                    setUsername(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email :</Form.Label>
                                <Form.Control placeholder='Email' type='email' value={email} onChange={(e) => {
                                    e.preventDefault();
                                    setEmail(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password :</Form.Label>
                                <Form.Control placeholder='Password' type='password' value={password} onChange={(e) => {
                                    e.preventDefault();
                                    setPassword(e.currentTarget.value)
                                }} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Check type="checkbox" label="Accept Termes & Privacy ." required />
                            </Form.Group>
                        </div>
                        <BtnDiv className='btn-div'>
                            <Button variant="outline-primary" type='submit'>REGISTER</Button>
                            <Link to="/" className='home-link'>HOME</Link>
                        </BtnDiv>
                    </ContainerForm>
                </Wrapper >
            </div >
        </Container >
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



export default Register