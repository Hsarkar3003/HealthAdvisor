import { Link } from 'react-router-dom'

import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="container1">
        <div className="row">
          <div className="col">
            <h3>About Us</h3>
            <p>Book your appointment and help jarvis for your problem and call team by one click</p>
          </div>
          <div className="col">
            <h3>Quick Links</h3>
            <ul>
            <li><Link className="l " to="/">Home</Link></li>
           
            </ul>
          </div>
          <div className="col">
            <h3>Contact Us</h3>
            <p>Address-vadodra</p>
            <p>Phone number-9016538384</p>
            <p>Email-heathad@gmail.com</p>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2024 Your Medical Facility</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
