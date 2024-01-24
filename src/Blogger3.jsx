import React, { useState } from 'react';

import 'swiper/swiper-bundle.css';

import './styles/Blogger.scss';
import Amazon from './images/amazon.png';

import './styles/Blogger3.scss';
  

  

const Blogger3 = () => {
   const [hovered, setHovered] = useState(false);
  return (
        <div className='main_blog'>
      <section className="blogpost2 scrollable-section">
        
        <div className='article_p'>
        <center><h2><strong>Best Mobile under Rs 20,000</strong></h2></center>  
          <div className="smartphone-card">
            <h2>LAVA Agni 2</h2>
        <div className="image-container" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img
        className={`Amazon ${hovered ? 'hovered' : ''}`}
        src={Amazon}
        alt=''
      />
      {hovered && (
        <a
          className="amazon-link"
          href="https://www.amazon.in/Lava-Viridian-Dimensity-Processor-Superfast/dp/B0C467KFNM"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '10px', marginRight: '20px' }}
        >
       <h7 className='linkamazon'>→  https://www.amazon.in/Lava-Viridian-Dimensity-Processor-Superfast/dp/B0C467KFNM</h7>
        </a>
      )}
    </div>
      <ul>
        <li><strong>Debut:</strong> Released on May 24, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 164.2 x 74.7 x 8.8 mm, weighing 210 g, featuring dual Nano-SIM capability.</li>
        <li><strong>Display:</strong> A vibrant 6.78 inches AMOLED screen with 120Hz refresh rate and HDR10+.</li>
        <li><strong>Performance:</strong> Mediatek Dimensity 7050, 256GB internal storage, and 8GB RAM.</li>
        <li><strong>Camera:</strong> Quad-camera setup with a powerful 50 MP main sensor, and a 16 MP front camera.</li>
        <li><strong>Battery:</strong> A robust 4700 mAh non-removable battery with 66W wired charging.</li>
      </ul>
      </div>
      <div className="smartphone-card">
      <h2>POCO X5 Pro</h2>
      <ul>
        <li><strong>Debut:</strong> Released on February 7, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 162.9 x 76 x 7.9 mm, weighing 181 g, featuring Gorilla Glass 5, and IP53 protection.</li>
        <li><strong>Display:</strong> A stunning 6.67 inches AMOLED screen with 120Hz refresh rate, Dolby Vision, and HDR10+.</li>
        <li><strong>Performance:</strong> Snapdragon 778G 5G, with options for 128GB/6GB RAM or 256GB/8GB RAM.</li>
        <li><strong>Camera:</strong> Triple-camera setup with a high-resolution 108 MP main sensor, and a 16 MP front camera.</li>
        <li><strong>Battery:</strong> A substantial 5000 mAh non-removable battery with 67W wired charging and 5W reverse wired charging.</li>
      </ul>
      </div>
        <div className="smartphone-card">
      <h2>Realme Narzo 60</h2>
      <ul> 
        <li><strong>Debut:</strong>Released on  July 15, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 159.8 x 72.9 x 7.9 mm, weighing 182 g, with glass front (Gorilla Glass 5) and options for eco leather or plastic back.</li>
        <li><strong>Display:</strong> 6.43 inches Super AMOLED with a smooth 90Hz refresh rate.</li>
        <li><strong>Performance:</strong> MediaTek Dimensity 6020, available in 128GB/8GB RAM or 256GB/8GB RAM configurations.</li>
        <li><strong>Camera:</strong> Dual-camera setup with a 64 MP main sensor, and a 16 MP front camera.</li>
        <li><strong>Battery:</strong> A reliable 5000 mAh non-removable battery with 33W wired charging.</li>
      </ul>
      </div>
       <div className="smartphone-card">
      <h2>Samsung Galaxy M34</h2>
      <ul>
        <li><strong>Debut:</strong> Released on July 15, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 161.7 x 77.2 x 8.8 mm, weighing 208 g, featuring Hybrid Dual SIM, and Corning Gorilla Glass 5 protection.</li>
        <li><strong>Display:</strong> 6.5 inches Super AMOLED with a swift 120Hz refresh rate.</li>
        <li><strong>Performance:</strong> Powered by Exynos 1280, available in 128GB/6GB RAM or 128GB/8GB RAM configurations.</li>
        <li><strong>Camera:</strong> Triple-camera setup with a 50 MP main sensor, and a 13 MP front camera.</li>
        <li><strong>Battery:</strong> A robust 6000 mAh non-removable battery with 25W wired charging.</li>
      </ul>
      </div>
      <div className="smartphone-card">
      <h2>Realme Narzo 60x</h2>
      <ul>
       
        <li><strong>Debut:</strong>Released on September 12, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 165.7 x 76 x 7.9 mm, weighing 190 g, with a dual SIM setup.</li>
        <li><strong>Display:</strong> 6.72 inches IPS LCD with a responsive 120Hz refresh rate.</li>
        <li><strong>Performance:</strong> MediaTek Dimensity 6100+, available in 128GB/4GB RAM or 128GB/6GB RAM configurations.</li>
        <li><strong>Camera:</strong> Dual-camera setup with a 50 MP main sensor, and an 8 MP front camera.</li>
        <li><strong>Battery:</strong> A sturdy 5000 mAh non-removable battery with 33W wired charging.</li>
      </ul>
          </div>
          <div className="smartphone-card">
      <h2>OnePlus Nord CE 3 Lite</h2>
      <ul>
      
        <li><strong>Debut:</strong> Released on  April 11, 2023.</li>
        <li><strong>Design:</strong> Dimensions of 165.5 x 76 x 8.3 mm , weighing 195 g, with a dual SIM setup.</li>
        <li><strong>Display:</strong> 6.72 inches IPS LCD with a responsive 120Hz refresh rate.</li>
        <li><strong>Performance:</strong>snapdragon 695, available in 128GB/8GB RAM or 256GB/8GB RAM configurations.</li>
        <li><strong>Camera:</strong> 108 MP main sensor,2MP micro,2MP depth and an 16 MP front camera.</li>
        <li><strong>Battery:</strong> A sturdy 5000 mAh non-removable battery with 33W wired charging.</li>
      </ul>
          </div>  
          
      <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>LAVA Agni 2</th>
            <th>POCO X5 Pro</th>
            <th>Realme Narzo 60</th>
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
            <td>Elegant, 182g</td>
            <td>Dimensions, 208g</td>
                  <td>Dual SIM, 190g</td>
                  <td>Dual SIM, 195g</td>
          </tr>
          <tr>
            <td>Display</td>
            <td>6.78" AMOLED, 120Hz</td>
            <td>6.67" AMOLED, 120Hz</td>
            <td>6.43" Super AMOLED, 90Hz</td>
            <td>6.5" Super AMOLED, 120Hz</td>
                  <td>6.72" IPS LCD, 120Hz</td>
                   <td>6.72" IPS LCD, 120Hz</td>
          </tr>
          <tr>
            <td>Performance</td>
            <td>Dimensity 7050</td>
            <td>Snapdragon 778G</td>
            <td>Dimensity 6020</td>
            <td>Exynos 1280</td>
                  <td>Dimensity 6100+</td>
                   <td>Snapdragon 695</td>
          </tr>
          <tr>
            <td>Storage/RAM Options</td>
            <td>256GB/8GB RAM</td>
            <td>128GB/6GB or 256GB/8GB</td>
            <td>128GB/8GB or 256GB/8GB</td>
            <td>128GB/6GB or 128GB/8GB</td>
                  <td>128GB/4GB or 128GB/6GB</td>
                  <td>128GB/8GB or 256GB/8GB</td>
          </tr>
          <tr>
            <td>Main Camera Resolution</td>
            <td>50 MP Quad</td>
            <td>108 MP Triple</td>
            <td>64 MP Dual</td>
            <td>50 MP Triple</td>
                  <td>50 MP Dual</td>
                   <td>108 MP Dual</td>
          </tr>
          <tr>
            <td>Front Camera Resolution</td>
            <td>16 MP</td>
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
            <td>5000 mAh</td>
            <td>6000 mAh</td>
                  <td>5000 mAh</td>
                  <td>5000 mAh</td>
          </tr>
          <tr>
            <td>Wired Charging</td>
            <td>66W</td>
            <td>67W</td>
            <td>33W</td>
            <td>25W</td>
                  <td>33W</td>
                  <td>67W</td>
                  
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
