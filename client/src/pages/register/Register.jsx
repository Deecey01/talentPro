import { useState } from "react"
import "./Register.scss"
import upload from "../../utils/upload.js";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate=useNavigate();
    const [file,setFile]=useState(null);
    const [user,setUser]=useState({
        username:"",
        email:"",
        password:"",
        img:"",
        country:"",
        isSeller:false,
        desc:"",
    });
    
    // console.log(user);
    const handleChange=(e)=>{
        setUser((prev)=>{
            return {...prev,[e.target.name]:e.target.value};
        });
    }
    const handleSeller=(e)=>{
        setUser((prev)=>{
            return {...prev,isSeller:e.target.checked};
        });
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const url=await upload(file);
        try{
            await newRequest.post("/auth/register",{
                ...user,img:url
            })
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className="register">
        <form onSubmit={handleSubmit}>
            <div className="left">
                <h1>Create new account</h1>
                <label htmlFor="">Username</label>
                <input type="text" name="username" placeholder="john doe" onChange={handleChange} />
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder="john@gmail.com" onChange={handleChange}/>
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={handleChange}/>
                <label htmlFor="">Profile Picture</label>
                <input type="file"onChange={(e) => setFile(e.target.files[0])}/>
                <label htmlFor="">Country</label>
                <input type="text" name="country" placeholder="India" onChange={handleChange}/>
                <button type="submit">Register</button>
            </div>
            <div className="right">
                <h1 className="toggle">I want to become a seller</h1>
                <label htmlFor="">Activate Seller Account</label>
                <label className="switch">
                    <input type="checkbox" onChange={handleSeller}/>
                    <span className="slider round"></span>
                </label>
                <label htmlFor="">Phone Number</label>
                <input type="text" name="phone" placeholder="+91 1234567890" onChange={handleChange}/>
                <label htmlFor="">Description</label>
                <textarea onChange={handleChange} name="desc" id="" placeholder="A short description of yourself" cols="30" rows="10"></textarea>
            </div>
        </form>
    </div>
  )
}

export default Register