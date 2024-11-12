import React from 'react'
import {useRecipeStore} from './recipeStore'
import {useNavigate} from 'react-router-dom'
function DeleteRecipeButton({id}) {
  const navigate =useNavigate();
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  return (
    <button onClick={()=> deleteRecipe(id)}>
        Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton
