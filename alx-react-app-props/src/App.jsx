
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile'
import UserContext from './UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };


  return (
   
    <UserContext.Provider value={userData}>
       <ProfilePage />
    </UserContext.Provider>
     
  )
}

export default App