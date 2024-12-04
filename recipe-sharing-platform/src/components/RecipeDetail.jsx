import React,{useState,useEffect} from 'react'

function RecipeDetail() {
  let [data,setData]=useState();
  useEffect(()=>{
      setData(dataJson)
  },[])
  return (
    <div>
     {data.map(({details: {instructions,ingredients},image})=>(
        <div className="shadow-sm rounded-lg hover:shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           <img src={`${image}`}/>
           <h3>instructions: </h3>
          <ul>
            {instructions.map((instruction)=>(<li>
              {instruction}
            </li>))}
          </ul>
          <h3>ingredients: </h3>
          <ul>
            {ingredients.map((ingredient)=>(<li>
              {ingredient}
            </li>))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default RecipeDetail
