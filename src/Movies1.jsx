import React from 'react';

import 'swiper/swiper-bundle.css';

import './styles/Blogger.scss';
import Shawshank from './images/shawshank.jpg';
import Godfather from './images/Godfather.jpg';
import './styles/Movies1.scss';


  

const Movies1 = () => {
  
  return (
    <div className='main_blog'>
          <section className="blogpost2 scrollable-section">
             
       
              <div className='article_p'>
                   <h1><center><strong>Best Drama Movies</strong></center></h1>
                  <div id='Movies' className='Dramamovies'>
                    <h5><strong>1) Shawshank redemption</strong></h5>
     <img src={Shawshank} alt="Shawshank Redemption" className="movie-image" />
    
    <ul>
  <li><strong> Timeless Story:</strong>  The Shawshank Redemption's narrative of hope and friendship resonates across generations.</li>
  <li><strong> Memorable Characters:</strong>  Tim Robbins and Morgan Freeman's performances create unforgettable characters.</li>
  <li><strong> Message of Hope:</strong>  The film delivers a powerful message about maintaining optimism in adversity.</li>
  <li><strong> Realistic Portrayal:</strong>  It realistically depicts the challenges of prison life, both physical and emotional.</li>
  <li><strong> Exceptional Acting:</strong>  Stellar performances contribute to the film's authenticity and emotional impact.</li>
  <li><strong> Cinematic Craftsmanship:</strong>  Well-directed with cohesive elements, enhancing the overall cinematic experience.</li>
  <li><strong> Emotional Resonance:</strong>  Evokes strong emotional responses, from laughter to tears, leaving a lasting impact.</li>
  <li><strong>Universal Themes:</strong> Explores universal themes like friendship, freedom, and resilience.</li>
  <li><strong> No Need for Special Effects:</strong>  Relies on storytelling and performances, avoiding the need for elaborate special effects.</li>
                          <li><strong> Positive Reception Over Time:</strong>  Despite initial struggles, it has gained widespread acclaim, proving its enduring quality.</li>
                            <li><a href="https://www.imdb.com/title/tt0111161/" target="_blank" rel="noopener noreferrer">IMDb: The Shawshank Redemption</a></li>
</ul>
                    
                      <h5><strong>2) The Godfather (1972)</strong></h5>
                      <ul>
                           <img src={Godfather} alt="Shawshank Redemption" className="movie-image" />
  <li><strong>Timeless Story:</strong> Gripping narrative exploring power, loyalty, and consequences of violence.</li>
  <li><strong>Memorable Characters:</strong> Unforgettable performances by Marlon Brando and Al Pacino.</li>
  <li><strong>Message of Hope:</strong> Weaves in hope amid the dark world of organized crime.</li>
  <li><strong>Realistic Portrayal:</strong> Realistic depiction of challenges within the organized crime milieu.</li>
  <li><strong>Exceptional Acting:</strong> Stellar performances, particularly by Brando and Pacino.</li>
  <li><strong>Cinematic Craftsmanship:</strong> Masterful direction by Francis Ford Coppola.</li>
  <li><strong>Emotional Resonance:</strong> Evokes strong emotional responses and deep connections.</li>
  <li><strong>Universal Themes:</strong> Explores universal concepts of family, power, and choices.</li>
  <li><strong>No Need for Special Effects:</strong> Relies on storytelling and performances, minimizing special effects.</li>
                          <li><strong>Positive Reception Over Time:</strong> Gained widespread acclaim, proving enduring quality.</li>
                          <li><a href="https://www.imdb.com/title/tt0068646/?ref_=fn_al_tt_1" target="_blank" rel="noopener noreferrer">IMDb: The GodFather </a></li>
</ul>

</div>

  </div>
</section>
    </div>
    
      
  );
};

export default Movies1;
