import React from 'react'
import './User.css'
import {useSelector,useDispatch} from 'react-redux'
import { deleteUser } from '../store/actions/user'

const User = () => {

  const users = useSelector((state)=>{
    return state.data.users
  })

  const dispatch = useDispatch()
  console.log(users,"users");
  return (
    <div className='result'>
      {
        users.map((user,index)=>{
          return(
            <div key={index} className="result__box">
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.contact}</p>
              <p>{user.address}</p>
              <button onClick={()=>dispatch(deleteUser(index))}>Delete</button>
                </div>
          )
        })
      }
    </div>
  )
}

export default User