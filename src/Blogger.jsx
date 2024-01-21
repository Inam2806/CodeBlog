import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import './styles/Blogger.scss';
import a from './images/Article_1.jpg';
import t1 from './images/1.jpg';
import t2 from './images/2.jpg';
import t3 from './images/3.jpg';
import t4 from './images/4.jpg';
import t5 from './images/5.jpg';
import tech1 from './images/1.jpg';
import tech2 from './images/2.jpg';
import edu1 from './images/3.jpg';
import edu2 from './images/4.jpg';
import {Link} from 'react-router-dom';
import './styles/Search.scss';




const Blogger = () => {
  const swiperContainer = useRef(null);
  const swiperInstance = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    if (swiperContainer.current) {
      swiperInstance.current = new Swiper(swiperContainer.current, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      const nextButton = document.querySelector('.custom-next-button');
      const prevButton = document.querySelector('.custom-prev-button');

      if (nextButton) {
        nextButton.addEventListener('click', () => {
          swiperInstance.current.slideNext();
        });
      }

      if (prevButton) {
        prevButton.addEventListener('click', () => {
          swiperInstance.current.slidePrev();
        });
      }
    }

    const handleResize = () => {
      // You can perform any additional logic related to resizing here if needed
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);
    window.addEventListener('popstate', handlePopstate);

    // Initial check for the current viewport width
    handleResize();

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
      }
      window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePopstate = () => {
    // Handle popstate event (e.g., refresh the page)
    window.location.reload();
  };

  const handleImageClick = (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Handle any custom behavior if needed
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

   const handleSearch = () => {
    // Combine articles from all sections
    const allArticles = [...recommendedArticles, ...techArticles, ...eduArticles];

    // Filter articles based on the search term
    const filtered = allArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);

    // Update the URL with the search term as a query parameter
    const searchTermEncoded = encodeURIComponent(searchTerm.trim());
    window.history.pushState(null, '', `/?s=${searchTermEncoded}`);
  };

  const recommendedArticles = [
    { image: a, title: 'The 8 Best Internet Browsers in 2023', link: '/Blogger1' },
    { image: a, title: 'Top Software Trends 2024', link: '/Blogger2' },
    { image: a, title: 'Article 3', link: '/Blogger3' },
    { image: a, title: 'Article 4', link: '/Blogger4' },
    { image: t1, title: 'Tech Innovations of the Decade', link: '/Blogger5' },
    { image: t2, title: 'Discovering New Frontiers in Space Exploration', link: '/Blogger6' },
    { image: t3, title: 'The Rise of Artificial Intelligence', link: '/Blogger7' },
    { image: t4, title: 'Exploring Sustainable Energy Solutions', link: '/Blogger8' },
    { image: t5, title: 'Future of Virtual Reality and Augmented Reality', link: '/Blogger9' },
    { image: t5, title: 'Future of Virtual Reality and Augmented Reality', link: '/Blogger9' },
    { image: t5, title: 'Future of Virtual Reality and Augmented Reality', link: '/Blogger9' },
    { image: t5, title: 'Future of Virtual Reality and Augmented Reality', link: '/Blogger9' },
    // Add more articles as needed
  ];
   const techArticles = [
    { image: tech1, title: 'Advancements in Artificial Intelligence', link: '/Tech1' },
    { image: tech2, title: 'The Future of Quantum Computing', link: '/Tech2' },
    // Add more technology articles as needed
  ];
    const eduArticles = [
    { image: edu1, title: 'Innovative Teaching Methods for the Digital Age', link: '/Edu1' },
    { image: edu2, title: 'The Role of Technology in Education', link: '/Edu2' },
    // Add more education articles as needed
  ];

  return (
    <div className='main_blog'>
      <div className="container_blog">
        {/* ... (rest of the component remains unchanged) */}
        <div ref={swiperContainer} className="swiper-container">
        <div className="swiper-wrapper">
            {[...recommendedArticles, ...techArticles, ...eduArticles].map((article, index) => (
              <div key={index} className="swiper-slide">
                <a href={article.image} onClick={handleImageClick}>
                  <img src={article.image} alt="" />
                </a>
              </div>
            ))}
          </div>
          <div className="swiper-button-next custom-next-button"></div>
          <div className="swiper-button-prev custom-prev-button"></div>
        </div>
      </div>
        
      
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search articles...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>


      <div className='recommended_1'>
        <center><h2>Recommended Articles</h2></center> 
        <div class='recommendations-container'>
         
          {filteredArticles.length > 0
            ? filteredArticles.map((article, index) => (
                <div key={index} class='article-card'>
                  <img src={article.image} alt={article.title} />
                  <h3>
                    <center>
                      <strong>{article.title}</strong>
                    </center>
                  </h3>
                  <Link to={article.link} onClick={scrollToTop} rel='noopener noreferrer'>
                    Read more
                  </Link>
                </div>
              ))
            : recommendedArticles.map((article, index) => (
                <div key={index} class='article-card'>
                  <img src={article.image} alt={article.title} />
                  <h3>
                    <center>
                      <strong>{article.title}</strong>
                    </center>
                  </h3>
                  <Link to={article.link} onClick={scrollToTop} rel='noopener noreferrer'>
                    Read more
                  </Link>
                </div>
              ))}
        </div>

       <div className='technology-section'>
  <h2>Technology</h2>
  <div className='article-card-container'>
    {techArticles.map((article, index) => (
      <div key={index} className='article-card'>
        <img src={article.image} alt={article.title} />
        <h3>
          <center>
            <strong>{article.title}</strong>
          </center>
        </h3>
        <Link to={article.link} onClick={scrollToTop} rel='noopener noreferrer'>
          Read more
        </Link>
      </div>
    ))}
  </div>
</div>


       <div className='education-section'>
  <h2>Education</h2>
  <div className='article-card-container'>
    {eduArticles.map((article, index) => (
      <div key={index} className='article-card'>
        <img src={article.image} alt={article.title} />
        <h3>
          <center>
            <strong>{article.title}</strong>
          </center>
        </h3>
        <Link to={article.link} onClick={scrollToTop} rel='noopener noreferrer'>
          Read more
        </Link>
      </div>
    ))}
  </div>
</div>
      </div>

    </div>
  );
};

export default Blogger;