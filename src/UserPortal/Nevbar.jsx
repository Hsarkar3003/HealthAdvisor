import axios from 'axios'
import './UserPortal.css'
import { Link } from 'react-router-dom'
import { useState ,useEffect} from "react"

const Nevbar = () => {
  const [user,setUser]=useState({name});
  useEffect(()=> {
    axios.get('http://localhost:3000/')
    .then(auths => setUser(auths.data))
    .catch(err=> console.log(err))
  })
  return (
    
    <div className="nev">
          <div className="log">
            Health Advisor
        
          </div>
        <ul>
            <li><Link className="Link-Sin" to="/">Home</Link></li>
            <li><Link className="Link-Sin" to="/Doctor">Doctor</Link></li>
            <li><Link className="Link-Sin" to="/AI">Jarvis</Link></li>
            <li>AboutUs</li>
            <li><Link className="Link-Sin" to="/register">Sign Up</Link></li>
            

        </ul>

     
        <div className="profile">
            <div className="cont">Hii {user.name}Hridoy</div>
            <div className="prof-log"></div>
        </div>
        </div>
  )
}

export default Nevbar