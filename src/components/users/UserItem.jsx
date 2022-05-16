import React from 'react'
import PropTypes from 'prop-types'

function UserItem({user}) {
  return (
    <div>{user.login}</div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem