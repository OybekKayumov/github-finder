import React from 'react'
import PropTypes from 'prop-types'

function RepoList({ repos }) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-200'> 
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>Top Repositories</h2>
        {repos.map((item) => )}
      </div>
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default RepoList