import './App.css'
import Cart from './components/Cart'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import User from './components/User'
import List from './components/List'


function App() {

  return (
    <>
      <Navbar />
      <Login />
      <User />
      <Logout />
      <Cart />
      <List />
    </>
  )
}

export default App
