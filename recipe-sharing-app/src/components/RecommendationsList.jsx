import React from 'react'
import { useRecipeStore } from './recipeStore'

function RecommendationsList() {
    const recommededList= useRecipeStore(state => state.recommendations.map(id =>
        state.recipes.find(recipe => recipe.id === id)
      ));
  
    return (
        <div>
          <h2>My Recomended</h2>
          {recommededList.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
  )
}

export default RecommendationsList
