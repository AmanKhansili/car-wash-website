
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({ name:"", email:"", phone:"", service:"SCW WASHING", message:"" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/form/submit", {
        method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({name:"",email:"",phone:"",service:"SCW WASHING",message:""});
      } else alert("Error: " + result.error);
    } catch (err) {
      console.error(err);
      alert("Network error. Please make sure your Express backend is running.");
    }
  };

  if (submitted) return (
    <div className="form-success">
      <div className="success-icon">✓</div>
      <h3>Thank You!</h3>
      <p>Your request has been submitted successfully and saved to the database. We will contact you soon.</p>
      <button onClick={() => setSubmitted(false)}>Send Another Enquiry</button>
    </div>
  );

  return (
    <form className="modern-booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your Name<input name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" /></label>
        <label>Phone Number<input name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter 10-digit mobile number" /></label>
      </div>
      <div className="form-row">
        <label>Email Address<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" /></label>
        <label>Service / Enquiry Type
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="SCW WASHING">SCW Washing</option><option value="SCW QUICK SERVICE">SCW Quick Service</option><option value="SCW DETAILING">SCW Detailing</option><option value="SCW WRAPPING">SCW Wrapping</option>
          </select>
        </label>
      </div>
      <label>Message / Car Details<textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Write your message or car model details here..." /></label>
      <button className="form-submit" type="submit">Submit Request <span>↗</span></button>
    </form>
  );
}
