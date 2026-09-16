
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return <footer className="scw-footer">
    <div className="scw-container footer-main">
      <div className="footer-brand-block">
        <Link to="/" className="scw-logo"><img src="https://www.speedcarwash.com/images/logo.png" alt="Speed Car Wash" /></Link>
        <p>Premium car washing, detailing and vehicle care with professional equipment and a customer-first approach.</p>
        <div className="footer-contact"><span>+91-12345678</span><a href="mailto:info@speedcarwash.com"><FiMail/> info@speedcarwash.com</a></div>
      </div>
      <div><h4>Explore</h4><Link to="/about">About Us</Link><Link to="/contact">Contact Us</Link></div>
      <div><h4>Services</h4><Link to="/services/washing">SCW Washing</Link><Link to="/services/detailing">SCW Detailing</Link><Link to="/services/wrapping">SCW Wrapping</Link><a href="https://www.speedcarwash.com/make-payment" target="_blank" rel="noreferrer">Make Payment</a></div>
    </div>
    <div className="scw-container footer-bottom">
      <div>© Copyright 2015-2023, Speed Car Wash. All Rights Reserved. | A brand of Neaten Cleaning Technology Private Limited</div>
      <div className="footer-social"><a href="https://www.facebook.com/speedcarwashindia" target="_blank" rel="noreferrer"><FiFacebook/></a><a href="https://www.instagram.com/speedcarwashindia/" target="_blank" rel="noreferrer"><FiInstagram/></a><a href="https://www.youtube.com/@speedcarwashindia" target="_blank" rel="noreferrer"><FiYoutube/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FiLinkedin/></a></div>
    </div>
  </footer>
}
