import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,

} from 'cdbreact';
import { Link } from 'react-router-dom';
import styled from "styled-components"
import DevicesSharpIcon from '@mui/icons-material/DevicesSharp';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import BartChartIcon from "@mui/icons-material/BarChart";
import GridViewIcon from "@mui/icons-material/GridView";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';



const Container = styled.div`
height : 100vh;
& .item-content{
    display : flex ;
    align-items: center ; 
    gap : 10px ;
    width : 100% ;
    background : #00000079;
    padding : 10px ; 
    color : white ;
    font-size: 1.1rem;
    &:hover {
        background : #000 ;
        transition-duration: .3s;
    }
}
`
const LogoContainer = styled.div`
`
const Logo = styled.img`
width: 50px;
`

function SideBar({ position }) {

    return (
        <Container className='sidebar'>
            <CDBSidebar textColor="#000" backgroundColor="#333"
                style={{
                    background: "url(https://img.freepik.com/free-photo/vertical-shot-raindrops-pouring-down-glass-window_181624-3625.jpg?w=740&t=st=1707406714~exp=1707407314~hmac=f1650393d7dc62687eb5fa004191cb77fc87d35a97d15c3cc77f3b34f339910a) no-repeat center",
                    backgroundSize: 'cover'
                }}
            >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'fff' }}>
                        SEAAL
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <Link exact to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem ><GridViewIcon />Dashboard</CDBSidebarMenuItem>
                        </Link>
                        <Link exact to="/tables" activeClassName="activeClicked">
                            <CDBSidebarMenuItem><DevicesSharpIcon />Products</CDBSidebarMenuItem>
                        </Link>
                        <Link exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem ><AccessibilityIcon />Users</CDBSidebarMenuItem>
                        </Link>
                        <Link exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem ><BarChartIcon />Analytics</CDBSidebarMenuItem>
                        </Link>

                        <Link exact to="/hero404" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem><CalendarMonthOutlinedIcon />Calendar</CDBSidebarMenuItem>
                        </Link>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        <Logo src='https://seaal.dz/fr/wp-content/uploads/sites/2/2023/02/LOGO-POUR-WEB-01.png' style={{ margin: '50px auto' }} />
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </Container >
    )
}

export default SideBar;