import React from 'react'
import DataTable from '../Components/Table'
import Navbar from '../Components/Navbar'

function User() {
    return (
        <div>
            <Navbar />
            <DataTable path='util' idField='id_util' />
        </div>
    )
}

export default User