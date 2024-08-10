import { useState,useRef,useEffect } from "react"
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom';
import React from 'react';
import { FaGoogle,FaFacebook ,FaGithub,FaLinkedin  } from "react-icons/fa";



const Sineup = () => {
  const[emaill,setEmaill]=useState();
  const[passwordl,setPasswordl]=useState();
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', { name, email, password })
          .then(res => {
            navigate('/')
          })
          .catch(err => console.error(err))
      }
      axios.post('http://localhost:3000/Login', {  email, password })
      .then(res => {
        if(res.data.Status==="Success"){
if(res.data.role==="admin"){
  navigate('/admin')
}else{ 
    navigate('/')
   }

        }
      })
      
    


  const containerRef = useRef(null);
  const registerBtnRef = useRef(null);
  const loginBtnRef = useRef(null);

 
  useEffect(() => {
    containerRef.current = document.getElementById('container');
    registerBtnRef.current = document.getElementById('register');
    loginBtnRef.current = document.getElementById('login');

    if (containerRef.current && registerBtnRef.current && loginBtnRef.current) {
      registerBtnRef.current.addEventListener('click', () => {
        containerRef.current.classList.add("active");
      });

      loginBtnRef.current.addEventListener('click', () => {
        containerRef.current.classList.remove("active");
      });
    }
  }, []);
    return (
 <div className="ej">
    <div className="container" id="container"  ref={containerRef}>
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}  >
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" 
 className="icon">
             
              <FaGoogle />

            </a>
            <a href="#" className="icon">
            <FaFacebook />
              
            </a>
            <a href="#" className="icon">
        
              <FaGithub />

            </a>
            <a href="#" className="icon">
              
              <FaLinkedin />


            </a>
          </div>
          <span>or 
 use your email for registeration</span>
          <input type="text" onChange={(e)=>setName(e.target.value) }placeholder="Name" />
          <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
          <input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder="Password"   
 />
          <button  ref={registerBtnRef}type="submit" >Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons"> 

            <a href="#" className="icon">
              
              <FaGoogle />
            </a>
            <a href="#" className="icon">
             
              <FaFacebook />

            </a>
            <a href="#" className="icon">
             
              <FaGithub />
            </a>
            <a href="#" className="icon">
              
              <FaLinkedin />
            </a>
          </div>
          <span>or 
            
 use your email password</span>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}placeholder="Email" />
          <input type="password"   onChange={(e)=>setPassword(e.target.value)}placeholder="Password" />
          <a href="#">Forget Your Password?</a>   

          <button ref={loginBtnRef}>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel   
 toggle-left">
            <h1>Welcome Back!</h1>
            <p >Enter your personal details to use all of site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p className="inf">Register with your personal details    
 to use all of site features</p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div> 

    </div>
 </div>

  )
}

export default Sineup