import Nevbar from './Nevbar.jsx'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";

const Card = () => (
   <div className="card-main">
    <div className="myC">
    <div className="doc-img">  
        <img className="card" src="./doctor.jpg"alt="cover" /></div>
     <div className="doc-info">
        
         <div className="doc-name">Dr. Virendra Patel</div>
         <div className="doc-spc">Consultant Physician</div>
         <div className="locetc">
            <div className="doc-Location"><FaLocationDot />  Farm-house</div>
            <div className="doc-Location"><FaRegCalendarDays /> see Availability</div>
            </div>
            <button className='bttt'>Cunsult at Clinic</button>
     </div>
   </div>
    </div>
   
    
  );
  
  const Row = () => (
    <div className="row">
      <h2></h2>
      <div className="rowner">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
  
 
const ListofDocs = () => {
  return (
    <div className="ListOfDoc">
         <Nevbar/>
         <Row/>
         <Row/>
         <Row/>
         <Row/>
         <Row/>
    </div>
  )
}

export default ListofDocs