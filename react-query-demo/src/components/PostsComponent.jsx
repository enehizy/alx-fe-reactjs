import React from 'react'
import { useQuery } from 'react-query'
  async function fetchPosts(){
    let response = fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json()
  }
function PostsComponent() {
    let [isPending, isError,error,isLoading, data] =useQuery({
        queryKey:'posts',
        queryFn:fetchPosts
    })
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
     
        
      </div>
    )
}

export default PostsComponent