
import Footer from '../Footer.jsx';
import Nevbar from './Nevbar.jsx'
import './UserPortal.css'
import { useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("./help");
  };
  const docClick=()=>{
    navigate("./Doctor")
  }
  return (
    
    <div className="main-home">
     <Nevbar/>
     <div className="main1o">
     <div className="main-1">
         <div className="handl">View The Doctor,Book An Appointment</div>
            <h3 className=''>
              Find the best doctor,client & hospitals in the city nearest to you
            </h3>
            <div className="box">
            <input className="in"type="location" name="location" placeholder="location" />
            <input  className="in"type="search" name="search" placeholder="serach" />
             
            </div>
            <button onClick={docClick} className="button2">Find Doctor</button>
        
        </div>
        <div ></div>
     </div>
     
        
        <div className="main-2">
        <center>
          <h2 className='h2hand'>Discover the Online Appointment!</h2>
          <h5>
            A step-by-step guide to build an on-demand appointment for patients
          </h5>
        </center>

        <div className="cards">
          <div className="card1">
            <div className="image">
              <img src="pexels-negativespace-48604.jpg" className="hu" />
            </div>
           <div className="heading">Find Doctor</div>
            <br></br>
           <div className="an"> we have 1000+ healthcare doctor with us and we reach maximum what
           we done</div>
          </div>
          <div className="card2">
            <div className="image">
              <img src="pexels-cottonbro-6153354.jpg" className="hu" />
            </div>
            <div className="heading">JARVIS</div>
            <br></br>
           <div className="an">This is the ai chat boat that can help you to resolve your
           problems and give best advise</div>
          </div>
          <div className="card3">
            <div className="image">
              <img src="pexels-shvets-production-7176026.jpg" className="hu" />
            </div>
           <div className="heading">Book Visit</div>
            <br></br>
           <div className="an">From this you can visit your near by doctor for a personal consult</div>
          </div>
        </div>
      </div>
      <div className="main-3">
        <div className="emgncy">
        <div className="Get">Get medical support 24*7 in On Click.</div>
          <p className="per">
            by click on this button it activate SOS system in emergency
            situation and get to call medical team.madical team will come as
            sone as possible and get help you as fast as they can.
          </p>
          <button  onClick={handleClick}className="but"><h3>HELP</h3>
          <p id="coordinates"></p>
          <p id="location"></p></button>
        </div>
      </div>
      <Footer/>
    </div>
 )
}

export default Home