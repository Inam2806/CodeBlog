import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './styles/ScrollEffect.scss'; // Add the appropriate style file

const YourComponent = () => {
  const [showScrollableSection, setShowScrollableSection] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 1100) {
      $(function () {
        var rightSection = $('.right-section-1');
        var scrollableSection = $('.blogpost3');
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
        <div className="right-section-1 ">
          <div className="rectangle">
            <h2>Table of Contents</h2>
            <ul className="right-section-2">
                  <li><a  style={{fontFamily:'Times New Roman'}} href="#LAVA Agni 2" title="LAVA Agni 2">LAVA Agni 2</a></li>
                  <li><a style={{fontFamily:'Times New Roman'}} href="#POCO X5 Pro" title="POCO X5 Pro">POCO X5 Pro</a></li>
                  <li><a style={{fontFamily:'Times New Roman'}} href="#Realme Narzo 60" title="Realme Narzo 60">Realme Narzo 60</a></li>
                  <li><a style={{fontFamily:'Times New Roman'}} href="#Samsung Galaxy M34" title="Samsung Galaxy M34">Samsung Galaxy M34</a></li>
                  <li><a style={{fontFamily:'Times New Roman'}} href="#Realme Narzo 60x" title="Realme Narzo 60x">Realme Narzo 60x</a></li>
                  <li><a style={{fontFamily:'Times New Roman'}} href="#OnePlus Nord CE 3 Lite" title="OnePlus Nord CE 3 Lite">OnePlus Nord CE 3 Lite</a></li>
                
          <li><a className='main_blog3' href="#comparison_table" title="Comparison Table">Comparison Table</a></li>
                          
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
