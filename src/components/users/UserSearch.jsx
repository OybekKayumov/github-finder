import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext.js'



function UserSearch() {
  const [text, setText] = useState('')

  const { users, searchUsers, clearUsers } = useContext(GithubContext)
  const { setAlert} = useContext(AlertContext)

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    
    if (text === '') {
      // alert('Please enter username')
      setAlert('Please enter username', 'error')
    } else {
      // search for users
      searchUsers(text)

      setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input 
                type="text"
                className='w-full pr-40 bg-orange-200 input input-lg text-black'
                placeholder='Search User'
                value={text}
                onChange={handleChange}
              />
              <button 
                type="submit"
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>

          </div>
        </form>

      </div>

      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={clearUsers}>Clear</button>
        </div>
      )}
    </div>
  )
}

export default UserSearch