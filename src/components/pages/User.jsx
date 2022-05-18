import React, { useContext } from 'react'
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import { useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner'

// function User({match}) {
function User() {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
    // getUserRepos(params.login)
  }, [])

  const {
    name, type, avatar_url, location, bio, twitter_username, login, html_url, followers, public_repos, public_gists, hireable
  } = user

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='w-full mx-auto lg:w-10/12'>
      <div className='mb-4'>
        <Link to='/' className='btn btn-ghost'>
          Back To Search
        </Link>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 mb:grid-cols-3 mb-8 md:gap-8'>
        <div className='custom-card-image mb-6 md:mb-0'>
          <div className='rounded-lg shadow-xl card image-full'>
            <figure>
              <img src={avatar_url} alt="login image" />
            </figure>

          </div>

        </div>

      </div>
      {user.login}
    </div>
  )
}

export default User

// useEffect(() => {

// }, [])

// make sure you add [] into useEffect, 
// if here not [] empty array, it will continuously run and it's going to crach you browser.
// [] empty array makes run only once
