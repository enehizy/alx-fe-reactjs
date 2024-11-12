import React from 'react'
import {useRecipeStore} from './recipeStore'
function DeleteRecipeButton({id}) {
    const deleteRecipe = useRecipeStore(state=>state.deleteRecipe);
  return (
    <button onClick={()=> deleteRecipe(id)}>
        Delete Recipe
    </button>
  )
}

export default DeleteRecipeButton
