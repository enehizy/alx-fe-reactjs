import axios from 'axios';

export const fetchUserData =async(username)=>{
    try {
    const  result=await axios.get(`https://api.github.com/users/${username}`)
    const  data = result.data
     return data
    }catch(e){
      throw e
    }
}