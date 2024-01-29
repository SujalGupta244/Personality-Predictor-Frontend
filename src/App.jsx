import './App.css'
import { Routes, Route ,Navigate} from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/Layout'
import Public from './components/Public'
import QuesList from './components/QuesList'
import SignUp from './components/Signup'
import useLink from './hooks/useLink'
import axios from 'axios'
import NotFound from './components/NotFound'


const {baseURL} = useLink()

axios.defaults.baseURL = baseURL

// Sends the cookie back to backend server
axios.defaults.withCredentials = true


function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        
        {/* Public Routes */}
        <Route index element={<Navigate to="/home"></Navigate>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="home" element={<Public />} />
        {/* Private Routes */}
        <Route path='questions' element={<QuesList/>}></Route>

      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
