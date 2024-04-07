import * as React from 'react';
import Button from '@mui/material/Button';
import styled from "styled-components"
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios"
import { toast } from 'react-toastify';
// login input import 

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

// password input inmport
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useNavigate } from "react-router-dom"
import api from '../api'

function Login() {

    const [password, setPassword] = React.useState('')
    const [username, setUsername] = React.useState('')
    const navigate = useNavigate('')
    // password //
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const handleLogin = async () => {
        try {
            const id = toast.loading('wait')
            await api.post('/auth/login', { 'username': username, 'password_util': password })
                .then(res => {
                    const { token, user } = res.data;
                    const filteredUser = {
                        ...user,
                        email: '********',
                        password: '********'
                    };

                    localStorage.setItem('token', token)
                    localStorage.setItem('userDetails', JSON.stringify(filteredUser));
                    toast.update(id, { render: "Welcome " + filteredUser.prenom_util + ' ' + filteredUser.nom_util, type: "success", isLoading: false, autoClose: 1500 })
                    navigate('/home')
                })

        } catch (error) {
            console.log(error);
            toast.update(err => toast.update(id, { render: "error", type: "error", autoClose: 1000, isLoading: false }))
        }
    };


    return (
        <Container>
            <Form>
                <Logo width={"200px"} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcryptorecharge.org%2Fwp-content%2Fuploads%2F2021%2F04%2FSEAAL-logo.png&f=1&nofb=1&ipt=09d73f1b47477d80c60067d5f2c5aac5311c87c77605e48af48a37461010b639&ipo=images' />
                <Box sx={{ '& > :not(style)': { m: 1 }, display: "flex", alignItems: 'center' }} >
                    {/* Username input */}
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="input-with-sx" label="Username" variant="standard" onChange={(e) => setUsername(e.currentTarget.value)} />
                    </Box>
                    {/* Password input */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Box>
                </Box>
                <Button variant="outlined" size="medium" sx={{ width: "100%" }} startIcon={<LoginIcon />}
                    onClick={handleLogin} >Login</Button>
            </Form>
        </Container >
    )
}

const Container = styled.div`
width: 100vw;
height : 100vh ;
background : #ffffff ;
`

const Form = styled.div`
width: max-content;
display : flex  ; 
flex-direction : column ;
align-items: center ;
gap : 50px ;
position : absolute ;
top : 50% ; 
left : 50% ;
translate : -50% -50% ;
position : relative ;
`

const Logo = styled.img``


export default Login