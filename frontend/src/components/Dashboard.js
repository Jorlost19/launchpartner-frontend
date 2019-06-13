import React from 'react';
import EditProfileDialog from './EditProfileDialog';
import UserCard from './UserCard';

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
                <UserCard dashboard handleDialogOpen={props.handleDialogOpen} />
            </div>           
        </>
    )
}

export default Dashboard;