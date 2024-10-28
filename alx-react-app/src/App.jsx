
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
     <WelcomeMessage/>
    
     <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

    </>
   
     
  )
}

export default App
