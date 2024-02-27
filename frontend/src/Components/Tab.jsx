import React, { useEffect, useState } from 'react'
import { SearchInput, Table } from "evergreen-ui"
import CrudBtn from './CrudBtn'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import axios from "axios"
import { toast } from "react-toastify"
function Tab({ item, columns, type }) {
    const [selected, setSelected] = useState([])
    const [selectAll, setSelectAll] = useState(false)
    const navigate = useNavigate()

    // link to add user page
    function handleAdd() {
        navigate('/user/crud')
    }
    // link to update user
    function handleUpdate() {
        navigate('/user/crud')
    }

    async function handleDelete() {
        await axios.delete("http://localhost:3005/users/delete", {
            data: {
                indexes: selected
            }
        })
            .then(res => {
                toast.success(selected.length + (selected.length <= 1 ? " user" : " users") + " deleted")
                setSelected([])
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err);
            })
    }
    return (
        <Container>
            <SearchInput placeholder="Filter traits..." onChange={(e) => { setKey(e.currentTarget.value) }} />
            <Table>
                <Table.Head>
                    <Table.TextHeaderCell></Table.TextHeaderCell>
                    {
                        columns.map((column, index) => (
                            column !== "mat_util" ? <Table.TextHeaderCell key={index} >{column}</Table.TextHeaderCell>
                                : ""
                        ))
                    }

                </Table.Head>
                <Table.Body height={"70%"}>
                    {item.map((user) => (
                        <Table.Row key={user.mat_util} isSelectable onSelect={() => {
                            if (!selected.includes(user.mat_util) || selectAll) {
                                setSelected([...selected, user.mat_util])
                            } else {
                                // pour enlever l'element si il se trouve dans le tableau
                                setSelected(selected.filter(item => item !== user.mat_util));
                            }
                        }} >

                            <Table.TextCell>
                                <input type="checkbox" name="" id="" checked={selected.includes(user.mat_util) || selectAll ? true : false} readOnly />
                            </Table.TextCell>
                            {
                                columns.map((column, i) => (
                                    column !== "mat_util" ? <Table.TextCell key={i}>{user[column]}</Table.TextCell>
                                        : ""
                                ))
                            }
                        </Table.Row>
                    ))}
                </Table.Body>
                <label htmlFor="" style={{ margin: "25px" }}><input type="checkbox" name="" id="" onChange={() => setSelectAll(!selectAll)} /> Select all</label>
            </Table>
            <CrudBtn add={handleAdd} edit={handleUpdate} del={handleDelete} />
        </Container>
    )
}


const Container = styled.div`
display :flex ;
flex-direction: column;
padding: 50px 100px;
gap : 20px ;
`


export default Tab