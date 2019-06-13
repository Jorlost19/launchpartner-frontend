import React from 'react';
import UserCard from './UserCard';

const styles = {
    width: '90%',
    margin: '60px auto',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const users = [
    {name: 'Jorge', description: 'some random text', avatar: 'somecool image'},
    {name: 'Jorge', description: 'some random text', avatar: 'somsfecool image'},
    {name: 'Jorge', description: 'some random text', avatar: 'somecdool image'},
    {name: 'Jorge', description: 'some random text', avatar: 'somec2ool image'},
    {name: 'Jorge', description: 'some random text', avatar: 'somecoole image'}
]

const UsersList = () => {
    return (
        <div style={styles}>
                {users.map(user => {
                    return <UserCard 
                        key={user.avatar} 
                        name={user.name} 
                        description={user.description}
                        avatar={user.avatar}
                    />
                })}
            </div>
    )
}

export default UsersList;