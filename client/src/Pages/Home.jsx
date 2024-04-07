import React from 'react'
import { styled } from '@mui/system'
import Navbar from '../Components/Navbar'

function Home() {

    const details = JSON.parse(localStorage.getItem('userDetails'))
    return (
        <Container>
            <Navbar />
            <PageContainer>
                <Welcome>Welcome  {details.nom_util} {details.prenom_util}</Welcome>
            </PageContainer>
        </Container>
    )
}

export default Home


const Container = styled('div')`
width: 100vw;
height: 100vh;
`

const Welcome = styled('h1')`
width: max-content;
font-size : 5.5rem ; 
position: absolute;
top : 50%; 
left : 50% ;
translate: -50% -50%;
@media screen and (max-width: 768px) and (min-width : 556px) {
        font-size: 4rem; /* Redimensionner pour les écrans de taille moyenne */
    }

    @media screen and (max-width: 555px) {
        font-size: 1.75rem; /* Redimensionner pour les petits écrans */
    }
`

const PageContainer = styled('div')`
position: relative;
width: 100%;
height: 100%;
`