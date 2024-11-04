
import './App.css'
import Counter from './components/Counter'
import WelcomeMessage from './components/WelcomeMessage'
import UserContext from './UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
  
    <Counter/>
    <UserContext.Provider value={userData}>
       <ProfilePage />
    </UserContext.Provider>
    
    </>
   
     
  )
}

export default App
