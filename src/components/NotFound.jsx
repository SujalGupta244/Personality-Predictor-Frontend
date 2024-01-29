import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
        <h1 className='text-9xl'>404</h1>
        <h2 className='text-4xl'>Not Found</h2>
        <p className='text-1xl text-blue-400 mt-6'><Link to="/home">back to home</Link></p>
    </div>
  )
}

export default NotFound