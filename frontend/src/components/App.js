import React from 'react';
import { Route } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import UsersList from './UsersList';
import Login from './Login';

function App() {
  const [openDialog, setOpenDialog] = React.useState(false);

  function handleDialogOpen() {
    setOpenDialog(true);
  }

  function handleDialogClose() {
    setOpenDialog(false);
  }
  return (
    <>
        <NavBar handleDialogOpen={handleDialogOpen} />
        <Route path='/' exact component={Register} />
        <Route 
          path='/dashboard' 
          render={props =><Dashboard {...props} 
              openDialog={openDialog}  
              handleDialogClose={handleDialogClose} 
              handleDialogOpen={handleDialogOpen}
              />} 
        />
        <Route path='/users' component={UsersList} />
        <Route path='/login' component={Login} />
    </>
  )
}

export default App;
