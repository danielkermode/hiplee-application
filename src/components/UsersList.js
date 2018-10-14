import React from 'react';

const UsersList = props => {
  console.log(props.users)
  return (
    <div className='userlist'>
    {props.users.map(user => {
      return (
        <div className='userbox' key={user.id} onClick={() => {
          this.props.setActiveUser(user)
        }}>
          <div>{user.first_name} {user.last_name}</div>
          <div></div>
          <img src={user.avatar}/>
        </div>
      )
    })}
    </div>
  )
}

export default UsersList;
