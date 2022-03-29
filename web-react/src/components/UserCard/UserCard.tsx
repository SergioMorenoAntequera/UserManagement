import React, { FC } from 'react'
import User from '../../models/User'

interface UserCard {user:User}
const UserCard:FC<UserCard> = (props) => {
  const user = props.user
  return (
    <div>
      {user.email}
    </div>
  )
}

export default UserCard
