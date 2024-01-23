import React from 'react';
import './styles/Recommend.scss';
import t from './images/a.jpg'
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
      <img src={t} alt="Article 1"/>
      <h3>Top Software Trends 2024</h3>
      <Link to={`/Blogger2`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
    <div class="article-card">
      <img  src={t}  alt="Article 2"/> 
      <h3>Article 2</h3>
      <Link to={`/Blogger3`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
    <div class="article-card">
      <img  src={t}  alt="Article 3"/>
      <h3>Article 3</h3>
      <Link to={`/Blogger4`} onClick={scrollToTop} rel="noopener noreferrer">
  Read more
</Link>
    </div>
  </div>
</div>
  );
};

export default Recommend;
