import React from 'react'
import UserResults from '../users/UserResults'

function Home() {
  return (
    <>
      {/* search component will be here */}
      <UserResults />
    </>
  )
}

export default Home

{/* how to get access to environment variable */}
{/* {process.env.REACT_APP_GITHUB_TOKEN} */}

{/* <h1 className='text-6xl'>Welcome</h1>       */}