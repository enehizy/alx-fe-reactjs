import React from 'react'
import { Route,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import Profile from './Profile'
const Routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Profile />}>
    <Route path="details" element={<ProfileDetails />} />
    <Route
      path="settingd"
      element={<ProfileSettings/>}
      
    />
    
  </Route>
));
function Profile() {
  return (
    <>
    <div>
      <h1>profile home</h1>
    </div>


   
    </>
  )
}

export default Profile
