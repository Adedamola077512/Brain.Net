import './App.css'
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar'
import Home from './Pages/Home'
import Solution from './Pages/Solution'
import Customers from './Pages/Customers'
import Developers from './Pages/Developers'
import Blog from './Pages/Blog'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Footer from './Components/Footer'
function App() {

  return (
    <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
