import React from 'react'
import DataTable from '../Components/Table'
import Navbar from '../Components/Navbar'

function Fournisseur() {
    return (
        <div>
            <Navbar />
            <DataTable path='four' idField='id_four' />
        </div>
    )
}

export default Fournisseur