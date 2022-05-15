import React from 'react'

function Home() {
  return (
    <div>
      <h1 className='text-6xl'>Welcome</h1>
      {/* how to get access to environment variable */}
      {process.env.REACT_APP_GITHUB_TOKEN}
    </div>
  )
}

export default Home