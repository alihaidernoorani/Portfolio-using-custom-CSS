import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="header">
          <h1>Send a Message</h1>
        </div>
        <div className="form-wrapper">
          <form className="form">
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
