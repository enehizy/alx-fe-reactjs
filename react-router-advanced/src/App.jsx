import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Profile from './components/Profile'
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
    children:[
      {
      path: "details",
      element : <ProfileDetails/>
    },
    {
      path: "settings",
      element :<ProfileSettings/>
    },
  ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={Routes} />
  )
}

export default App
