import React from 'react'

function SearchInput({placeholder,name,labelText}) {
  return (
    <div className='flex flex-col gap-2'>
     <label className='text-sm  text-blue-800' htmlFor={name}>{labelText}</label>
     <input className='border-blue-400 border-2 bg-blue-50' id={name} name={name} type="text" placeholder={placeholder}/>
     </div>
   
  )
}

export default SearchInput
