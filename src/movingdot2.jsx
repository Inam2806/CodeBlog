import React, { useState, useEffect } from 'react';
import './styles/movingdot2.scss'; // Import a CSS file for styling
import afds from './images/Godfather.jpg';
import x from './images/shawshank.jpg';
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
    <img className='imgsrc' src={afds} alt='' />

    <div class="img-layer">
        <h2>Title</h2>
        <p>Description goes here</p>
        <a href="ddv" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
          </div>
          <div class="img2 divanimation">
    <img className='imgsrc' src={x} alt='' />

    <div class="img-layer">
        <h2>Title</h2>
        <p>Description goes here</p>
        <a href="ddv" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
</div>
          <div class="img3 divanimation">
    <img className='imgsrc' src={afds} alt='' />
    <div class="img-layer">
        <h2>Title</h2>
        <p>Description goes here</p>
        <a href="ddv" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
          </div>
          <div class="img4 divanimation">
    <img className='imgsrc' src={afds} alt='' />

    <div class="img-layer">
        <h2>Title</h2>
        <p>Description goes here</p>
        <a href="ddv" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
          </div>
          <div class="img5 divanimation">
    <img className='imgsrc' src={afds} alt='' />

    <div class="img-layer">
        <h2>Title</h2>
        <p>Description goes here</p>
        <a href="ddv" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
</div>


         
          
         
          {/* <img className='img6' src={x} alt='' /> */}
        

         
          

           
    </div>
  );
};

export default MovingDots2;
