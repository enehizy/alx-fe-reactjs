import {create} from 'zustand';

export const useRecipeStore=create(set=>({
    recipes: [],
    favorites: [],
    recommendations: [],
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
    setRecipes: (recipes) => set({ recipes }),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
      })),
      generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
      }),
}))