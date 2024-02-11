import React from 'react';
import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Container = styled.div`
width: 400px ;
& .text-card > div{
    display : flex ;
gap : 50px ;
}
& .list-group-item {
    display : flex ; 
    flex-direction : column ;
    align-items: start;
}
`;


function UserCard() {

    return (
        <Container>
            <Card class>
                <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphotocatchthemoment.com%2Fwp-content%2Fuploads%2F2016%2F01%2Fbusiness_headshot_linkedIn_profile-picture_Dublin_Rafael-Photography.jpg&f=1&nofb=1&ipt=83662d89fd3af377052359bf8ebeb441f7c71f546f0b8e2d6124d7dc3a4fd404&ipo=images" />
                <Card.Body>
                    <Card.Title>Card User +(matriculeCoder)</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Nom : </ListGroup.Item>
                    <ListGroup.Item>Prenom : </ListGroup.Item>
                    <ListGroup.Item>Direction</ListGroup.Item>
                    <ListGroup.Item>Departement :</ListGroup.Item>
                    <ListGroup.Item>Service :</ListGroup.Item>
                    <ListGroup.Item>Site :</ListGroup.Item>
                    <ListGroup.Item>Structure :</ListGroup.Item>
                    <ListGroup.Item>Wilaya :</ListGroup.Item>
                    <ListGroup.Item>Bureau :</ListGroup.Item>
                </ListGroup>
                <Card.Body style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }} >
                    <Card.Link href="#">EDIT</Card.Link>
                    <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
            </Card>
        </Container >
    )
}

export default UserCard