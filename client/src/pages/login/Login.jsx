import { useState } from "react"
import "./Login.scss"
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await newRequest.post("/auth/login",{username,password});
            // console.log(res.data);
            localStorage.setItem("currentUser",JSON.stringify(res.data));
            navigate("/");
        }catch(err){
            setError(err.response.data);
        }
    }
  return (
    <div className="login">
        <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <label htmlFor="">Username</label>
            <input type="text" name="username" placeholder="john doe" onChange={(e)=>setUsername(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />

            <button type="submit">Login</button>
            {error && error}
        </form>
    </div>
  )
}

export default Login