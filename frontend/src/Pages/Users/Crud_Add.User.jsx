import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'
import Navbar from '../../Components/Navbar';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { AddIcon, Button, EditIcon, TrashIcon } from 'evergreen-ui'
import axios from "axios"
function Crud_User() {
    const [add, setAdd] = useState(true);
    const [update, setUpdate] = useState(false);
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
        try {
            const res = await axios.post("http://localhost:3005/users/post", {
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
                toast.success('User added')
                navigate('/users/');
            }

        } catch (error) {
            toast.error(error.response.data.error)
            console.log(error);
        }
    }


    return (
        <Container>
            <Navbar />
            <Form>
                <h1>{add && !update ? 'Add' : 'Update'} User</h1>
                <div className='input-container'>
                    <Form.Group className="mb-3">
                        <Form.Label>Fisrtname : </Form.Label>
                        <Form.Control placeholder="Firstname" type='text' value={firstname} onChange={(e) => {
                            e.preventDefault();
                            setFirstname(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Lastname : </Form.Label>
                        <Form.Control placeholder="Lastname" type='text' value={lastname} onChange={(e) => {
                            e.preventDefault();
                            setLastname(e.currentTarget.value)
                        }} required={add ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Direction : </Form.Label>
                        <Form.Control placeholder="Direction" type='text' value={direction} onChange={(e) => {
                            e.preventDefault();
                            setDirection(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Departement : </Form.Label>
                        <Form.Control placeholder="Departement" type='text' value={department} onChange={(e) => {
                            e.preventDefault();
                            setDepartment(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Service : </Form.Label>
                        <Form.Control placeholder="Service" type='text' value={service} onChange={(e) => {
                            e.preventDefault();
                            setService(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Site : </Form.Label>
                        <Form.Control placeholder='Site' type='text' value={site} onChange={(e) => {
                            e.preventDefault();
                            setSite(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Structure :</Form.Label>
                        <Form.Control placeholder='Structure' type='number' value={structure} onChange={(e) => {
                            e.preventDefault();
                            setStructure(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Wilaya : </Form.Label>
                        <Form.Control placeholder='Wilaya' type='number' value={wilaya} onChange={(e) => {
                            e.preventDefault();
                            setWilaya(e.currentTarget.value)
                        }} max={"58"} min={"1"} required={(add && !update) ? true : false} />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Bureau :</Form.Label>
                        <Form.Control placeholder='Bureau' type='number' value={bureau} onChange={(e) => {
                            e.preventDefault();
                            setBureau(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username :</Form.Label>
                        <Form.Control placeholder='Username' type='text' value={username} onChange={(e) => {
                            e.preventDefault();
                            setUsername(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email :</Form.Label>
                        <Form.Control placeholder='Email' type='email' value={email} onChange={(e) => {
                            e.preventDefault();
                            setEmail(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password :</Form.Label>
                        <Form.Control placeholder='Password' type='password' value={password} onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.currentTarget.value)
                        }} required={(add && !update) ? true : false} />
                    </Form.Group>
                </div>
                <Button onClick={handleSubmit} marginY={8} marginRight={12} intent="success" iconBefore={AddIcon}>ADD USER</Button>
            </Form>
        </Container>
    )
}



const Container = styled.div`
display : flex ; 
flex-direction: column;
width: 100%;
gap : 50px ;
& Form {
    width: 100%;
    display : flex;
    flex-direction : column ;
    align-items : center ;
    gap : 50px ;
    & h1 {
        text-transform: uppercase;
        font-weight: 700;
        font-size : 3.5rem ;
        letter-spacing: 1.5px;
        word-spacing: 5px;
    }
    & > div{
        display: grid ;
        grid-template-columns: repeat(2 , 1fr);
        column-gap: 50px ;
        row-gap : 10px ;
        align-items: center ;
    }
& .mb-3 {
    width : 500px ;
}
}
`


export default Crud_User