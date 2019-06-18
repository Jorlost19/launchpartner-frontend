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
            <image src='http://localhost:7000/image/5d031b15d22a5c7b97fb1525' alt='something' />
            <div style={styles}>
                <UserProfile handleDialogOpen={props.handleDialogOpen} />
            </div>           
        </>
    )
}

export default Dashboard;