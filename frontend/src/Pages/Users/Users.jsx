import React, { useEffect, useState } from 'react';
import './users.scss';
import styled from "styled-components";
import Navb from '../../Components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import Tab from '../../Components/Tab';
import { useNavigate } from 'react-router-dom'
function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);
    const [columns, setColumns] = useState([])
    const [fetchData, setFetchData] = useState(false)


    // generer les données
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3005/users");
                setUsers(response.data);
                if (response.data.length > 0) {
                    setColumns(Object.keys(response.data[0]))
                }
            } catch (error) {
                toast.error(error.message);
            }
        };

        const interval = setInterval(fetchUsers, 1000);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);

        return () => { };
    }, []);

    // verification token
    useEffect(() => {
        if (localStorage.getItem('token') === "" || !localStorage.getItem('token')) {
            navigate('/');
            toast.error("Expired session");
        }
        return () => { };
    }, []);




    return (
        <Container>
            <Navb />
            <Wrapper>
                <Tab item={users} columns={columns} />
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
