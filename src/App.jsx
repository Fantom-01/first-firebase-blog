import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import CreatePost from './pages/createPost'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-config'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {
          !isAuth ? <Link to="/login">Login</Link>
          :
          <>
            <Link to="/createpost">Create Post</Link>
            <button onClick={signUserOut}>Sign Out</button>
          </>
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
    </Router>
  )
}

export default App
