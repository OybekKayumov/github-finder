import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Home from './Home'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-4xl font-bold mb-4'>Oops!</h1>
          <p className='text-3xl mb-6'>
            404 - Page Not Found!
          </p>

          <Link to="/" className='btn btn-primary btn-lg'>
            <FaHome className='mr-2' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound