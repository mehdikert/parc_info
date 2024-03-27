import React, { useEffect, useState } from 'react';
import './users.scss';
import styled from "styled-components";
import axios from 'axios';
import { toast } from 'react-toastify';
import Tab from '../../Components/Tab';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);
    const [columns, setColumns] = useState([])
    const path = '/users'

    // generer les données
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`http://localhost:3005${path}`);
                setUsers(response.data);
                if (response.data.length > 0) {
                    setColumns(Object.keys(response.data[0]))
                }
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchUsers()
        return () => { };
    }, []);

    // verification token
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            return navigate('/')
        }

    }, []);




    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Tab item={users} columns={columns} path={path} pk={"mat_util"} />
            </Wrapper>
        </Container >
    );
}

const Container = styled.div`
width : 100vw ;
height : 100vh ; 
display : flex ;
flex-direction: column;
overflow-y: scroll;
overflow-x: hidden;
`;
const Wrapper = styled.div`
`
export default Users;
