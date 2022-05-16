import { createContext, useState, useReducer } from "react";
import GithubReducer from "./GithubReducer";


const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
  // use with useState
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  // use with useReducer
  const initialState = {
    users: [],
    loading: true,
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)


  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })

    const data = await response.json();
    // console.log('data: ', data);

    // from useState
    // setUsers(data);
    // setLoading(false);

    dispatch({
      type: 'GET_USERS'
    })
  }

  return (
    <GithubContext.Provider 
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}   
    </GithubContext.Provider>
  )
}

export default GithubContext;
