import {create} from 'zustand';

export const useRecipeStore=create(set=>({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    deleteRecipe: (recipeId)=>()=>set((state)=>{
       const updatedRecipe = state.recipes.filter((recipe)=>{
          return recipe.id !== recipeId
       })
       set(updatedRecipe)
    }),
    updateRecipe:(recipeId,updatedRecipe)=>()=>set((state)=>{
        const updatedRecipe =state.recipes.map((recipe)=>{
              if( recipeId === recipe.id){
                let description = updatedRecipe.description === undefined?recipe.description:updatedRecipe.description;
                let title =updatedRecipe.title === undefined?recipe.title:updatedRecipe.title;
                return {...recipe,description,title}
              }
              return recipe
        })
     }),
    setRecipes: (recipes) => set({ recipes })
}))