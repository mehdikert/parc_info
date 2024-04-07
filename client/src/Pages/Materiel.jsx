import DataTable from '../Components/Table'
import React from 'react'
import Navbar from '../Components/Navbar'

function Materiel() {
    return (
        <div>
            <Navbar />
            <DataTable path='mat' idField='id_mat' />
        </div>
    )
}

export default Materiel