import React from 'react'
import { fetchUserData } from '../services/githubService';
import {useQuery} from '@tanstack/react-query'
import SearchInput from './SearchInput';
function Search() {
    const handleSubmit=(e)=>{
      e.preventDefault();
    //   e.target.value!== '' 
    const params = []
    const username = e.target.username.value;
    const minRepos =e.target.minimum_repos.value;
    const location = e.target.location.value;
    if(username){
      params.push(`${username} in:login`)
    }
    if(minRepos){
      params.push(`repos:>=${minRepos}`)
    }
    if(location){
      params.push(`location:"${location}"`)
    }
    const urlQuery = new URLSearchParams(params.join(" "))
   
    setQuery(urlQuery.toString())
    }
    const [query,setQuery]=React.useState('');
   const {data ,isLoading,isError,isSuccess}= useQuery({
    queryKey:['user',query],
    queryFn :async()=>{
    let data=await fetchUserData(query);
   if(data.items.length <= 0){
    throw 'user not found'
   }
   return data.items
    },
    enabled: query !== ''
   })
  return (
    <>
     <form className='md:flex  md:gap-5 justify-center '   onSubmit={(e)=>{handleSubmit(e)}}>
      <div className='md:flex  md:gap-5 items-center'>
        <SearchInput name="username" placeholder="search github usernames " labelText="Search by Username"/>
        <SearchInput name="location" placeholder="search repo in a location '" labelText="Search by Location"/>
        <SearchInput name="minimum_repos" placeholder="search by minimum rtepo '" labelText="Search by minimum repo"/>
      </div>
     <button className='bg-blue-800 text-white rounded-lg py-3 px-5 mt-5' type='submit'>search</button>
    
    
   </form>

  {isLoading&&(<p className='flex justify-center items-center text-blue-500'>Loading...</p>)}
  {isError&&(<p className='flex justify-center items-center text-red-600'>Looks like we cant find the user</p>)}
 
  {isSuccess&&(
    <div className='grid grid-cols-2 md:grid-cols-4 justify-center '>
          {data.map(({name,avatar_url,login,html_url})=>(
          <div className='flex flex-col flex-wrap justify-center items-center mt-20 gap-3'>
          <img src={avatar_url} className='w-[200px] h-[200px]'/>
          <div className='px-14 py-5 shadow-lg flex flex-col justify-center items-center gap-3'>
          <h2 className='font-mono text-lg'>{name}</h2>
          <a className='text-blue-400 underline' href={html_url}>link to github</a>
          <i className='italic text-sm'>@ {login}</i>
          </div>
          
      </div>
    ))}</div>
  )}
  </>
  )
}

export default Search
