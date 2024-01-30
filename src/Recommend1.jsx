import React from 'react';
import './styles/Recommend.scss';


import b from './images/applogo.jpeg';
import c from './images/mobile.jpg';
import d from './images/laptop.jpg';
import {Link} from 'react-router-dom';

const Recommend = () => {
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
  return (
     <div class='recommended_1'>
  <center><h2>Recommended Articles</h2></center>
  <div class="recommendations-container">
    <div class="article-card">
      <img src={b} alt="Article 1"/>
      <h3>Top Software Trends 2023</h3>
      <Link to={`/Best-Software-Trends-2023`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
    <div class="article-card">
      <img  src={c}  alt="Article 2"/> 
      <h3>Best 5G Mobile under Rs 20,000 in 2023</h3>
      <Link to={`/Best-Mobile-under-20000-in-2023`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
    <div class="article-card">
      <img  src={d}  alt="Article 3"/>
      <h3>Best Gaming Laptop 2023</h3>
      <Link to={`/Best-Gaming-Laptop`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
  </div>
</div>
  );
};

export default Recommend;
