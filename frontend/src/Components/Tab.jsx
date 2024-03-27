import React, { useEffect, useState } from 'react'
import { SearchInput, Table } from "evergreen-ui"
import CrudBtn from './CrudBtn'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import axios from "axios"
import { toast } from "react-toastify"
function Tab({ item, columns, path, pk }) {
    const [selected, setSelected] = useState([])
    const [selectAll, setSelectAll] = useState(false)
    const navigate = useNavigate()

    // link to add user page
    function handleAdd() {
        navigate(`${path}/crud`)
    }
    // link to update user
    function handleUpdate() {
        navigate(`${path}/crud`)
    }

    async function handleDelete() {
        await axios.delete(`http://localhost:3005${path}/delete`, {
            data: {
                indexes: selected
            }
        })
            .then(() => {
                toast.success(selected.length + ("Deleted with succes"))
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
                            <Table.TextHeaderCell key={index} >{column}</Table.TextHeaderCell>
                        ))
                    }

                </Table.Head>
                <Table.Body height={"55vh"}>
                    {item.map((obj, index) => (
                        <Table.Row key={obj[pk]} isSelectable onSelect={() => {

                            if (!selected.includes(obj[pk]) || selectAll == true) {
                                setSelected([...selected, obj[pk]])
                            } else if (selected.includes(obj[pk]) && selectAll == false) {
                                // pour enlever l'element si il se trouve dans le tableau
                                setSelected(selected.filter((item) => item == obj[pk]))
                            }

                            console.log(selected);
                        }} >

                            <Table.TextCell>
                                <input type="checkbox" name="" id="" checked={(selected.includes(obj[pk]) || selectAll) ? true : false} readOnly />
                            </Table.TextCell>
                            {
                                columns.map((column, i) => (
                                    <Table.TextCell key={i}>{obj[column]}</Table.TextCell>
                                ))
                            }
                        </Table.Row>
                    ))}
                </Table.Body>
                <label htmlFor="" style={{ margin: "25px" }}><input type="checkbox" name="" id="" onChange={
                    () => {
                        console.log(selected);
                        setSelectAll(!selectAll);
                        if (selectAll === false) {
                            setSelected([]);
                        } else if (selectAll === true) {
                            item.map((obj) => {
                                if (!selected.includes(obj[pk])) {
                                    setSelected([...selected, obj[pk]])
                                }
                            })
                        }
                    }

                } /> Select all</label>
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