import { DataGridPro, GridColumns, GridColumnMenu, GridToolbar, GridFilterPanel } from '@mui/x-data-grid-pro';
import { Icon } from '@mui/material';
import Avatar from "@mui/material/Avatar"

const columns: GridColumns = [
    { field: 'name', headerName: 'Name', width: 200, 
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <Avatar alt="User" />
            {params.row.name}
          </>
        );
      }
  },
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'chiefComplaint', headerName: 'Chief Complaint', width: 250 },
    { field: 'ageSex', headerName: 'Age/Sex', width: 150 },
    { field: 'contact', headerName: 'Contact', width: 200 },
    { field: 'lastConsultation', headerName: 'Last Consultation', width: 250 },
  ];

  const rows = [
    { id: 1, name: 'John Doe', chiefComplaint: 'Headache', ageSex: '25/M', contact: 'john@example.com', lastConsultation: '2022-02-01' },
    { id: 2, name: 'Jane Smith', chiefComplaint: 'Fever', ageSex: '35/F', contact: 'jane@example.com', lastConsultation: '2022-01-15' },
    { id: 3, name: 'Bob Johnson', chiefComplaint: 'Back Pain', ageSex: '40/M', contact: 'bob@example.com', lastConsultation: '2022-02-05' },
    { id: 4, name: 'John Doe', chiefComplaint: 'Headache', ageSex: '25/M', contact: 'john@example.com', lastConsultation: '2022-02-01' },
    { id: 5, name: 'Jane Smith', chiefComplaint: 'Fever', ageSex: '35/F', contact: 'jane@example.com', lastConsultation: '2022-01-15' },
    { id: 6, name: 'Bob Johnson', chiefComplaint: 'Back Pain', ageSex: '40/M', contact: 'bob@example.com', lastConsultation: '2022-02-05' },
    { id: 7, name: 'John Doe', chiefComplaint: 'Headache', ageSex: '25/M', contact: 'john@example.com', lastConsultation: '2022-02-01' },
    { id: 8, name: 'Jane Smith', chiefComplaint: 'Fever', ageSex: '35/F', contact: 'jane@example.com', lastConsultation: '2022-01-15' },
    { id: 9, name: 'Bob Johnson', chiefComplaint: 'Back Pain', ageSex: '40/M', contact: 'bob@example.com', lastConsultation: '2022-02-05' },
    { id: 10, name: 'John Doe', chiefComplaint: 'Headache', ageSex: '25/M', contact: 'john@example.com', lastConsultation: '2022-02-01' },
    { id: 11, name: 'Jane Smith', chiefComplaint: 'Fever', ageSex: '35/F', contact: 'jane@example.com', lastConsultation: '2022-01-15' },
    { id: 12, name: 'Bob Johnson', chiefComplaint: 'Back Pain', ageSex: '40/M', contact: 'bob@example.com', lastConsultation: '2022-02-05' },
    { id: 13, name: 'John Doe', chiefComplaint: 'Headache', ageSex: '25/M', contact: 'john@example.com', lastConsultation: '2022-02-01' },
    { id: 14, name: 'Jane Smith', chiefComplaint: 'Fever', ageSex: '35/F', contact: 'jane@example.com', lastConsultation: '2022-01-15' },
    { id: 15, name: 'Bob Johnson', chiefComplaint: 'Back Pain', ageSex: '40/M', contact: 'bob@example.com', lastConsultation: '2022-02-05' },
    // Add more rows here
  ];

  export default function DataGridProTable() {
      return (
        <DataGridPro
        columns={columns}
        rows={rows}
        // checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
          ColumnMenu: GridColumnMenu,
          FilterPanel: GridFilterPanel,
        }}
        componentsProps={{
          filterPanel: {
            headerHeight: 50,
            filterList: [{ columnField: 'chiefComplaint', operatorValue: 'contains', value: 'pain' }],
          },
        }}
        loading={rows.length === 0}
        disableColumnResize={false}
        disableColumnFilter={false}
        density="compact"
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        className="font-class-grey"
      />
      )
  }