
import './App.css'
import Home from './UserPortal/Home'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Sinup from './UserPortal/Sinup'


import ListofDocs from './UserPortal/ListofDocs'
import Admin from './Admin'
import UserProfile from './UserPortal/UserProfile'
import E from './TeamPortal/E'
import Help from './UserPortal/Help'
import Ecall from './TeamPortal/Ecall'
import Jarvis from './UserPortal/Jarvis'

function App() {

  return (
    <>
        <BrowserRouter>
       
    <Routes>
    
             <Route path="/" element={  <Home/>}> </Route>
             <Route path="/register" element={<Sinup/>}></Route>
             
             <Route path="/Doctor" element={  <ListofDocs/>}> </Route>
             <Route path="/AI" element={  <Jarvis/>}> </Route>
           
             <Route path="/admin" element={  <Admin/>}> </Route>
             <Route path="/profile" element={  <UserProfile/>}> </Route>
             <Route path="/E" element={  <E/>}> </Route>
             <Route path="/help" element={  <Help/>}> </Route>
             <Route path="/Ecall" element={  <Ecall/>}> </Route>
    </Routes>
     
      
      </BrowserRouter>
  
    </>
  )
}

export default App
