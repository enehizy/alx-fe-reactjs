import axios from 'axios';

export const fetchUserData =async(query)=>{
    try {
    const  result=await axios.get(`https://api.github.com/search/users?q=${query}`)
    const  data = result.data
     return data
    }catch(e){
      throw e
    }
}