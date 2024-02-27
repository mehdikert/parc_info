import { AddIcon, Button, EditIcon, TrashIcon } from 'evergreen-ui'
import styled from "styled-components"
import React, { useState } from 'react'
import { Dialog, Pane } from "evergreen-ui"

function CrudBtn({ add, edit, del }) {

    const [isShown, setIsShown] = React.useState(false)

    return (
        <Container>
            <Button onClick={add} marginY={8} marginRight={12} intent="success" iconBefore={AddIcon}>Add</Button>
            <Button onClick={edit} marginY={8} marginRight={12} intent="default" iconBefore={EditIcon}>Edit</Button>
            <Pane>
                <Dialog
                    isShown={isShown}
                    title="Dialog title"
                    intent="danger"
                    onCloseComplete={() => setIsShown(false)}
                    confirmLabel="Delete"
                    onConfirm={() => {
                        del()
                        if (del) {
                            setIsShown(false)
                        }
                    }}
                >
                    Are you sure you want to delete selected items ?
                </Dialog>
                <Button onClick={() => setIsShown(true)} marginY={8} marginRight={12} intent="danger" iconBefore={TrashIcon}>Delete</Button>
            </Pane >
        </Container>
    )
}

const Container = styled.div`
display :flex ;
flex-wrap: wrap ;

`

export default CrudBtn