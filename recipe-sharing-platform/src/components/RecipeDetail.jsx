import React,{useState,useEffect} from 'react'
import dataJson from '../data.json';
import { useParams } from 'react-router-dom';
function RecipeDetail() {
  let [data,setData]=useState();
  let {id} =useParams();
  useEffect(()=>{
    let newData =dataJson.filter((recipe)=>{
      return recipe.id === id
    })
      setData(newData)
  },[])
  return (
    <div>
     {data.map(({image, details: { instructions, ingredients}})=>{
      <div className="shadow-sm rounded-lg hover:shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <img src={`${image}`}/>
      <h3 className='text-blue-600'>instructions: </h3>
     <ul>
       {instructions.map((instruction)=>(<li className='font-mono'>
         {instruction}
       </li>))}
     </ul>
     <h3 className='text-blue-600'>ingredients: </h3>
     <ul>
       {ingredients.map((ingredient)=>(<li className='font-mono'>
         {ingredient}
       </li>))}
     </ul>
     </div>
     })}
    </div>
  )
}

export default RecipeDetail
