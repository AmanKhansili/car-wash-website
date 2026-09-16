
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiMail, FiShoppingBag } from "react-icons/fi";

const serviceLinks = [
  ["/services/washing", "SCW Washing"],
  ["/services/detailing", "SCW Detailing"],
  ["/services/wrapping", "SCW Wrapping"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => { setOpen(false); setServicesOpen(false); };

  return (
    <header className={`scw-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="utility-bar">
        <div className="scw-container utility-inner">
          <div className="utility-left"><span>Premium car care • Since 2015</span></div>
          <div className="utility-right">
            <Link to="/contact">› Book a Wash</Link><Link to="/contact">› Book a Detailing</Link>
            <span>+91-12345678</span><a href="mailto:info@speedcarwash.com"><FiMail /> info@speedcarwash.com</a>
          </div>
        </div>
      </div>

      <div className="nav-main scw-container">
        <Link to="/" className="scw-logo" onClick={close}>
          <img src="https://www.speedcarwash.com/images/logo.png" alt="Speed Car Wash" />
        </Link>

        <nav className={`scw-menu ${open ? "mobile-open" : ""}`}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About Us</NavLink>

          <div className="nav-drop">
            <button onClick={() => setServicesOpen(!servicesOpen)}>Services <FiChevronDown /></button>
            <div className={`nav-dropdown ${servicesOpen ? "show" : ""}`}>
              {serviceLinks.map(([path, label]) => <Link to={path} onClick={close} key={path}>{label}</Link>)}
            </div>
          </div>

          <NavLink to="/contact" onClick={close}>Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="cart-pill"><FiShoppingBag /><span>Cart (0)</span></Link>
          <a className="nav-book" href="#booking" onClick={() => document.getElementById("booking")?.scrollIntoView({behavior:"smooth"})}>Book Wash <span>↗</span></a>
          <button className="nav-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <FiX /> : <FiMenu />}</button>
        </div>
      </div>
    </header>
  );
}
