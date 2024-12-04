import React,{useState,useEffect} from 'react'
import dataJson from '../src/data.json'
function HomePage() {
    let [data,setData]=useState();
    useEffect(()=>{
        setData(dataJson)
    },[])
  return (
    <div>
      <h1>{data.map((recipe)=>(
        <div>
           <img src={`${recipe.image}`}/>
           <h2>{recipe.title}</h2>
           <p>{recipe.summary}</p>
        </div>
      ))}</h1>
    </div>
  )
}

export default HomePage
