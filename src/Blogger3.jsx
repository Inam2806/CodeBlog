import React from 'react';

import 'swiper/swiper-bundle.css';

import './styles/Blogger.scss';

import './styles/Blogger3.scss';
import ScrollEffect3 from './ScrollEffect3';

  

const Blogger3 = () => {
  const [enableScrollEffect] = React.useState(true);
  return (
        <div className='main_blog'>
      <section className="blogpost3 scrollable-section">
         {enableScrollEffect && <ScrollEffect3 targetSection=".blogpost3" />}
        <div className='article_p'>
           <div className="scrollable-section_blog_1" >
        
        <h2>Table of Content </h2>
        <ul >
              <li><a className='main_blog3' href="#Best 5G Mobile under Rs 20,000" title="Best 5G Mobile under Rs 20,000">Best 5G Mobile under Rs 20,000</a>
                <ul>
                  <li><a className='mainblog31' href="#LAVA Agni 2" title="LAVA Agni 2">LAVA Agni 2</a></li>
                  <li><a className='mainblog31' href="#POCO X5 Pro" title="POCO X5 Pro">POCO X5 Pro</a></li>
                  <li><a className='mainblog31' href="#Realme Narzo 60" title="Realme Narzo 60">Realme Narzo 60</a></li>
                  <li><a className='mainblog31' href="#Samsung Galaxy M34" title="Samsung Galaxy M34">Samsung Galaxy M34</a></li>
                  <li><a className='mainblog31' href="#Realme Narzo 60x" title="Realme Narzo 60x">Realme Narzo 60x</a></li>
                  <li><a className='mainblog31' href="#OnePlus Nord CE 3 Lite" title="OnePlus Nord CE 3 Lite">OnePlus Nord CE 3 Lite</a></li>
                </ul>
              </li>
          <li><a className='main_blog3' href="#comparison_table" title="Comparison Table">Comparison Table</a></li>
        </ul>
      </div>
        <center><h2 id='Best 5G Mobile under Rs 20,000'><strong>Best 5G Mobile under Rs 20,000</strong></h2></center>  
          <div id='LAVA Agni 2'  className="smartphone-card">
            <h2>LAVA Agni 2</h2>
        
      <ul>
        <li><strong>Debut:</strong> Released on May 24, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 164.2 x 74.7 x 8.8 mm, weighing 210 g, featuring dual Nano-SIM capability.</li>
        <li><strong>Display:</strong> A vibrant 6.78 inches AMOLED screen with 120Hz refresh rate and HDR10+.</li>
        <li><strong>Performance:</strong> Mediatek Dimensity 7050, 256GB internal storage, and 8GB RAM.</li>
        <li><strong>Camera:</strong> Quad-camera setup with a powerful 50 MP main sensor, and a 16 MP front camera.</li>
        <li><strong>Battery:</strong> A robust 4700 mAh non-removable battery with 66W wired charging.</li>
        <li><a className='amazon-link' href='https://amzn.to/42cQVbT' alt="" target="_blank" rel="noopener noreferrer">Visit Amazon</a></li>
      </ul>
      </div>
      <div id='POCO X5 Pro' className="smartphone-card">
            <h2>POCO X5 Pro</h2>  
      <ul>
        <li><strong>Debut:</strong> Released on February 7, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 162.9 x 76 x 7.9 mm, weighing 181 g, featuring Gorilla Glass 5, and IP53 protection.</li>
        <li><strong>Display:</strong> A stunning 6.67 inches AMOLED screen with 120Hz refresh rate, Dolby Vision, and HDR10+.</li>
        <li><strong>Performance:</strong> Snapdragon 778G 5G, with options for 128GB/6GB RAM or 256GB/8GB RAM.</li>
        <li><strong>Camera:</strong> Triple-camera setup with a high-resolution 108 MP main sensor, and a 16 MP front camera.</li>
              <li><strong>Battery:</strong> A substantial 5000 mAh non-removable battery with 67W wired charging and 5W reverse wired charging.</li>
              <li><a className='amazon-link' href='https://amzn.to/3vPy1f4' alt="" target="_blank" rel="noopener noreferrer">Visit Amazon</a></li>
      </ul>
      </div>
        
       <div id='Samsung Galaxy M34' className="smartphone-card">
            <h2>Samsung Galaxy M34</h2>
        
      <ul>
        <li><strong>Debut:</strong> Released on July 15, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 161.7 x 77.2 x 8.8 mm, weighing 208 g, featuring Hybrid Dual SIM, and Corning Gorilla Glass 5 protection.</li>
        <li><strong>Display:</strong> 6.5 inches Super AMOLED with a swift 120Hz refresh rate.</li>
        <li><strong>Performance:</strong> Powered by Exynos 1280, available in 128GB/6GB RAM or 128GB/8GB RAM configurations.</li>
        <li><strong>Camera:</strong> Triple-camera setup with a 50 MP main sensor, and a 13 MP front camera.</li>
              <li><strong>Battery:</strong> A robust 6000 mAh non-removable battery with 25W wired charging.</li>
              <li><a className='amazon-link' href='https://amzn.to/3ujOiIF' alt="" target="_blank" rel="noopener noreferrer">Visit Amazon</a></li>
      </ul>
      </div>
      <div id='Realme Narzo 60x' className="smartphone-card">
            <h2>Realme Narzo 60x</h2>
           
      <ul>
       
        <li><strong>Debut:</strong>Released on September 12, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 165.7 x 76 x 7.9 mm, weighing 190 g, with a dual SIM setup.</li>
        <li><strong>Display:</strong> 6.72 inches IPS LCD with a responsive 120Hz refresh rate.</li>
        <li><strong>Performance:</strong> MediaTek Dimensity 6100+, available in 128GB/4GB RAM or 128GB/6GB RAM configurations.</li>
        <li><strong>Camera:</strong> Dual-camera setup with a 50 MP main sensor, and an 8 MP front camera.</li>
              <li><strong>Battery:</strong> A sturdy 5000 mAh non-removable battery with 33W wired charging.</li>
              <li><a className='amazon-link' href='https://amzn.to/42hB5gj' alt="" target="_blank" rel="noopener noreferrer">Visit Amazon</a></li>
      </ul>
          </div>
          <div id='OnePlus Nord CE 3 Lite' className="smartphone-card">
            <h2>OnePlus Nord CE 3 Lite</h2>
           
      <ul>
      
        <li><strong>Debut:</strong> Released on  April 11, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 165.5 x 76 x 8.3 mm , weighing 195 g, with a dual SIM setup.</li>
        <li><strong>Display:</strong> 6.72 inches IPS LCD with a responsive 120Hz refresh rate.</li>
        <li><strong>Performance:</strong>snapdragon 695, available in 128GB/8GB RAM or 256GB/8GB RAM configurations.</li>
        <li><strong>Camera:</strong> 108 MP main sensor,2MP micro,2MP depth and an 16 MP front camera.</li>
              <li><strong>Battery:</strong> A sturdy 5000 mAh non-removable battery with 33W wired charging.</li>
              <li><a className='amazon-link' href='https://amzn.to/3HFI2xS' alt="" target="_blank" rel="noopener noreferrer">Visit Amazon</a></li>
      </ul>
          </div>  
          
      <div id='comparison_table' className="comparison-table">
      <table className="comparsionmobile">
        <thead>
          <tr>
            <th>Feature</th>
            <th>LAVA Agni 2</th>
            <th>POCO X5 Pro</th>
            
            <th>Samsung Galaxy M34</th>
                  <th>Realme Narzo 60x</th>
                  <th>OnePlus Nord CE 3 Lite</th>
          </tr>
        </thead>
        <tbody>
         
         
          <tr>
            <td>Design</td>
            <td>Compact, 210g</td>
            <td>Sleek, 181g</td>
            <td>Dimensions, 208g</td>
                  <td>Dual SIM, 190g</td>
                  <td>Dual SIM, 195g</td>
          </tr>
          <tr>
            <td>Display</td>
            <td>6.78" AMOLED, 120Hz</td>
            <td>6.67" AMOLED, 120Hz</td>
        
            <td>6.5" Super AMOLED, 120Hz</td>
                  <td>6.72" IPS LCD, 120Hz</td>
                   <td>6.72" IPS LCD, 120Hz</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td>Dimensity 7050</td>
            <td>Snapdragon 778G</td>
          
            <td>Exynos 1280</td>
                  <td>Dimensity 6100+</td>
                   <td>Snapdragon 695</td>
          </tr>
          <tr>
            <td>Storage/RAM Options</td>
            <td>256GB/8GB RAM</td>
            <td>128GB/6GB or 256GB/8GB</td>
          
            <td>128GB/6GB or 128GB/8GB</td>
                  <td>128GB/4GB or 128GB/6GB</td>
                  <td>128GB/8GB or 256GB/8GB</td>
          </tr>
          <tr>
            <td>Main Camera Resolution</td>
            <td>50 MP Quad</td>
            <td>108 MP Triple</td>
           
            <td>50 MP Triple</td>
                  <td>50 MP Dual</td>
                   <td>108 MP Dual</td>
          </tr>
          <tr>
            <td>Front Camera Resolution</td>
            <td>16 MP</td>
            <td>16 MP</td>
         
            <td>13 MP</td>
                  <td>8 MP</td>
                  <td>16 MP</td>
          </tr>
          <tr>
            <td>Battery Capacity</td>
            <td>4700 mAh</td>
            <td>5000 mAh</td>
           
            <td>6000 mAh</td>
                  <td>5000 mAh</td>
                  <td>5000 mAh</td>
          </tr>
          <tr>
            <td>Wired Charging</td>
            <td>66W</td>
            <td>67W</td>
         
            <td>25W</td>
                  <td>33W</td>
                  <td>67W</td>
                  
                </tr>
                 <tr>
            <td>Price</td>
            <td>₹19,999</td>
            <td>₹22,999</td>
         
            <td>₹19,499</td>
                  <td>₹12,499</td>
                  <td>₹19,999</td>
                  
          </tr>
        </tbody>
      </table>
          </div>
          </div>
        </section>
    </div>
    
      
  );
};

export default Blogger3;
