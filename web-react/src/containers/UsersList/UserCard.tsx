
import React, { FC, useState } from 'react'
import Tooltip from '../../components/Tooltip'
import User from '../../models/User'
import { toHumanReadableDate } from '../../utils/date'
import "./UserCard.scss"

interface UserCard {user:User, index:number}
const UserCard:FC<UserCard> = (props) => {

  const [showingDetails, setShowingDetails] = useState(false)

  const user = props.user
  return (<div className='UserCard' onClick={(e)=>{e.stopPropagation(); setShowingDetails(!showingDetails)}}>
    <p className='firstName'> {user.first_name} </p>
    <p className='lastName'> {user.last_name} </p>

    {showingDetails && 
      <Tooltip safeArea={".UserCard"} showing={showingDetails} setShowing={setShowingDetails}>
        <p> {user.first_name} {user.last_name} </p>
        <p> {user.email} </p>
        <p> {toHumanReadableDate(user.createdAt.toString())} </p>
      </Tooltip>
    }
  </div>)
}

export default UserCard
