import React, { MouseEventHandler } from 'react';
import Box from '@mui/material/Box';
import Navbar from '../components/navbar/Navbar';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Card from "@mui/material/Card"
import VerticalNavbar from "../components/navbar/VerticalNavbar"
import CssBaseline from '@mui/material/CssBaseline';
import PatientsTable from "../components/muitable/MuiDataGridTable"
import { Typography } from '@mui/material';
function HomePage() {
  return (
    <Box sx={{backgroundColor: "#00000029"}}>
      <CssBaseline />
      <Navbar />
      <Box className="content">
      <Grid 
        container 
        spacing={2}
      >
            <Grid sx={{width: "20%"}} >
              <Card className="vertical-navbar-wrapper">
              <VerticalNavbar />
              </Card>
            </Grid>
            <Grid width="calc(100% - 20%)">
              <Card className="content-wrapper">
                <Typography className="heading-font-class-grey" >Patients</Typography>
                <PatientsTable />
              </Card>
            </Grid>          
          </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;