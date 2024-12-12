import React from 'react'

function SearchInput({placeholder,name,labelText}) {
  return (
    <div className='flex flex-col'>
     <label className='text-sm font-thin' htmlFor={name}>{labelText}</label>
     <input id={name} name={name} type="text" placeholder={placeholder}/>
     </div>
   
  )
}

export default SearchInput
