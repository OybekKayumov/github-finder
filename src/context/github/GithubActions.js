const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// get search result users (testing purposes) 2
  // const fetchUsers = async () => {
export const searchUsers = async (text) => {
        
  const params = new URLSearchParams({
    q: text
  })

  // const response = await fetch(`${GITHUB_URL}/users`, {
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })

  // const data = await response.json();
  const {items} = await response.json();
  // console.log('data: ', data);

  // from useState
  // setUsers(data);
  // setLoading(false);

  // dispatch({
  //   type: 'GET_USERS',
  //   // payload: data,
  //   payload: items,
  // })
  return items;
}
