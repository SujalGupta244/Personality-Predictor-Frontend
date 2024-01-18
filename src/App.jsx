import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Public from './components/Public'
import QuesList from './components/QuesList'
import SignUp from './components/Signup'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        
        {/* Public Routes */}
        <Route index element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
        {/* Private Routes */}
        <Route path="home" element={<Public />} />
        <Route path='questions' element={<QuesList/>}></Route>

      </Route>
    </Routes>
  )
}

export default App
