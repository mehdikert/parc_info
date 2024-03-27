import { useEffect, useState } from 'react'
import styled from "styled-components"
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify"
import axios from "axios"


function Crude({ path, ope, title, pk }) {
    const [donne, setData] = useState([])
    const [columns, setColumns] = useState([])

    // generer les données
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/${path}`);
                setData(response.data);
                if (response.data.length > 0) {
                    Object.entries(donne).map(([key, value]) => {
                        setColumns({ ...columns, key })
                    }
                    )
                }
                console.log("donnée : ");
                console.log(response);
            } catch (error) {
                toast.error(error.message);
            }
            console.log(donne);
        };
        fetchData()
        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => { }
    }, []);



    return (
        <Container>
            <Title>{title}</Title>
            <Wrapper>
                {
                    Object.entries(donne).map(
                        ([key, value]) => {
                            return <TextField key={key} label={value} variant="outlined" />
                        })
                }
            </Wrapper>
        </Container>
    )
}


const Container = styled.div``
const Title = styled.h1``
const Wrapper = styled.div``



export default Crude