import { useState, useEffect } from "react";
import axios from "axios";
import './team.css';
import { Link } from 'react-router-dom'

const Ecall = () => {
    const [locations,setLocations]=useState({});
    useEffect(()=> {
      axios.get('http://localhost:3000/Ecall')
      .then(locations => setLocations(locations.data))
      .catch(err=> console.log(err))
     
   
    })
    
  return (
    <div className="main">
         <div className="nev">
    <div className="log">
      Health Advisor
  
    </div>
  <ul>
      <li><Link className="Link-Sin" to="/admin">UserDetails</Link></li>
      <li><Link className="Link-Sin" to="/Ecall">E-Call</Link></li>
    
      

  </ul>
  </div>
  <table className="my-table">
        <thead>
          <tr>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {locations.length > 0 && (
            locations.map((user) => (
              <tr key={user.id}>
                <td>{user.latitude}</td>
                <td>{user.longitude}</td>
                <td>{user.timestamp}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
   
  )
}

export default Ecall