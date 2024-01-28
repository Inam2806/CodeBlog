import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './styles/ScrollEffect.scss'; // Add the appropriate style file

const YourComponent = () => {
  const [showScrollableSection, setShowScrollableSection] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 767) {
      $(function () {
        var rightSection = $('.right-section-1');
        var scrollableSection = $('.blogpost2');
        const speedFactor = 0.05; // Adjust this value to control the speed

        // Apply initial styles when the document is ready
        rightSection.css({
          // Add your initial styles here
        });

        // Use .on() to handle the scroll event
        $(window).on('scroll', function () {
          var scroll = $(window).scrollTop();
          var sectionOffset = scrollableSection.offset().top;
          var sectionHeight = scrollableSection.outerHeight();

          // Calculate the relative scroll position within the section
          var relativeScroll = scroll - sectionOffset;

          // Check if the scroll is within the section
          if (relativeScroll >= 0 && relativeScroll <= sectionHeight) {
            // Apply styles based on scroll position
            rightSection.css({
              top: relativeScroll * speedFactor,
              // Add your scroll-based styles here
            });

            // Show the scrollable section
            setShowScrollableSection(true);
          } else {
            // Hide the scrollable section
            setShowScrollableSection(false);
          }
        });
      });
    }
  }, []);

  return (
    <div className={`scrollable-section_Scroll ${showScrollableSection ? '' : 'hidden'}`}>
      {window.innerWidth > 1100 && showScrollableSection && (
        <div className="right-section-1">
          <div className="rectangle">
            <h2>Table of Contents</h2>
            <ul className="right-section-2">
              <li><a href="#Social_Media_Apps" title="Social Media Apps:">Social Media Apps</a></li>
              <li><a href="#Entertainment_Apps" title="Entertainment Apps:">Entertainment Apps</a></li>
                          <li><a href="#Music_Streaming_Apps" title="Music Streaming Apps">Music Streaming Apps</a></li>
                           <li><a href="#Gaming_Apps" title="Gaming Apps">Gaming Apps</a></li>
                          <li><a href="#E_commerce_Apps" title="E-commerce Apps">E-commerce Apps</a></li>
                          
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
