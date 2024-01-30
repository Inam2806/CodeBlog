import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './styles/Tech1ScrollEffect.scss'; // Add the appropriate style file

const YourComponent = () => {
  const [showScrollableSection, setShowScrollableSection] = useState(true);

   useEffect(() => {
    if (window.innerWidth > 1100) {
      $(function () {
        var rightSection = $('.Tech1right-section-1');
        var scrollableSection = $('.Tech1');
        var typesetIoSection = $('.Tech1table'); // Add this line to get the typeset-io section
        const speedFactor = 0.05; // Adjust this value to control the speed

        // Apply initial styles when the document is ready
        rightSection.css({
          // Add your initial styles here
        });

        // Use .on() to handle the scroll event
        $(window).on('scroll', function () {
          var scroll = $(window).scrollTop();
          var sectionOffset = scrollableSection.offset().top;
          var sectionHeight = typesetIoSection.offset().top - sectionOffset;

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
        <div className="Tech1right-section-1">
          <div className="rectangle">
            <h2>Table of Contents</h2>
            <ul className="right-section-2">
              <li><a href="#OpenAI_Chat_Platform" title="OpenAI Chat Platform">OpenAI Chat Platform</a></li>
              <li><a href="#QR_Code_AI_Art_Generator" title="QR Code AI Art Generator">QR Code AI Art Generator</a></li>
                          <li><a href="#Music_Generation" title="Music Streaming Apps">Music Generation</a></li>
                           <li><a href="#Adobe_Firefly" title="Gaming Apps">Adobe Firefly</a></li>
                          <li><a href="#Adobe_Podcast" title="E-commerce Apps">Adobe Podcast</a></li>
                                      <li><a href="#Framers_AI_Features" title="OpenAI Chat Platform">Framer's AI Features</a></li>
              <li><a href="#Codeformer_by_Replicate" title="QR Code AI Art Generator">Codeformer by Replicate</a></li>
                          <li><a href="#Voicify Voice Experience" title="Music Streaming Apps">Voicify - Voice Experience</a></li>
                           <li><a href="#Perplexity" title="Gaming Apps">Perplexity.ai</a></li>
                          <li><a href="#Typeset.io" title="E-commerce Apps">Typeset.io</a></li>
                          
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
