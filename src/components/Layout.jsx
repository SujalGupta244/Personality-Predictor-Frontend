import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import useLink from '../hooks/useLink';
import useStore from '../hooks/useStore';
import axios from 'axios';


const Layout = () => {

  const {baseURL} = useLink()

  const {addToken} = useStore();

  const refreshUser = async () =>{
    try{
      const response = await axios.get(`${baseURL}/refresh/`, { withCredentials: true })
      const data = await response.data
  
      addToken(data.message)
      // console.log(data)

    }catch(e){
      console.log('Error on refresh',e)
    }
  }

  useEffect(()=>{
    refreshUser()
    // .then(data =>{
      // console.log(data)
      // addToken(data.message)
      // navigate('/questions')
    // })
  },[])

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Layout