import React, { useState } from 'react'

function RegistrationForm() {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
   let [password,setPassword] = useState("");
    let  [errors,setErrors]= useState([]);
   const submitForm = (e)=>{
     e.preventDefault();

     if (!username){
       setErrors([...errors,'username not provided'])
     }
     if (!password){
        setErrors([...errors,'password not provided'])
     }
     if (!email){
        setErrors([...errors,'email not provided'])
     }
   }
  return (
 <form onSubmit={submitForm}>
    <input name="username" autoComplete="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    <input name="email" autoComplete="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input name="password" type="password" autoComplete="new-password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
   <button>submit</button>
 </form>
  )
}

export default RegistrationForm
