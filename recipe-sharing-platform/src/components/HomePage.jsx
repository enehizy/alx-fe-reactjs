import React,{useState,useEffect} from 'react'
import dataJson from '../data.json'
import { Link } from 'react-router-dom';
function HomePage() {
    let [data,setData]=useState();
    useEffect(()=>{
        setData(dataJson)
    },[])
  return (
    <div>
     {data.map((recipe)=>(
        <div className="shadow-sm rounded-lg hover:shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           <img src={`${recipe.image}`}/>
           <h2 className='text-red-500'>{recipe.title}</h2>
           <Link to={`recipe/${recipe.id}`}/>
           <p>{recipe.summary}</p>
        </div>
      ))}
    </div>
  )
}

export default HomePage
