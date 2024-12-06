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
    <form onSubmit={(e)=> handleSubmit(e)} className='shadow-sm md:shadow-lg'>
       <label for="title" className='text-lg'>Recipe Title</label>
      <input type="text" id="title" name="title" placeholder="Enter recipe title" required/>

    <label for="ingredients" className='text-lg'>Ingredients</label>
    <textarea id="ingredients" name="ingredients" rows="5" placeholder="List ingredients, one per line" required></textarea>

    <label for="steps" className='text-lg'>Preparation Steps</label>
    <textarea id="steps" name="steps" rows="5" placeholder="Describe the preparation steps, one per line" required></textarea>

    <button type="submit" className='rounded-lg'>Submit Recipe</button> 
    </form>
  )
}

export default AddRecipeForm
