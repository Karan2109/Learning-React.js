import UserContextProvider from './context/userContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-cyan-300 p-3 m-2 rounded-3xl'>Let's learn what is Context API?</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
