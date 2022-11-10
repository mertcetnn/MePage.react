import "./Contact.css";
import React from "react";
function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-left-side">
            <div className="contact-ls-title">
              <h1>Socials</h1>
            </div>
            <div className="contact-ls-content">
              <a href="https://github.com/mertcetnn?tab=repositories">
                <i class="fa-brands fa-square-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mert-cetin-newflag/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="contact-right-side">
            <div className="contact-rs-title">
              <h1>Contact</h1>
            </div>
            <div className="contact-rs-content">
              <div className="contact-rs-content-phone">
                <i class="fa-solid fa-phone"></i>
                <span>+1 786-843-2006</span>
              </div>
              <div className="contact-rs-content-gmail">
                <i class="fa-solid fa-envelope"></i>
                <span>mertcetnn@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
