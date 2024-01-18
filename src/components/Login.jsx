import React from 'react'
import axios from 'axios'
import useStore from '../hooks/useStore'
import useLink from "../hooks/useLink";


const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const {baseURL} = useLink()
  
  const store = useStore();
  const {addToken} = store;


  const handleSubmit = async(e) => {
    e.preventDefault()  
    const data = {
      email: email,
      password: password
    }
    const res = await axios.post(`${baseURL}/login/`,data,{
      headers: {
          'Content-Type': 'application/json',
      // You might need additional headers or authentication tokens here
      },
    })
    const resData = await res.data;
    console.log(resData)
    addToken(res)    
  }


  return (
    <div className='flex items-center justify-center h-[90vh]'>
      <div className="p-12 border-4 rounded-xl border-[#0096c7] min-w-[30%]">
        <form onSubmit={handleSubmit} className='flex flex-col text-center items-center'>
            <h2 className='text-4xl font-semibold mb-6 text-gray-500'>Login</h2>
            <input className='border-2 p-2 mb-4 w-4/5 rounded-lg' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input className='border-2 p-2 mb-4 w-4/5 rounded-lg' type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button className='bg-[#0096c7] cursor-pointer px-6 py-2 text-lg text-white rounded-xl'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login