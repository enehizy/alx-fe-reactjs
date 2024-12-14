import axios from 'axios';

export const fetchUserData =async(query)=>{
    try {
      const env = await import.meta.env;
      // const minRepos =e.target.minimum_repos.value;
      // const location = e.target.location.value;
    const  result=await axios.get(`https://api.github.com/search/users?q=${query}`,{
      headers : {
        Authorization:`Bearer ${env.VITE_APP_GITHUB_API_KEY}`,
       
      }
    })
    
    const  data = result.data
     return data
    }catch(e){
      throw e
    }
}