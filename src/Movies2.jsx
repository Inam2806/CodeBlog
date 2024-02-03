import React from 'react';
import 'swiper/swiper-bundle.css';
import './styles/Movies1.scss';
import MovingDots from './movingdot2';
import a from './images/action_movie1.jpg';
import b from './images/action_movie2.jpg';
import c from './images/action_movie3.jpg';
import d from './images/action_movie4.jpg';
import e from './images/action_movie5.jpg';
import f from './images/action_movie6.jpg';

const Movies2 = () => {
  return (
    <div className='main_blog'>
      <MovingDots />
      <section className="blogpost2 scrollable-section">
        <div className='article_p'>
          <h1><center><strong>Best Action Movies</strong></center></h1>
          <div id='Movies' className='ActionMovies'>
            {/* Movie 1 */}
            <h5><strong>1) Mad Max: Fury Road (2015)</strong></h5>
            <img src={a} alt="Mad Max: Fury Road" className="movie-image" />
            <ul>
              <li><strong>Action-packed Plot:</strong> A post-apocalyptic action film set in a desolate wasteland.</li>
              <li><strong>Intense Car Chases:</strong> Known for its adrenaline-pumping and visually stunning car chase sequences.</li>
              <li><strong>Iconic Characters:</strong> Featuring the iconic character Max portrayed by Tom Hardy.</li>
              <li><strong>Visual Spectacle:</strong> Recognized for its breathtaking cinematography and practical effects.</li>
              <li><strong>Critical Acclaim:</strong> Received multiple Academy Awards and widespread critical acclaim.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt1392190/" target="_blank" rel="noopener noreferrer">Mad Max: Fury Road</a></li>
            </ul>

            {/* Movie 2 */}
            <h5><strong>2) Die Hard (1988)</strong></h5>
            <img src={b} alt="Die Hard" className="movie-image" />
            <ul>
              <li><strong>Action-packed Plot:</strong> A classic action film featuring Bruce Willis as NYPD officer John McClane.</li>
              <li><strong>Die Hard Formula:</strong> Popularized the "Die Hard" formula for action movies set in confined spaces.</li>
              <li><strong>Memorable Quotes:</strong> Known for its memorable one-liners, including "Yippee-ki-yay, motherf***er!"</li>
              <li><strong>Thrilling Suspense:</strong> Builds suspense through a hostage situation in a Los Angeles skyscraper.</li>
              <li><strong>Genre Influence:</strong> Influential in shaping the action genre for years to come.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0095016/" target="_blank" rel="noopener noreferrer">Die Hard</a></li>
            </ul>

            {/* Movie 3 */}
            <h5><strong>3) The Dark Knight (2008)</strong></h5>
            <img src={c} alt="The Dark Knight" className="movie-image" />
            <ul>
              <li><strong>Action-packed Plot:</strong> The second installment in Christopher Nolan's Batman trilogy.</li>
              <li><strong>Iconic Villain:</strong> Heath Ledger's portrayal of the Joker is widely praised and iconic.</li>
              <li><strong>Intense Action Sequences:</strong> Known for its intense and well-choreographed action sequences.</li>
              <li><strong>Deep Themes:</strong> Explores complex themes of morality and chaos.</li>
              <li><strong>Acclaimed Performances:</strong> Received critical acclaim for performances, especially Heath Ledger's posthumous Oscar-winning role.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0468569/" target="_blank" rel="noopener noreferrer">The Dark Knight</a></li>
            </ul>

            {/* Movie 4 */}
            <h5><strong>4) John Wick (2014)</strong></h5>
            <img src={d} alt="John Wick" className="movie-image" />
            <ul>
              <li><strong>Action-packed Plot:</strong> Follows the titular character, John Wick, a retired hitman seeking revenge.</li>
              <li><strong>Stylish Action:</strong> Known for its stylish and meticulously choreographed action sequences.</li>
              <li><strong>Keanu Reeves:</strong> Keanu Reeves delivers a compelling and physical performance.</li>
              <li><strong>World-Building:</strong> Introduces a rich and intriguing world of assassins and secret societies.</li>
              <li><strong>Critical Acclaim:</strong> Praised for its action, visuals, and world-building.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt2911666/" target="_blank" rel="noopener noreferrer">John Wick</a></li>
            </ul>

            {/* Movie 5 */}
            <h5><strong>5) Gladiator (2000)</strong></h5>
            <img src={e} alt="Gladiator" className="movie-image" />
            <ul>
              <li><strong>Action-packed Plot:</strong> Epic historical drama depicting the Roman General Maximus' quest for justice.</li>
              <li><strong>Russell Crowe:</strong> Russell Crowe's powerful portrayal earned him an Academy Award.</li>
              <li><strong>Grand Scale:</strong> Known for its grand and visually stunning portrayal of ancient Rome.</li>
              <li><strong>Breathtaking Battles:</strong> Features memorable and intense gladiatorial combat scenes.</li>
              <li><strong>Acclaimed Direction:</strong> Directed by Ridley Scott, the film received widespread critical acclaim.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0172495/" target="_blank" rel="noopener noreferrer">Gladiator</a></li>
            </ul>

            {/* Movie 6 */}
            <h5><strong>6) The Matrix (1999)</strong></h5>
            <img src={f} alt="The Matrix" className="movie-image" />
            <ul>
              <li><strong>Action-packed Plot:</strong> Groundbreaking sci-fi action film with a mind-bending narrative.</li>
              <li><strong>Bullet Time:</strong> Popularized the "bullet time" visual effect in action sequences.</li>
              <li><strong>Keanu Reeves:</strong> Features Keanu Reeves in the iconic role of Neo.</li>
              <li><strong>Philosophical Themes:</strong> Explores philosophical concepts of reality and control.</li>
              <li><strong>Cultural Impact:</strong> Became a cultural phenomenon and influenced action filmmaking.</li>
              <li><strong>IMDb:</strong> <a href="https://www.imdb.com/title/tt0133093/" target="_blank" rel="noopener noreferrer">The Matrix</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies2;
