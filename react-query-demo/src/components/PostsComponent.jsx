import React from 'react'
import { useQuery } from 'react-query'

function PostsComponent() {
    let [isPending, error, data] =useQuery({
        queryKey:'users',
        queryFn:async()=>{
           let response = fetch("https://jsonplaceholder.typicode.com/users");
           return response.json()
        }
    })
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        
      </div>
    )
}

export default PostsComponent
