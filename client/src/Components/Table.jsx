import * as React from 'react';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import api from '../api';

export default function DataTable({ path, idField }) {
    const [data, setData] = React.useState([]);
    const [columns, setColumns] = React.useState([]);
    const [selectedRowss, setSelectedRowss] = React.useState([])
    const apiRef = React.useRef(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data (rows)
                const response = await api.get(`/${path}/`);
                const transformedData = response.data.map((row) => ({
                    ...row,
                    id: row[idField], // Renommer id_util en id
                }));
                setData(transformedData);

                // Fetch columns separately using a dedicated route
                const columnsResponse = await api.get(`/${path}/columns`);
                const columnNames = Object.keys(columnsResponse.data);

                // Generate column definitions based on column names
                const generatedColumns = columnNames.map((columnName) => ({
                    field: columnName,
                    headerName: columnName.charAt(0).toUpperCase() + columnName.slice(1), // Capitalize first letter
                    width: 150,
                }));

                // Set the columns state with the generated columns
                setColumns(generatedColumns);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Initial fetch

        const intervalId = setInterval(fetchData, 60000); // Refresh data every 15 seconds

        return () => {
            clearInterval(intervalId); // Cleanup interval on component unmount
        };
    }, [path, idField]); // Dependency array including path and idField



    const handleSaveSelectedRows = () => {
        const selectedRows = apiRef.current.getSelectedRows();
        console.log(selectedRows)

        // Perform actions with the selected rows (e.g., send them to the backend)
    };
    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
                apiRef={apiRef}
            />
        </div>
    );
}
