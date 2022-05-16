import React from 'react'
import UserResults from '../users/UserResults'
import UserSearch from '../users/UserSearch'

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home

{/* how to get access to environment variable */}
{/* {process.env.REACT_APP_GITHUB_TOKEN} */}

{/* <h1 className='text-6xl'>Welcome</h1>       */}