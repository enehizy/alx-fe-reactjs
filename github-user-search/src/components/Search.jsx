import React from 'react'
import { fetchUserData } from '../services/githubService';
import {useQuery} from '@tanstack/react-query'
import SearchInput from './SearchInput';
import Lottie from 'lottie-react';
import LoadingJson from '../github-loading.json';
import Error404 from '../404.json';
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
      <div className='md:flex  md:gap-10 items-center '>
        <SearchInput name="username" placeholder="search github usernames " labelText="Search by Username"/>
        <SearchInput name="location" placeholder="search repo in a location '" labelText="Search by Location"/>
        <SearchInput name="minimum_repos" placeholder="search by minimum rtepo '" labelText="Search by minimum repo"/>
      </div>
     <button className='bg-blue-800 text-white rounded-full py-2 px-8 mt-6' type='submit'>search</button>
    
    
   </form>

  {isLoading&&(<div className='flex justify-center items-center mt-10'>{/* Loading... */}<Lottie className='w-60 h-60 flex justify-center items-center' animationData={LoadingJson}/></div>)}
 
  {isError&&(<div className='flex justify-center items-center flex-col mt-10'>
    <Lottie   animationData={Error404}/>
  <p className='flex justify-center items-center text-red-600 mt-10 font-semibold'>Looks like we cant find the user</p>
  </div>)}
 
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
