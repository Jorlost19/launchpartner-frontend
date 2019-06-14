import React from 'react';
import EditProfileDialog from './EditProfileDialog';
import UserProfile from './UserProfile';

const styles = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Dashboard = props => 
{
    

    return (
        <>
            <EditProfileDialog open={props.openDialog} handleDialogClose={props.handleDialogClose} />
            <div style={styles}>
                <UserProfile handleDialogOpen={props.handleDialogOpen} />
            </div>           
        </>
    )
}

export default Dashboard;