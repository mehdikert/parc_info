import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { HomeIcon, SettingsIcon, UserIcon } from 'evergreen-ui';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import DevicesSharpIcon from '@mui/icons-material/DevicesSharp';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import BartChartIcon from "@mui/icons-material/BarChart";
import GridViewIcon from "@mui/icons-material/GridView";


export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);
    const drawerLinkStyle = {
        color: '#000',
        textDecoration: 'none'
    }
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

            <Logo src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa%2FAATXAJxBXD9EEkotmfUbYuHvImguksXY-savL2PvsQ%3Ds900-c-k-c0xffffffff-no-rj-mo&f=1&nofb=1&ipt=45981a554cfc2b6edadd6e58d6a231cc2ca115d9adf6042c65834b0323917f31&ipo=images' alt='logo' />

            {/*Devider*/}<Divider /> {/*Devider*/}
            <List>
                <Link to="/users" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary={"Users"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/products" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><DevicesSharpIcon /></ListItemIcon>
                            <ListItemText primary={"Products"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/four" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><AccessibilityIcon /></ListItemIcon>
                            <ListItemText primary={"Fournisseurs"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/404" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary={"Requests"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>

            {/*Devider*/}<Divider />{/*Devider*/}
            <List>
                <Link to="/users" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><HomeIcon /> </ListItemIcon>
                            <ListItemText primary={"Home"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/products" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><DevicesSharpIcon /></ListItemIcon>
                            <ListItemText primary={"Products"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/four" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><AccessibilityIcon /></ListItemIcon>
                            <ListItemText primary={"Fournisseurs"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to="/settings" style={drawerLinkStyle}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon><SettingsIcon /> </ListItemIcon>
                            <ListItemText primary={"Settings"} ></ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>

        </Box >
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}><HomeIcon color='#fff' /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}


const Logo = styled.img`
width : 100% ; 
padding : 50px 
`