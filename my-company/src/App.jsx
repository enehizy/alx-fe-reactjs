import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import {
  RouterProvider,
} from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={routes} />
    </>
  )
}

export default App
