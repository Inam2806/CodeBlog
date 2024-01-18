
import './styles/Contact.scss'; // Import your CSS file
import React from 'react';

const Contact = () => {

  return (
    <section className="contact">
      <div className="content">
      </div>
      <div className="container_contact">
        <div className="contactinfro">
          <div className="box">
            <div className="icon" style={{ color: 'black' }}>
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">
             <h3 >Phone</h3>

              <p style={{ color: 'black' }}>8529742747</p>
            </div>
          </div>
          <div className="box">
            <div className="icon" style={{ color: 'black' }}>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p style={{ color: 'black' }}>inamulhaque952@gmail.com</p>
            </div>
          </div>
          <div className="social-icons">
                    <a href="https://www.facebook.com/Inamulhaque2806" target="_blank" rel="noopener noreferrer" style={{color:"Black"}}><i className="fa fa-facebook" ></i></a>
                    <a href="https://www.instagram.com/inam_ul_haque_" target="_blank" rel="noopener noreferrer" style={{color:"Black"}}><i className="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/InamUl280601 " target="_blank" rel="noopener noreferrer" style={{color:"Black"}}><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/inamul-haque-3844a81a0/" target="_blank" rel="noopener noreferrer" style={{color:"Black"}}><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
        <div className="contactform">
          <form
            action="mailto:inamulhaque952@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="inputBox">
              <label style={{ color: 'black' }}>Your Name:</label>
              <input
                type="text"
                name="Your Name"
                value=""
                              required
                              style={{ backgroundColor: 'white', color: 'black' }}
              />
            </div>
            <div className="inputBox">
              <div className="inputBox">
  <label style={{ color: 'black' }}>Your Email:</label>
  <input 
    type="email"
    name="Your Email"
    value=""
    required
    style={{ backgroundColor: 'white', color: 'black' }}
  />
</div>

            </div>
            <div className="inputBox">
              <label style={{ color: 'black' }}>Your Message:</label>
              <br />
              <textarea name="Your Message" required style={{ backgroundColor: 'white', color: 'black' }}></textarea>
            </div>
            <div className="inputBox">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
