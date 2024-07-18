import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>
      user name given: {params.username}
    </div>
  )
}

export default User
