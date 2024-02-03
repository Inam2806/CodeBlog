import React from 'react';
import 'swiper/swiper-bundle.css';
import b3_1 from './images/b3_1.jpg';
import b3_2 from './images/b3_2.jpg';
import b3_3 from './images/b3_2.jpg';
import './styles/Blogger.scss';
import './styles/edu1.scss';
import ReactPlayer from 'react-player';

  

const edu1 = () => { 


  return (
  <div className='main_blog'>
          <section className="blogpost2 scrollable-section">
             
              <div className='article_p'>
             
                  <div id='Vscode'>

                       
      
    <h1><strong>How to setup C++ in Visual Studio Code</strong></h1>
    <h3>1) Download Mingw</h3>
    <ul>
              <li><h5>Download mingw from SourceForge.net  <a href='https://sourceforge.net/projects/mingw/files/Installer/' target='_ blank'>SourceForge.net</a> </h5></li>
              <img className='setup1'  src={b3_1} alt=''/>
              <li><h5>Open the mingw file click on install</h5></li>
              <img className='setup2'  src={b3_2} alt=''/>
              <li><h5>Don't do any change and continue</h5></li>
              <img className='setup3' src={b3_3} alt='' />
              <li><h5><strong>Continue</strong> Process should installing all the package of mingw</h5></li>
              <li><h5> <strong>Continue</strong></h5></li>
              <li><h5> install all the package of mingw installation manager click on package thenright click  <strong> Mark for installation</strong> </h5></li>
              <li><h5>click on <strong> installation</strong> in menu. <strong>Apply changes.</strong></h5></li>
              <li><h5>click on <strong>Apply</strong></h5></li>
              <li><h5><strong>close</strong></h5></li>


              
            </ul>
            <h3>2 Download Vscode</h3>
                      <ul>
                          <li><h5>Download Visual Studio Code <a href='https://code.visualstudio.com/' target='_ blank'>https://code.visualstudio.com/</a></h5> </li>
                          <li><h5><strong>Download for window</strong></h5></li>
                          <li><h5>Open Vscode file</h5> </li>
                      </ul>
                      <h3>Add mingw bin folder in the environment variable</h3>
                      <div className="player-wrapper">
                          <ReactPlayer
  className="react-player"
  url="https://youtu.be/NGDn-4kmFD4"
  controls={true}
  width="100%"
                height="400px"
                max-height="500px"
/>
                      </div>





   
</div>
  </div>
</section>
    </div>
    
      
  );
};

export default edu1;
