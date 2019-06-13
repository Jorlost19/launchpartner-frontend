import React from 'react';
import NavBar from './NavBar';
import EditProfileDialog from './EditProfileDialog';

const Dashboard = () => 
{
    const [openDialog, setOpenDialog] = React.useState(false);

  function handleDialogOpen() {
    setOpenDialog(true);
  }

  function handleDialogClose() {
    setOpenDialog(false);
  }

    return (
        <>
            <EditProfileDialog open={openDialog} handleDialogClose={handleDialogClose} />
            <NavBar handleDialogOpen={handleDialogOpen} />
        </>
    )
}

export default Dashboard;