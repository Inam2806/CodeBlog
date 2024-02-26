import React from 'react';
import 'swiper/swiper-bundle.css';
import './styles/Movies1.scss';
import MovingDots3 from './movingdot3';
import a from './images/romantic_movie1.jpg';
import b from './images/romantic_movie2.jpg';
import c from './images/romantic_movie3.jpg';
import d from './images/romantic_movie4.jpg';
import e from './images/romantic_movie5.jpg';
import f from './images/romantic_movie6.jpg';

const Movies3 = () => {
  return (
    <div className='main_blog'>
      <MovingDots3 />
      <section className="blogpost2 scrollable-section">
        <div className='article_p'>
          <h1><center><strong>Best Romantic Movies</strong></center></h1>
          <div id='Movies' className='RomanticMovies'>
            {/* Movie 1 */}
            <h5><strong>1) The Notebook (2004)</strong></h5>
            <img src={a} alt="The Notebook" className="movie-image" />
            <ul>
              <li><strong>Heartwarming Love Story:</strong> Chronicles the enduring love between Noah and Allie.</li>
              <li><strong>Emotional Journey:</strong> Takes viewers on a rollercoaster of emotions from joy to tears.</li>
              <li><strong>Timeless Romance:</strong> A classic romance film cherished by audiences worldwide.</li>
              <li><strong>Chemistry:</strong> Ryan Gosling and Rachel McAdams deliver captivating performances.</li>
              <li><strong>Adapted from Novel:</strong> Based on Nicholas Sparks' best-selling novel.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0332280/" target="_blank" rel="noopener noreferrer">The Notebook</a></li>
            </ul>

            {/* Movie 2 */}
            <h5><strong>2) Pride and Prejudice (2005)</strong></h5>
            <img src={b} alt="Pride and Prejudice" className="movie-image" />
            <ul>
              <li><strong>Classic Literature Adaptation:</strong> Brings Jane Austen's timeless novel to life.</li>
              <li><strong>Compelling Characters:</strong> Elizabeth Bennet and Mr. Darcy's complex relationship.</li>
              <li><strong>Regency-Era Romance:</strong> Set against the backdrop of early 19th-century England.</li>
              <li><strong>Themes of Love and Class:</strong> Explores societal expectations and the pursuit of true love.</li>
              <li><strong>Stellar Ensemble Cast:</strong> Featuring Keira Knightley and Matthew Macfadyen.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0414387/" target="_blank" rel="noopener noreferrer">Pride and Prejudice</a></li>
            </ul>

            {/* Movie 3 */}
            <h5><strong>3) La La Land (2016)</strong></h5>
            <img src={c} alt="La La Land" className="movie-image" />
            <ul>
              <li><strong>Musical Romance:</strong> A modern musical that follows the love story of Mia and Sebastian.</li>
              <li><strong>Beautiful Cinematography:</strong> Known for its stunning visuals and captivating dance sequences.</li>
              <li><strong>Artistic Exploration:</strong> Explores the challenges of pursuing dreams in the entertainment industry.</li>
              <li><strong>Ryan Gosling and Emma Stone:</strong> The chemistry between the lead actors adds to the film's charm.</li>
              <li><strong>Awards Success:</strong> Won multiple Academy Awards, including Best Director and Best Actress.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt3783958/" target="_blank" rel="noopener noreferrer">La La Land</a></li>
            </ul>

            {/* Movie 4 */}
            <h5><strong>4) Before Sunrise (1995)</strong></h5>
            <img src={d} alt="Before Sunrise" className="movie-image" />
            <ul>
              <li><strong>Unconventional Love Story:</strong> Follows the chance encounter and evolving connection between Jesse and Céline.</li>
              <li><strong>Dialogue-Driven:</strong> Emphasizes meaningful conversations and connection over traditional romance.</li>
              <li><strong>Realistic Portrayal:</strong> Explores the transient nature of relationships and the impact of time.</li>
              <li><strong>Richard Linklater:</strong> Directed by Richard Linklater, known for his unique storytelling.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0112471/" target="_blank" rel="noopener noreferrer">Before Sunrise</a></li>
            </ul>

            {/* Movie 5 */}
            <h5><strong>5) Titanic (1997)</strong></h5>
            <img src={e} alt="Titanic" className="movie-image" />
            <ul>
              <li><strong>Epic Romance:</strong> Set against the backdrop of the ill-fated maiden voyage of the RMS Titanic.</li>
              <li><strong>Jack and Rose:</strong> The iconic love story of Jack Dawson and Rose DeWitt Bukater.</li>
              <li><strong>Historical Drama:</strong> Blends romance with elements of historical drama and tragedy.</li>
              <li><strong>Director James Cameron:</strong> Directed by James Cameron, known for his grand cinematic vision.</li>
              <li><strong>Acclaimed Soundtrack:</strong> Features the memorable song "My Heart Will Go On" by Celine Dion.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0120338/" target="_blank" rel="noopener noreferrer">Titanic</a></li>
            </ul>

           
            <h5><strong>6) About Time (2013)</strong></h5>
            <img src={f} alt="About Time" className="movie-image" />
            <ul>
              <li><strong>Time-Traveling Romance:</strong> Blends romance with elements of fantasy through time travel.</li>
              <li><strong>Heartfelt Story:</strong> Explores the importance of moments and relationships in life.</li>
              <li><strong>Domhnall Gleeson and Rachel McAdams:</strong> The lead actors deliver charming performances.</li>
              <li><strong>Directed by Richard Curtis:</strong> Known for his work on romantic comedies with a heartfelt touch.</li>
              <li><strong>Feel-Good Vibes:</strong> Leaves audiences with a warm and optimistic feeling.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt2194499/" target="_blank" rel="noopener noreferrer">About Time</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies3;
