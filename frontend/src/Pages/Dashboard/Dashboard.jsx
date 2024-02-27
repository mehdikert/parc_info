import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Navb from '../../Components/Navbar'
import SideBar from '../../Components/SideBar'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
function Dashboard() {
    const navigate = useNavigate()
    React.useEffect(() => {
        if (localStorage.getItem('token') === "" || !localStorage.getItem('token')) {
            navigate('/')
            toast.error("Expired session")
        }
        return () => { }
    }, [])

    return (
        <Container>
            <Navb />
            <div>
                <SideBar />
                <Wrapper>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, aut consequuntur perferendis a, hic maxime velit distinctio dolorem perspiciatis ea aliquam facilis quae voluptates porro! Nam pariatur molestiae quaerat quod.</p>
                </Wrapper>
            </div>
        </Container>
    )
}

const Container = styled.div`
display : flex ;
flex-direction: column;
& >  div{
display : flex ;
overflow: hidden;
}
`
const Wrapper = styled.div`
overflow: hidden;

`

export default Dashboard