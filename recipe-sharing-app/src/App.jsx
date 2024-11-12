import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import EditRecipeForm from './components/EditRecipeForm'
import FavoritesList from './components/FavouritesList'
import RecommendationsList from './components/RecommendationsList'

function App() {
 

  return (
    <>
    <RecipeList/>
     <AddRecipeForm/>
     <EditRecipeForm/>
     <FavoritesList/>
     <RecommendationsList/>
    </>
  )
}

export default App
