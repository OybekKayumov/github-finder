import React from 'react'
import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })

    const data = await response.json();
    // console.log('data: ', data);

    setUsers(data);
    setLoading(false);
  }
  // if not loading
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (          
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
  
}

export default UserResults

// add grid based on different screen size
/* <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'> */
// xl- extra large, lg-large, md-medium


// return <h3>Loading...</h3>

/* <h3>{user.login}</h3> */