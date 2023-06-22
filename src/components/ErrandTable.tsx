import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'deciption', headerName: 'Description', width: 130 },
  {
    field: 'action',
    headerName: 'action',
    type: 'number',
    width: 90
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.title || ''} ${params.row.deciption || ''}`
  }
];

const rows = [
  { id: 1, deciption: 'Snow', title: 'Jon', action: 35 },
  { id: 2, deciption: 'Lannister', title: 'Cersei', action: 42 },
  { id: 3, deciption: 'Lannister', title: 'Jaime', action: 45 },
  { id: 4, deciption: 'Stark', title: 'Arya', action: 16 },
  { id: 5, deciption: 'Targaryen', title: 'Daenerys', action: null },
  { id: 6, deciption: 'Melisandre', title: null, action: 150 },
  { id: 7, deciption: 'Clifford', title: 'Ferrara', action: 44 },
  { id: 8, deciption: 'Frances', title: 'Rossini', action: 36 },
  { id: 9, deciption: 'Roxie', title: 'Harvey', action: 65 }
];

export default function ErrandTable() {
  return (
    <div style={{ height: 400, width: '100%', backgroundColor: '#5C6103' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
