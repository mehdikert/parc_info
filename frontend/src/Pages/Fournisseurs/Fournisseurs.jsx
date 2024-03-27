import React, { useEffect, useState } from 'react';
import './fournisseur.scss';
import styled from "styled-components";
import Navb from '../../Components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import Tab from '../../Components/Tab';
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar';
function Fournisseurs() {
    const navigate = useNavigate()
    const [materiels, setMateriels] = useState([]);
    const [columns, setColumns] = useState([])
    const path = '/fournisseurs'


    // generer les données
    useEffect(() => {
        const fetchMateriels = async () => {
            try {
                const response = await axios.get(`http://localhost:3005${path}`);
                setMateriels(response.data);
                if (response.data.length > 0) {
                    setColumns(Object.keys(response.data[0]))
                }
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchMateriels()
        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => { }
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
                <Tab item={materiels} columns={columns} path={path} pk={"id_four"} />
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
export default Fournisseurs;
