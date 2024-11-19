import React from 'react'
import {QueryClient,QueryClientProvider} from 'react-query'

let queryClinet = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClinet}>
      <PostsComponent />
    </QueryClientProvider>
  )
}

export default App
