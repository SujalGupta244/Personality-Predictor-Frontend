import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import useLink from '../hooks/useLink'


const Navbar = () => {
  
  const {username, email} = useAuth()
  
  const {baseURL} = useLink()
  
  const navigate = useNavigate()
  
  const logout = async(e) =>{
    try{
      const res = await axios.get(`${baseURL}/logout`)
      const data = await res.data;
  
      navigate('/')
  
    }catch(e){
      console.log(e);
    }
  
  }
  return (
    <div className='w-full h-16 bg-[#ade8f4] flex items-center justify-between px-8 mb-4 sm:mb-auto'>
        <h4 className='px-6 py-2 text-3xl font-semibold rounded-xl'>Personality Test</h4>
        {email &&
          <button className='bg-[#0096c7] text-white px-5 py-1 rounded-lg text-lg' onClick={()=> {logout}}>Logout</button> 
        }
    </div>
  )
}

export default Navbar