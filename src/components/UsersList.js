import React from 'react';

const UsersList = props => {
  return (
    <div className='userlist'>
    {props.users.map(user => {
      return (
        <div className='userbox' key={user.id} onClick={() => {
          props.selectActiveUser(user)
        }}>
          <div>{user.first_name} {user.last_name}</div>
        </div>
      )
    })}
    </div>
  )
}

export default UsersList;
