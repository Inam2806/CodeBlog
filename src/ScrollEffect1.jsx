import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './styles/ScrollEffect.scss'; // Add the appropriate style file

const YourComponent = () => {
  const [showScrollableSection, setShowScrollableSection] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      $(function () {
        var rightSection = $('.right-section-1');
        var scrollableSection = $('.blogpost1');
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
              <li><a href="#Browser_1" title="What Is a Browser?">What Is a Browser?</a></li>
              <li><a href="#Browser_2" title="How Do Browsers Work?">How Do Browsers Work?</a></li>
              <li><a href="#Browser_3" title="Top 8 Internet Browsers in 2023">Top 8 Internet Browsers in 2023</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>  
  );
};

export default YourComponent;
