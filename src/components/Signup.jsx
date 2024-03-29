import React ,{useState} from "react";
import axios from "axios";
import useStore from "../hooks/useStore";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useLink from "../hooks/useLink";
import useAuth from "../hooks/useAuth";


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {baseURL} = useLink()
  const store = useStore();
  const { addToken } = store;

  const navigate = useNavigate()
  const { username : user, email : userEmail } = useAuth();


  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
    };
    try{
      const res = await axios.post(`${baseURL}/signup/`,data,{
          headers: {
              'Content-Type': 'application/json',
          // You might need additional headers or authentication tokens here
          },
      });
  
      const resData = await res.data;
      navigate('/login')
      addToken(resData);
      console.log(resData);
    }catch(e){

      setError(e.response.data.message)
      // console.log(e.response.data.message);
    }

  };


  
  if (user && userEmail) {
    return (
      <Navigate to="/questions" />
    )
  }
  // console.log(error)
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="p-12 border-4 rounded-xl border-[#0096c7] min-w-[30%] text-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-center items-center"
        >
          <h2 className="text-4xl font-semibold mb-6 text-gray-500">SignUp</h2>
          <input
            className="border-2 p-2 mb-4 w-4/5 rounded-lg"
            type="text"
            placeholder="UserName"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border-2 p-2 mb-4 w-4/5 rounded-lg"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border-2 p-2 mb-4 w-4/5 rounded-lg"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#0096c7] cursor-pointer px-6 py-2 text-lg text-white rounded-xl">
            Submit
          </button>
        </form>
        <p>
          Already have Account ?{" "}
          <Link to="/login" className="text-[#0096c7]">
            Log In
          </Link>
        </p>
        {error.length > 0 && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
