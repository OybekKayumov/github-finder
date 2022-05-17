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

  return (
    <div>{user.login}</div>
  )
}

export default User

// useEffect(() => {

// }, [])

// make sure you add [] into useEffect, 
// if here not [] empty array, it will continuously run and it's going to crach you browser.
// [] empty array makes run only once
