// Footer.jsx

import React from 'react';
import './styles/Footer.scss'; // Add the appropriate style file
import { Link } from 'react-router-dom';

const Footer = ({ isFooterVisible }) => {
  const scrollToTop = () => {
  window.scrollTo(0, 0);
  };
  const footerStyle = {
    zIndex: isFooterVisible ? 0 : 100, // Set z-index to 100 when footer is visible, 0 otherwise
    position: 'absolute', // Position the footer at the bottom of the container
    width: '100%', // Make sure the footer spans the entire width
  };

  return (
    <footer className="footer_1" style={footerStyle}>
      <div className="footer-container_1">
       <div className="footer-buttons_1">
  <Link to={`/Contact`} onClick={scrollToTop} rel="noopener noreferrer">
    <button className="black-button_1" >Contact</button>
  </Link>
  <Link to={`/about`}  onClick={scrollToTop} rel="noopener noreferrer">
    <button className="black-button_1" >About</button>
          </Link>
      <Link to={`/TermAndCondition`}  onClick={scrollToTop} rel="noopener noreferrer">
    <button className="black-button_1" >Term & Conditions</button>
          </Link>
           <Link to={`/Privacy`}  onClick={scrollToTop} rel="noopener noreferrer">
    <button className="black-button_1" >Privacy</button>
  </Link>
</div>
    <div className="social-media_1">
                    <a href="https://www.facebook.com/Inamulhaque2806" target="_blank" rel="noopener noreferrer" style={{ color: 'White' }}><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/inam_ul_haque_" target="_blank" rel="noopener noreferrer" style={{ color: 'White' }}><i className="fa fa-instagram"></i></a>
                    <a href="https://twitter.com/InamUl280601 " target="_blank" rel="noopener noreferrer" style={{ color: 'White' }}><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/inamul-haque-3844a81a0/" target="_blank" rel="noopener noreferrer" style={{ color: 'White' }}><i className="fa fa-linkedin"></i></a>
    </div>
  </div>
  <p className="copyright_1">© Copyright Inam Ul Haque <i className="fas fa-heart"></i> 2023</p>
</footer>
  );
};

export default Footer;
