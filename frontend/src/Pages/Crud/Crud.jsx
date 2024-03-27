import { useEffect, useState } from 'react'
import styled from "styled-components"
import Navbar from '../../Components/Navbar';
import Crude from "../../Components/Crude"


function Crud(path) {



    return (
        <Container>
            <Navbar />
            <Crude path="users" />
        </Container>
    )
}



const Container = styled.div``

export default Crud