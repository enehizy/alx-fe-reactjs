import React from 'react'
import { useQuery } from 'react-query'
  async function fetchPosts(){
    let response = fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json()
  }
function PostsComponent() {
    let {isError,error,isLoading, data,refetch} =useQuery({
        queryKey:'posts',
        queryFn:fetchPosts(),
        staleTime : 0,
        cacheTime:0,
        refetchOnWindowFocus:false,
        keepPreviousData:false
      
    })
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
     
        <button onClick={()=> refetch()}>refresg post</button>
      </div>
    )
}

export default PostsComponent
