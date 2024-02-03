import React from 'react';

import 'swiper/swiper-bundle.css';

import './styles/Blogger.scss';
import a from './images/shawshank.jpg';
import b from './images/Godfather.jpg';
import c from './images/schindler.jpg';
import d from './images/forrest_gump_still.jpg';
import e from './images/inception.jpg';
import f from './images/departed.jpg';
import './styles/Movies1.scss';
import MovingDots2   from './movingdot1';

  

const Movies1 = () => {
  
  return (
    <div className='main_blog'>
      <MovingDots2/> 
          <section className="blogpost2 scrollable-section">
           
        <div className='article_p'>
          
                   <h1><center><strong>Best Drama Movies</strong></center></h1>
                  <div id='Movies' className='Dramamovies'>
                    <h5><strong>1) Shawshank redemption</strong></h5>
     <img src={a} alt="Shawshank Redemption" className="movie-image" />
    
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
                           <img src={b} alt="Shawshank Redemption" className="movie-image" />
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
 {/* Movie 3: Schindler's List */}
            <h5><strong>3) Schindler's List (1993)</strong></h5>
            <img src={c} alt="Schindler's List" className="movie-image" />
            <ul>
              <li><strong>Powerful Narrative:</strong> Tells the true story of Oskar Schindler and his efforts to save Jews during World War II.</li>
              <li><strong>Impactful Performances:</strong> Liam Neeson and Ben Kingsley deliver powerful performances.</li>
              <li><strong>Historical Accuracy:</strong> Offers a gripping portrayal of the Holocaust with attention to historical details.</li>
              <li><strong>Emotional Resonance:</strong> Creates a deeply emotional connection with the audience.</li>
              <li><strong>Critical Acclaim:</strong> Received numerous awards and nominations for its excellence.</li>
              <li><strong>Memorable Scenes:</strong> The film is known for its impactful and unforgettable scenes.</li>
              <li><strong>Legacy:</strong> Considered a masterpiece in the historical drama genre.</li>
              <li><a href="https://www.imdb.com/title/tt0108052/" target="_blank" rel="noopener noreferrer">IMDb: Schindler's List</a></li>
            </ul>

            {/* Movie 4: Forrest Gump */}
            <h5><strong>4) Forrest Gump (1994)</strong></h5>
            <img src={d} alt="Forrest Gump" className="movie-image" />
            <ul>
              <li><strong>Heartwarming Story:</strong> Follows the extraordinary life of Forrest Gump, played by Tom Hanks.</li>
              <li><strong>Emotional Journey:</strong> Blends humor and drama, taking viewers on an emotional rollercoaster.</li>
              <li><strong>Iconic Moments:</strong> Features memorable scenes and quotes that have become cultural landmarks.</li>
              <li><strong>Exceptional Performance:</strong> Tom Hanks delivers an outstanding performance as Forrest Gump.</li>
              <li><strong>Awards:</strong> Won multiple Academy Awards, including Best Picture and Best Actor.</li>
              <li><strong>Impact on Pop Culture:</strong> Became a cultural phenomenon and is often referenced in popular media.</li>
              <li><strong>Feel-Good Factor:</strong> Leaves audiences with a positive and uplifting feeling.</li>
              <li><a href="https://www.imdb.com/title/tt0109830/" target="_blank" rel="noopener noreferrer">IMDb: Forrest Gump</a></li>
            </ul>
             {/* Movie 5: Inception */}
  <h5><strong>5) Inception (2010)</strong></h5>
  <img src={e} alt="Inception" className="movie-image" />
  <ul>
    <li><strong>Mind-Bending Plot:</strong> Christopher Nolan's masterpiece with a complex and thought-provoking narrative.</li>
    <li><strong>Visual Spectacle:</strong> Known for its stunning visual effects and mind-bending scenes.</li>
    <li><strong>Exceptional Ensemble Cast:</strong> Featuring Leonardo DiCaprio, Ellen Page, and Tom Hardy, among others.</li>
    <li><strong>Genre-Defining:</strong> Redefined the sci-fi genre with its innovative concept and execution.</li>
    <li><strong>Critical Acclaim:</strong> Received widespread critical acclaim and numerous awards.</li>
    <li><strong>Iconic Score:</strong> Hans Zimmer's score adds to the film's intensity and atmosphere.</li>
    <li><strong>Open-Ended Conclusion:</strong> Leaves audiences contemplating its ambiguous ending.</li>
    <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt1375666/" target="_blank" rel="noopener noreferrer">Inception</a></li>
  </ul>

  {/* Movie 6: The Shawshank Redemption */}
  <h5><strong>6) The Departed (2006)</strong></h5>
  <img src={f} alt="The Departed" className="movie-image" />
  <ul>
    <li><strong>Intense Crime Drama:</strong> Martin Scorsese's gripping exploration of crime and undercover operations.</li>
    <li><strong>All-Star Cast:</strong> Features Leonardo DiCaprio, Jack Nicholson, and Matt Damon in key roles.</li>
    <li><strong>Twists and Turns:</strong> Known for its unpredictable plot twists and suspenseful moments.</li>
    <li><strong>Oscar Success:</strong> Won four Academy Awards, including Best Picture and Best Director.</li>
    <li><strong>Sharp Dialogue:</strong> Memorable quotes and sharp dialogue contribute to its impact.</li>
    <li><strong>Boston Setting:</strong> The film skillfully captures the atmosphere of Boston's crime underworld.</li>
    <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0407887/" target="_blank" rel="noopener noreferrer">The Departed</a></li>
  </ul>
</div>

  </div>
</section>
    </div>
    
      
  );
};

export default Movies1;
