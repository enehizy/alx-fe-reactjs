import React from 'react'
import { Route } from 'react-router-dom'
function Profile() {
  return (
    <>
    <div>
      <h1>profile home</h1>
    </div>


    <Route path="/" element={<Root />}>
      <Route path="contact" element={<Contact />} />
      <Route
        path="dashboard"
        element={<Dashboard />}
        loader={({ request }) =>
          fetch("/api/dashboard.json", {
            signal: request.signal,
          })
        }
      />
      
    </Route>
    </>
  )
}

export default Profile
