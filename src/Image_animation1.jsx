import React, { useState, useEffect } from 'react';
import './styles/ImageAnimation.scss'; // Import your styles
import t1 from './images/Chrome.jpg';
import t2 from './images/firefox.jpg';
import t3 from './images/MicrosoftEdge.jpg';
import t4 from './images/Safari.jpg';
import t5 from './images/opera.jpg';
import t6 from './images/brave.jpg';
import t7 from './images/Vivaldi.jpg';
import t8 from './images/Tor.jpg.png';


const ImageAnimation1 = () => {
  const [currentImage, setCurrentImage] = useState(1);

  const handleWheel = (event) => {
    event.preventDefault(); // Prevent the default scrolling behavior

    let delta;
    if (event.deltaMode === 1) {
      // Pixel scrolling (most mice)
      delta = event.deltaY;
    } else {
      // Line or page scrolling (some mice, trackpads, etc.)
      delta = event.deltaY * 40;
    }

    if (delta > 0) {
      // Scrolling down
      setCurrentImage((prevImage) => (prevImage < 5 ? prevImage + 1 : 1));
    } else {
      // Scrolling up
      setCurrentImage((prevImage) => (prevImage > 1 ? prevImage - 1 : 5));
    }
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      window.addEventListener('wheel', handleWheel, { passive: false });
    };

    const handleMouseLeave = () => {
      window.removeEventListener('wheel', handleWheel);
    };

    const imageSlider = document.querySelector('.image-slider');

    imageSlider.addEventListener('mouseenter', handleMouseEnter);
    imageSlider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      imageSlider.removeEventListener('mouseenter', handleMouseEnter);
      imageSlider.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="image-slider" onWheel={handleWheel}>
      <img
        src={
          currentImage === 1
            ? t1
            : currentImage === 2
            ? t2
            : currentImage === 3
            ? t3
            : currentImage === 4
            ? t4
            : currentImage === 5
            ? t5
            : currentImage === 6
            ? t6
            : currentImage === 7
            ? t7
            : t8
        }
        alt={`Slide ${currentImage}`}
      />
    </div>
  );
};

export default ImageAnimation1;
