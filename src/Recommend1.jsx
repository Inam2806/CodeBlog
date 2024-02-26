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
    <div class="article-card-rec">
      <img src={b} alt="Article 1"/>
      <center>
      <h3><strong>Top Software Trends 2023</strong></h3></center>
      <Link to={`/Best-Software-Trends-2023`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
    <div class="article-card-rec">
      <img  src={c}  alt="Article 2"/> 
        <center>
      <h3><strong>Best 5G Mobile under 20,000 in 2023</strong></h3></center>
      <Link to={`/Best-Mobile-under-20000-in-2023`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
    <div class="article-card-rec">
          <img src={d} alt="Article 3" />
          <center>
      <h3><strong>Best Gaming Laptop 2023</strong></h3></center>
      <Link to={`/Best-Gaming-Laptop`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
  </div>
</div>
  );
};

export default Recommend;
