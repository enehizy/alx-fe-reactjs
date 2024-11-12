import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import EditRecipeForm from './components/EditRecipeForm'

function App() {
 

  return (
    <>
    <RecipeList/>
     <AddRecipeForm/>
     <EditRecipeForm/>
    </>
  )
}

export default App
