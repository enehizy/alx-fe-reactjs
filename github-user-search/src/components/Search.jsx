import React from 'react'
import { fetchUserData } from '../services/githubService';
import {useQuery} from '@tanstack/react-query'
import SearchInput from './SearchInput';
function Search() {
    const handleSubmit=(e)=>{
      e.preventDefault();
    //   e.target.value!== '' 
  
    const urlQuery = new URLSearchParams({
      username: e.target.username.value ,
      location : e.target.location.value ,
      mimumum_repositories:e.target.minimum_repos.value
    })
    // console.log(urlQuery.toString())
    setQuery(urlQuery.toString())
    }
    const [query,setQuery]=React.useState('');
   const {data ,isLoading,isError,isSuccess}= useQuery({
    queryKey:['user',query],
    queryFn :()=>{
      return fetchUserData(query)
    },
    enabled: query !== ''
   })
  return (
    <>
     <form className='flex  gap-5 justify-center '   onSubmit={(e)=>{handleSubmit(e)}}>
      <div className='flex  gap-5 items-center'>
        <SearchInput name="username" placeholder="search github usernames " labelText="Search by Username"/>
        <SearchInput name="location" placeholder="search repo in a location '" labelText="Search by Location"/>
        <SearchInput name="minimum_repos" placeholder="search by minimum rtepo '" labelText="Search by minimum repo"/>
      </div>
     <button className='bg-blue-800 text-white rounded-lg py-3 px-5 mt-5' type='submit'>search</button>
    
    
   </form>

  {isLoading&&'Loading...'}
  {isError&&'Looks like we cant find the user'}
  {isSuccess&&(
    <div className='flex flex-col justify-center items-center mt-20 gap-3'>
        <img src={data.avatar_url} className='w-[200px] h-[200px]'/>
        <h2 className='font-mono text-lg'>{data.name}</h2>
        <a className='text-blue-400 underline' href={data.html_url}>link to github</a>
        <i className='italic text-sm'>@{data.login}</i>
    </div>
  )}
  </>
  )
}

export default Search
