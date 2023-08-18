import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import image from '../assets/react.svg'

const Login = () => {
  const [email, setEmail]=useState('');
  const [password,setPassword]= useState('');
  const navigate = useNavigate();
  const loginUser= async ()=>{
      const res= await fetch('/signin',{
        method:"POST",
        headers:{
          "Conten-Type":"application/json"
        },
        body:JSON.stringify({
          email,password
        })
      })
      const data = res.json();

      if(res.status===200){
        window.alert("Login successfull")
      }else if(res.status===400 || !data){
        window.alert("Login failed")
      }else{
        window.alert("HEEY")
      }

      navigate("/")
  }
  return (
      <>
        <div className="container text-center mt-5">
  <div className="row">
    <div className="col">
      <img src={image} alt='image' style={{width:"20vw"}}/>
      <li className="nav-item mt-4">
          <Link className="link" to="/register">Create an account</Link>
        </li>
    </div>
    <div className="col">
      <h1>Login</h1>
      <form method='POST'>
      <div className="mb-3">
  <label htmlFor="formGroupExampleInput10" className="form-label">Email</label>
  <input type="text" className="form-control" id="formGroupExampleInput10" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Example input "/>
</div>
<div className="mb-3">
  <label htmlFor="formGroupExampleInput11" className="form-label">Password</label>
  <input type="text" className="form-control" id="formGroupExampleInput11" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password input "/>
</div>
<li className="nav-item btn btn-primary">
          <Link className="nav-link" to="/about" onClick={loginUser}>Login</Link>
  </li>
        </form>

    </div>
  </div>
</div>
      </>
  )
}

export default Login