import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styled from "styled-components"
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';

const Profile = styled.div`
width : 50px ; 
height : 50px ;
background : url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marismith.com%2Fwp-content%2Fuploads%2F2014%2F07%2Ffacebook-profile-blank-face.jpeg&f=1&nofb=1&ipt=8244e2c8b41f6e1191f86361bd22becc29bd8309a34e9ce5a2fec7152f7ed761&ipo=images) center no-repeat ; 
background-size: cover ;
border-radius: 100px ;
margin : 0px 10px ;
`
const ProfilePicture = styled.img``
const Connexion = styled.div`
display : flex ;
align-items: center ; 
gap : 5px ;
width: max-content;
`
const ConButton = styled.button`
width : 100px ;
`

function Navb(expand) {
    const navigate = useNavigate()
    return (
        <Navbar expand="lg" className="bg-body-dark" style={{ background: "#232B26", width: "100%" }}>
            <Container style={{ gap: '50px' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Link to={'/'}><HomeIcon color='#fff' /></Link>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={
                            <Badge badgeContent={4} color="primary"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <NotificationsIcon className='notif-icon' />
                            </Badge>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Profile>
                        <ProfilePicture src='' />
                    </Profile>
                    <Nav className="me-auto">
                        <NavDropdown title={
                            <ProfilePicture src='' />
                        } id="basic-nav-dropdown-two" >
                            <NavDropdown.Item >
                                <Link to={"/home"}>Show Profile</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                <Link to={"/home"}>Edit Profile</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/">
                                <Link to={"/home"}>Settings</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >
                                <Link to={"/login"} onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.removeItem('token');
                                    navigate('/login')
                                }}>LogOut</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar >
    )
}

export default Navb