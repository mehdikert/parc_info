import React from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container>
            <Link to="/materiel"><Button variant="text">Gestion Materiel</Button></Link>
            <Link to="/utilisateur"><Button variant="text">Gestion utilisateur</Button></Link>
            <Link to="/fournisseur"><Button variant="text">Gestion Fournisseur</Button></Link>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Gestion de bons
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    getContentAnchorEl={null}
                    PaperProps={{
                        style: {
                            width: '200px', // Définir la largeur du Menu
                        },
                    }}
                >
                    <Link to="/bon/bon-entree" style={{ color: "#1976D2", textDecoration: "none", fontWeight: "500" }}><MenuItem>Bon d'entrée</MenuItem></Link>
                    <Link to="/bon/bon-sortie" style={{ color: "#1976D2", textDecoration: "none", fontWeight: "500" }}><MenuItem>Bon de sortie</MenuItem></Link>
                    <Link to="/bon/bon-livraison" style={{ color: "#1976D2", textDecoration: "none", fontWeight: "500" }}><MenuItem>Bon livraison</MenuItem></Link>
                </Menu>
            </div>
        </Container>
    );
}

export default Navbar;

const Container = styled('div')`
    display: flex;
    align-items: center;
& Button {
    width : 200px
}
`;
