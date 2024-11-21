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

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },
  
]);

function App() {
  return (
    <RouterProvider router={Routes} />
  )
}

export default App
