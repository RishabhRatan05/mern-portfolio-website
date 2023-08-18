import React, {useState} from 'react'
import Navbar from './Navbar'
import { NavLink , useNavigate} from 'react-router-dom'
import axios from 'axios'
import image from '../assets/react.svg'

const SignUp = () => {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    cpassword: "",
  })

  let name,value;

  const handleInput= (event)=>{
      name = event.target.name;
      value = event.target.value;

      setUser({...user,[name]:value})
  }

  const postData =  async (e)=>{

    try {
      
    const {name, email, phone ,profession, password, cpassword} = user;

  // const res= await  axios.post("/register",{name, email, phone , password, cpassword});
  const res = await axios({
  method: 'post',
  url: '/register',
  data: {name, email, phone ,profession, password, cpassword}
});
      
  console.log(res)

    if(res.status === 200){
       window.alert("Successful registration")
      console.log("Successful registration")
      
    }else{
      window.alert("invalid registration")
      console.log("invalid registration")
    }

    navigate("/login");
      
    } catch (error) {
      window.alert(`${error} hai`)
    }

  }
  return (
    <><Navbar/>
    <div className='container mt-5'>

      <div className="container text-center">
  <div className="row">
    <div method="POST" className="col">
      
            <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Your name</label>
          <input type="text" className="form-control" id="formGroupExampleInput"  onChange={handleInput} name='name' value={user.name}/>
        </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">Your email</label>
            <input type="text" className="form-control" id="formGroupExampleInput3" onChange={handleInput} name='email' value={user.email}  placeholder="Another input placeholder" />
          </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput4" className="form-label">Mobile No</label>
              <input type="number" className="form-control" id="formGroupExampleInput4" onChange={handleInput} name='phone' value={user.phone}  placeholder="Another input placeholder"/>
            </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput5" className="form-label">Profession</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" onChange={handleInput} name='profession' value={user.profession}  placeholder="Another input placeholder"/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput6" className="form-label">Password</label>
            <input type="text" className="form-control" id="formGroupExampleInput6" onChange={handleInput} name='password' value={user.password}  placeholder="Another input placeholder"/>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput7" className="form-label">Confirm Password</label>
            <input type="text" className="form-control" id="formGroupExampleInput7" onChange={handleInput} name='cpassword' value={user.cpassword}  placeholder="Another input placeholder"/>
          </div>
<div className='btn btn-primary'  onClick={postData}>
    <NavLink to="/register" style={{color: "white"}}>Register</NavLink>
</div>
    </div>
    <div className="col row">
      <img src={image} alt='picture' className='imm'/>
     <div className=''>
    <NavLink to="/signin" style={{color: "blue",  height:"20px"}}>Already registered ?</NavLink>
</div>

    </div>

  </div>
</div>



</div>
    </>
  )
}

export default SignUp