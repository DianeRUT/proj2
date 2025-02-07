import React, { useState } from "react";
import "../styles/Contact.css"; // Import CSS for styling

 function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="contact-container">
      {/* Google Map with Zoom Effect */}
      <div className="map-container">
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.917129771792!2d-73.99108922416425!3d40.752725235273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b0b72b%3A0x99278d31b86b77cd!2s501-521%20Fashion%20Ave%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sus!4v1648464796422!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      <div className="form-and-info">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Leave Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label>Name *</label>
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                required
                onChange={handleChange}
              />
            </div>

            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
            />

            <label>Comment or Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>

        {/* Store Information */}
        <div className="store-info">
          <h2>Our Store</h2>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
          <p>PHONE: +1 212 244 2461</p>
          <p>E-MAIL: office@example.org</p>

          <h2>Store Hours</h2>
          <p>Sun: Closed</p>
          <p>Mon to Sat: 10 AM – 5:30 PM</p>
        </div>
      </div>
    </div>
  );
}
export default ContactUs