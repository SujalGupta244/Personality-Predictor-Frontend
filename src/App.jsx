import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Public from './components/Public'
import QuesList from './components/QuesList'


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        
        {/* Public Routes */}
        <Route index element={<Public />} />
        <Route path='login' element={<Login/>}/>
        {/* Private Routes */}
        <Route path='questions' element={<QuesList/>}></Route>

      </Route>
    </Routes>
  )
}

export default App
