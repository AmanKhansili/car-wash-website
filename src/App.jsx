
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookingForm from "./components/Form";
import ProductsSection from "./components/Products";
import Footer from "./components/Footer";
import EnquiryWidget from "./components/EnquiryWidget";
import { servicesData } from "./components/servicesData";

const featureItems = [
  { title: "Best Experience", image: "https://www.speedcarwash.com/img/f2.png", text: "Professional care with a smooth, convenient customer experience." },
  { title: "Affordable Prices", image: "https://www.speedcarwash.com/img/f3.png", text: "Value-focused packages without compromising the finish." },
  { title: "Clean Cars", image: "https://www.speedcarwash.com/img/f1.png", text: "Modern equipment for a deeper, more consistent clean." },
  { title: "Shiny Cars", image: "https://www.speedcarwash.com/img/f5.png", text: "Finishing treatments that bring back the gloss." },
];

const homeServices = [
  { title: "SCW WASHING", desc: "Speed Car Wash is offering a wide range of washing services to car owners including top wash...", image: "https://www.speedcarwash.com/img/s1.png", path: "/services/washing", accent: "01" },
  { title: "SCW QUICK SERVICE", desc: "As a Speed Service Point (SSP), we pledge to provide high quality automotive maintenance services...", image: "https://www.speedcarwash.com/img/s2.png", path: "/services/washing", accent: "02" },
  { title: "SCW DETAILING", desc: "Primary motive to serve our customers with professional car detailing service with internationally approved standards...", image: "https://www.speedcarwash.com/img/s3.png", path: "/services/detailing", accent: "03" },
  { title: "SCW WRAPPING", desc: "Our network of trained SCW Vehicle Wrappers can help you create impactful vehicle branding...", image: "https://www.speedcarwash.com/img/s4.png", path: "/services/wrapping", accent: "04" },
];

const stats = [
  ["20 min", "Fast wash promise"],
  ["25K+", "Cars cared for"],
  ["7 days", "Service availability"],
  ["100%", "Care at every visit"],
];

export default function SpeedCarWashLanding() {
  const [activeService, setActiveService] = useState("washing");
  const [showBooklet, setShowBooklet] = useState(false);
  const current = servicesData[activeService];

  return (
    <div className="site-shell">
      <Navbar />
      <EnquiryWidget />

      <main>
        <section className="premium-hero">
          <div className="hero-noise" />
          <div className="hero-orb hero-orb-a" />
          <div className="hero-orb hero-orb-b" />
          <div className="hero-inner scw-container">
            <div className="hero-copy">
              <div className="eyebrow light"><span className="eyebrow-dot" /> Premium car care, made simple</div>
              <h1>More than a wash.<br /><span>A better way to care.</span></h1>
              <p>
                Speed Car Wash is changing the way people think about car cleaning.
                From high-pressure washing to detailing, our latest equipment helps your car
                look and feel its best.
              </p>
              <div className="hero-buttons">
                <Link className="scw-btn primary" to="/services/washing">Explore Services <span>↗</span></Link>
                <Link className="scw-btn ghost" to="/contact">Get a Quote <span>↗</span></Link>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars"><i>SC</i><i>+</i></div>
                <div><strong>Trusted car care</strong><span>Professional service • Modern equipment</span></div>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-photo-wrap">
                <img src="https://www.speedcarwash.com/images/slider/new/sl1.png" alt="Speed Car Wash service" />
                <div className="photo-overlay" />
                <div className="hero-photo-label"><span>SCW</span><div><strong>New look. New feel.</strong><small>Platinum Wash • Ceramic Coatings • Internal Dry Cleaning</small></div></div>
              </div>
              <div className="hero-floating hero-floating-top"><b>20</b><span>MIN<br />WASH</span></div>
              <div className="hero-floating hero-floating-bottom"><span className="tick">✓</span><div><strong>Professional equipment</strong><small>Foam • Vacuum • Steam • Extraction</small></div></div>
            </div>
          </div>
          <div className="hero-stats scw-container">
            {stats.map(([value, label]) => <div className="hero-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section>

        <section className="intro-section scw-section">
          <div className="scw-container">
            <div className="section-head split">
              <div>
                <div className="eyebrow">THE SPEED CAR WASH DIFFERENCE</div>
                <h2>Designed around your car,<br /><span>not around the queue.</span></h2>
              </div>
              <p>It is a unique mechanized car cleaning concept where cars are getting pampered by the latest equipments including high pressure cleaning machines, spray injection and extraction machines, high powered vacuum cleaners, steam cleaners and so on.</p>
            </div>
            <div className="feature-rail">
              {featureItems.map((item, index) => (
                <article className="feature-tile" key={item.title}>
                  <span className="feature-number">0{index + 1}</span>
                  <div className="feature-image"><img src={item.image} alt={item.title} /></div>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <span className="feature-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-section scw-section">
          <div className="scw-container">
            <div className="section-head centered">
              <div className="eyebrow">WHAT WE DO</div>
              <h2>One place for every<br /><span>kind of car care.</span></h2>
              <p>Love your car. We make it more adorable.</p>
            </div>

            <div className="service-tabs">
              <button className={activeService === "washing" ? "active" : ""} onClick={() => setActiveService("washing")}>Washing</button>
              <button className={activeService === "detailing" ? "active" : ""} onClick={() => setActiveService("detailing")}>Detailing</button>
              <button className={activeService === "wrapping" ? "active" : ""} onClick={() => setActiveService("wrapping")}>Wrapping</button>
            </div>

            <div className="service-showcase">
              <div className="service-showcase-image">
                <img src={current.servicesList?.[0]?.image || "https://www.speedcarwash.com/images/services/silver-wash.jpg"} alt={current.title} />
                <div className="image-caption"><span>SCW</span><strong>{current.title}</strong></div>
              </div>
              <div className="service-showcase-copy">
                <div className="eyebrow">FEATURED SERVICE</div>
                <h3>{current.servicesList?.[0]?.title}</h3>
                <p>{current.description}</p>
                <div className="service-meta"><span>◷ {current.servicesList?.[0]?.time || "Professional service"}</span><span>✓ Expert care</span></div>
                <Link className="text-link" to={`/services/${activeService}`}>View all {activeService} services <span>→</span></Link>
              </div>
            </div>

            <div className="home-service-grid">
              {homeServices.map((service) => (
                <Link to={service.path} className="home-service-card" key={service.title}>
                  <div className="card-img"><img src={service.image} alt={service.title} /><span>{service.accent}</span></div>
                  <div className="card-copy"><div className="eyebrow">SPEED CAR WASH</div><h3>{service.title}</h3><p>{service.desc}</p><span className="learn">Know More ↗</span></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="booklet-section">
          <div className="scw-container booklet-inner">
            <div className="booklet-copy">
              <div className="eyebrow light">LIMITED PERIOD OFFER</div>
              <h2>IT'S A LOOT.<br /><span>GRAB A BOOKLET TODAY.</span></h2>
              <p>Benefits with Speed Car Wash Privilege Booklet...</p>
              <ul><li>Transferable to any one</li><li>Valid For 2 year</li><li>Cashless and Online Payment Options</li><li>Best Services By World's Best Professionals at Local Prices</li><li>Cashless and Online Payment Options</li></ul>
              <button className="scw-btn primary" onClick={() => setShowBooklet(true)}>Grab Booklet <span>↗</span></button>
            </div>
            <div className="booklet-art"><div className="booklet-glow" /><img src="https://www.speedcarwash.com/img/booklet.jpg" alt="Speed Car Wash booklet" onError={(e) => { e.currentTarget.src = "https://www.speedcarwash.com/img/voucher.jpg"; }} /></div>
          </div>
        </section>

        <ProductsSection />

        <section className="reviews-section scw-section">
          <div className="scw-container">
            <div className="section-head split review-head">
              <div><div className="eyebrow">CUSTOMER & CLIENT VOICES</div><h2>You're not the only one<br /><span>excited about your clean car.</span></h2></div>
              <p>Feedback from customers and clients who have experienced the Speed Car Wash service.</p>
            </div>
            <div className="review-grid">
              <article className="review-card"><span className="review-stars">★★★★★</span><p>“I am impressed with the way of cleaning particularly under body wash without lifting. I am Amazed..”</p><strong>Rajesh Garg</strong><small>Customer</small></article>
              <article className="review-card"><span className="review-stars">★★★★★</span><p>“We are very happy with installation and training team. They have provided good hands on experience...”</p><strong>SCW Client Support</strong><small>Client feedback</small></article>
              <article className="review-card review-card-dark"><span className="quote">“</span><p>Professional service, modern equipment and a cleaner-car experience built around convenience.</p><strong>Speed Car Wash</strong><small>Service promise</small></article>
            </div>
          </div>
        </section>

        <section id="booking" className="booking-section scw-section">
          <div className="scw-container booking-shell">
            <div className="booking-intro">
              <div className="eyebrow light">READY WHEN YOU ARE</div>
              <h2>Book your next<br /><span>car care session.</span></h2>
              <p>Choose a convenient time and our team will help you with the right service.</p>
              <span className="booking-call">+91-12345678</span>
            </div>
            <div className="booking-form-wrap"><BookingForm /></div>
          </div>
        </section>
      </main>

      <Footer />

      {showBooklet && <div className="scw-modal" onClick={(e) => e.target === e.currentTarget && setShowBooklet(false)}><div className="modal-card"><button onClick={() => setShowBooklet(false)}>×</button><div className="eyebrow">SPEED CAR WASH</div><h2>Privilege Booklet</h2><p>Benefits with Speed Car Wash Privilege Booklet. Connect the existing booklet flow here.</p><a href="mailto:info@speedcarwash.com" className="scw-btn primary">Request Details ↗</a></div></div>}
    </div>
  );
}
