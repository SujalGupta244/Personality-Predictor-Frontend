import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-[#ade8f4] flex items-center justify-between px-8 mb-4 sm:mb-auto'>
        <h4 className='px-6 py-2 text-3xl font-semibold rounded-xl'>Personality Test</h4>
        {/* <button className='bg-blue-500 px-6 py-2 text-lg text-white rounded-xl'>
            <Link to="/login">Login</Link>
        </button> */}
    </div>
  )
}

export default Navbar