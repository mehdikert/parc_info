import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'
import Navbar from '../../Components/Navbar';

const Container = styled.div`
& Form {
    margin : 75px 25vw ;
    display : flex ; 
    flex-direction: column;
    gap :50px ;
    & > div {
        display : grid ;
        grid-template-columns: repeat(2,1fr);
        column-gap: 50px;
    }
}

`

function Crud_Product() {
    const [add, setAdd] = useState(true);
    const [update, setUpdate] = useState(false);

    return (
        <Container>
            <Navbar />
            <Form>
                <h1>{add && !update ? 'Add' : 'Update'} Product</h1>
                <div>
                    <Form.Group className="mb-3" >
                        <Form.Label>Code immo</Form.Label>
                        <Form.Control type="number" control placeholder="Code_immo ( Automatique )" disabled />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Numero de serie</Form.Label>
                        <Form.Control type="number" max={99999999999999} min={1} placeholder="numero de serie" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Code SEAAL</Form.Label>
                        <Form.Control type="number" maxLength={30} placeholder="code SEAAL" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Code Barre</Form.Label>
                        <Form.Control type="number" maxLength={10} placeholder="code barre" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Date d'Inventaire</Form.Label>
                        <Form.Control type="date" placeholder="date d'inventaire" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Année d'Aquisition</Form.Label>
                        <Form.Control type="date" placeholder="année d'aquisition" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Affecte</Form.Label>
                        <Form.Control type="text" placeholder="Affecte" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Etat</Form.Label>
                        <Form.Control type="text" placeholder="Etat" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Code reforme</Form.Label>
                        <Form.Control type="text" placeholder="code reforme" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Code Type</Form.Label>
                        <Form.Control type="text" placeholder="code type" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Marque</Form.Label>
                        <Form.Select aria-label="Floating label select example">
                            <option disabled>Open this select menu</option>
                            <option value="1">Hp</option>
                            <option value="2">Dell</option>
                            <option value="3">Asus</option>
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

export default Crud_Product