import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'
import Navbar from '../../Components/Navbar';

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

function Crud_materiel() {
    const [add, setAdd] = useState(true);
    const [update, setUpdate] = useState(false);
    return (
        <Container>
            <Navbar />
            <Form>
                <h1>{add && !update ? 'Add' : 'Update'} User</h1>
                <div>
                    <Form.Group className="mb-3" >
                        <Form.Label>Matricule utilisateur</Form.Label>
                        <Form.Control type="number" control placeholder="Code_immo ( Automatique )" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Direction</Form.Label>
                        <Form.Control type="number" placeholder="numero de serie" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="number" maxLength={30} placeholder="nom" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Prenom</Form.Label>
                        <Form.Control type="number" maxLength={10} placeholder="prenom" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Departement</Form.Label>
                        <Form.Control type="text" placeholder="departement" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>service</Form.Label>
                        <Form.Control type="text" placeholder="année d'aquisition" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Site</Form.Label>
                        <Form.Control type="text" placeholder="Affecte" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Structure</Form.Label>
                        <Form.Control type="text" placeholder="Etat" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Wilaya</Form.Label>
                        <Form.Control type="text" placeholder="code reforme" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Bureau utilisateur</Form.Label>
                        <Form.Control type="text" placeholder="code type" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select aria-label="Floating label select example">
                            <option disabled selected>--</option>
                            <option value="1">Utilisateur</option>
                            <option value="1">Admin</option>
                            <option value="2">Super Admin</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="outline-secondary" type="button">
                        Upload Image
                    </Button>
                </div>
                <Button variant="primary" type="submit" style={{ width: '200px' }}>
                    {add && !update ? 'Add' : 'Update'}
                </Button>
            </Form>
        </Container>
    )
}

export default Crud_materiel