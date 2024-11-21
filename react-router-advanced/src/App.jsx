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
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
   
  },
  {
    path : '/blog',
    element : <Route path='/blog/:id' element={<BlogPost/>}/>
  }
  ,{
    path : '/profile',
    element : <ProtectedRoute/>
  }
]);

function App() {
  return (
    <RouterProvider router={Routes} />
  )
}

export default App
