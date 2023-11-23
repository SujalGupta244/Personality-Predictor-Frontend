import React from 'react'
import axios from 'axios'
const Login = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = (e) => {
    e.preventDefault()  
    const data = {
      username: username,
      password: password
    }
    axios.get('http://localhost:5000/login')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className='border p-2' type="text" />
            <button >Submit</button>
        </form>
    </div>
  )
}

export default Login