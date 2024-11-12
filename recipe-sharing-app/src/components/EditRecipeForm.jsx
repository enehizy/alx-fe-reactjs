import React from 'react'
import {useRecipeStore} from './recipeStore';
function EditRecipeForm() {
    const recipes = useRecipeStore(state => state.recipes);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    let selectRef =useRef();
    let option =selectRef.current.value;

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({option})
    //    updateRecipe()
    //   setTitle('');
    //   setDescription('');
    };

    return (
        <>
        <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <select ref={selectRef}>
           {recipes.map(recipe=>(
            <option value={recipe.id}>{recipe.title}</option>
           ))}
        </select>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
      </>
    );
}

export default EditRecipeForm
