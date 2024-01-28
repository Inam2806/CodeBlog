import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './styles/ImageAnimation2.scss'; // Import your SCSS file
import image1 from './images/Godfather.jpg';
import image2 from './images/shawshank.jpg';
const ImageSwitcher = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isSwitched, setSwitched] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // You can customize the condition based on your specific scroll position
    if (scrollTop > 600) {
      setSwitched(true);
    } else {
      setSwitched(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`image-switcher-container ${inView ? 'in-view' : ''}`}>
      <h2>Image Switcher</h2>

      {isSwitched ? (
        <img src={image1} alt="" />
      ) : (
        <img src={image2} alt="" />
      )}
    </div>
  );
};

export default ImageSwitcher;
