import React, { useState, useEffect } from 'react';
import './styles/movingdot2.scss'; // Import a CSS file for styling
import a from './images/shawshank.jpg';
import b from './images/Godfather.jpg';
import c from './images/schindler.jpg';
import d from './images/forrest_gump_still.jpg';
import e from './images/inception.jpg';
import f from './images/departed.jpg';
const MovingDots2 = () => {
  const [dots, setDots] = useState([]);
  const frameRate = 60; // Frames per second
  const timeStep = 1000 / frameRate; // Time per frame in milliseconds

  useEffect(() => {
    const initialDots = Array.from({ length: 100 }, (_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
    }));

    setDots(initialDots);

    let lastUpdateTime = Date.now();

    const updateDots = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastUpdateTime;

      setDots((prevDots) =>
        prevDots.map((dot) => {
          const updatedDot = {
            ...dot,
            x: dot.x + (dot.speedX * deltaTime) / timeStep,
            y: dot.y + (dot.speedY * deltaTime) / timeStep,
          };

          if (updatedDot.x < 0 || updatedDot.x > window.innerWidth - 5) {
            updatedDot.speedX *= -1;
          }

          if (updatedDot.y < 0 || updatedDot.y > window.innerHeight - 5) {
            updatedDot.speedY *= -1;
          }

          return updatedDot;
        })
      );

      lastUpdateTime = currentTime;

      requestAnimationFrame(updateDots);
    };

    let animationFrameId = requestAnimationFrame(updateDots);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [timeStep]); // Include timeStep in the dependency array

  useEffect(() => {
    const handleMouseMove = (e) => {
      setDots((prevDots) =>
        prevDots.map((dot) => ({
          ...dot,
          x: dot.x + (e.clientX - window.innerWidth / 2) * 0.001,
          y: dot.y + (e.clientY - window.innerHeight / 2) * 0.001,
        }))
      );
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="moving-dots-container">
      {dots.map((dot) => (
          <div key={dot.id} className="dot" style={{ transform: `translate(${dot.x}px, ${dot.y}px)` }}>
          
             
          </div>
          
      ))}
         <div class="img1 divanimation">
    <img className='imgsrc' src={a} alt='' />

    <div class="img-layer">
        <h3>Shawshank redemption</h3>
        
        <a href="https://www.imdb.com/title/tt0111161/" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
          </div>
          <div class="img2 divanimation">
    <img className='imgsrc' src={b} alt='' />

    <div class="img-layer">
        <h2>The Godfather</h2>
        <p></p>
        <a href="https://www.imdb.com/title/tt0068646/?ref_=fn_al_tt_1" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
</div>
          <div class="img3 divanimation">
    <img className='imgsrc' src={c} alt='' />
    <div class="img-layer">
        <h2>Schindler's List </h2>
        <p></p>
        <a href="https://www.imdb.com/title/tt0108052/" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
          </div>
          <div class="img4 divanimation">
    <img className='imgsrc' src={d} alt='' />

    <div class="img-layer">
        <h2>Forrest Gump</h2>
        <p></p>
        <a href="https://www.imdb.com/title/tt0109830/" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
          </div>
          <div class="img5 divanimation">
    <img className='imgsrc' src={e} alt='' />

    <div class="img-layer">
        <h2>Inception</h2>
        <p></p>
        <a href="https://www.imdb.com/title/tt1375666/" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
      </div>
       <div class="img6 divanimation">
    <img className='imgsrc' src={f} alt='' />

    <div class="img-layer">
        <h2>The Departed</h2>
        <p></p>
        <a href="https://www.imdb.com/title/tt0407887/" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
</div>


         
          
         
          {/* <img className='img6' src={x} alt='' /> */}
        

         
          

           
    </div>
  );
};

export default MovingDots2;
