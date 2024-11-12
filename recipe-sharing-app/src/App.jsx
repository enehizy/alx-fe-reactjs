import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RecipeDetails from './components/RecipeDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeDetails/>
  },
 
]);
function App() {
 

  return (
    <RouterProvider router={router} >
          <RecipeList/>
        <AddRecipeForm/>
        <EditRecipeForm/>
        <FavoritesList/>
        <RecommendationsList/>
      
      </RouterProvider>
   
   
  )
}

export default App
