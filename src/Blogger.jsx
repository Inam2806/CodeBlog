import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import LazyLoad from 'react-lazyload';
import './styles/Blogger.scss';
import a from './images/Article_1.jpg';
import t from './images/t.jpg';
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
    // Filter articles based on the search term
    const filtered = recommendedArticles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);

    // Update the URL with the search term as a query parameter
    const searchTermEncoded = encodeURIComponent(searchTerm.trim());
    window.history.pushState(null, '', `/?s=${searchTermEncoded}`);
  };
 const recommendedArticles = [
    // Your recommended articles data
    { image: a, title: 'The 8 Best Internet Browsers in 2023', link: '/Blogger1' },
    { image: a, title: 'Article 2', link: '/Blogger2' },
    { image: a, title: 'Article 3', link: '/Blogger3' },
    { image: a, title: 'Article 4', link: '/Blogger4' },
  ];


  return (
    <div className='main_blog'>
      <div className="container_blog">
        <header className='heading'>
          <center>
            <div className="main_h">Welcome to My Blog</div>
            <h3 className="main_h2">Explore Interesting Topics and Insights!</h3>
          </center>
        </header>

        <div ref={swiperContainer} className="swiper-container">
          <div className="swiper-wrapper">
            {[t, t, t, t, t, t].map((image, index) => (
              <div key={index} className="swiper-slide">
                <LazyLoad height={200} offset={100}>
                  <a href={image} onClick={handleImageClick}>
                    <img src={image} alt="" />
                  </a>
                </LazyLoad>
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

      <div class='recommended_1'>
        <center>
          <h2>Recommended Articles</h2>
        </center>
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
      </div>
    </div>
  );
};

export default Blogger;