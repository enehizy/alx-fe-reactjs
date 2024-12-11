import React from 'react'
import { fetchUserData } from '../services/githubService';
import {useQuery} from '@tanstack/react-query'
function Search() {
    const handleSubmit=(e)=>{
      e.preventDefault();
    setUsername(e.target.username.value)
    }
    const [username,setUsername]=React.useState('');
   const {data ,isLoading,isError,isSuccess}= useQuery({
    queryKey:['user',username],
    queryFn :()=>{
      return fetchUserData(username)
    },
    enabled: username !== ''
   })
  return (
    <>
     <form  onSubmit={(e)=>{handleSubmit(e)}}>
     <input name="username" type="text" placeholder='search github usernames '/>
     <button type='submit'>search for usernmae</button>
   </form>

  {isLoading&&'Loading...'}
  {isError&&'Looks like we cant find the user'}
  {isSuccess&&(
    <div>
        <img src={data.avatar_url}/>
        <h2>{data.name}</h2>
        <a href={data.html_url}>link to github</a>
    </div>
  )}
  </>
  )
}

export default Search
