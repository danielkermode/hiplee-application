import React from 'react';

const ActiveUser = props => {
  const user = props.activeUser
  const text = props.activeUser.first_name ? 'Selected user is: ' : ''
  return (
    <div className='activeuser'>
      <div>
        <div>{text} {user.first_name} {user.last_name}</div>
        <img src={user.avatar}/>
      </div>
    </div>
  )
}

export default ActiveUser;
