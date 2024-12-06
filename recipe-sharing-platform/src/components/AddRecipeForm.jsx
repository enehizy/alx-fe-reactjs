import React from 'react'

const handleSubmit=(e)=>{
  e.preventDefault();
  // e.target.value
}
const validate=(formData)=>{

}
function AddRecipeForm() {
    const [errors,setErrors] =useState();
  return (
    <form onSubmit={(e)=> handleSubmit(e)}>
       <label for="title">Recipe Title</label>
      <input type="text" id="title" name="title" placeholder="Enter recipe title" required/>

    <label for="ingredients">Ingredients</label>
    <textarea id="ingredients" name="ingredients" rows="5" placeholder="List ingredients, one per line" required></textarea>

    <label for="steps">Preparation Steps</label>
    <textarea id="steps" name="steps" rows="5" placeholder="Describe the preparation steps, one per line" required></textarea>

    <button type="submit">Submit Recipe</button> 
    </form>
  )
}

export default AddRecipeForm
