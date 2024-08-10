
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { Link } from 'react-router-dom'
const Admin = () => {

  const [auths,setAuths]=useState({});
    useEffect(()=> {
      axios.get('http://localhost:3000/admin')
      .then(auths => setAuths(auths.data))
      .catch(err=> console.log(err))
   
    })
  return (
    <div>
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
            <th>name</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {auths.length > 0 && (
            auths.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
