import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import './styles/Blogger.scss';
import a from './images/Article_1.jpg';
import b from './images/applogo.jpeg';
import c from './images/mobile.jpg';
import d from './images/laptop.jpg';
import t1 from './images/a.jpg';
import t2 from './images/b.jpg';
import t3 from './images/c.jpg';
import t4 from './images/d.jpg';
import t5 from './images/e.jpg';
import tech1 from './images/Techn.jpg';
import tech2 from './images/Tech_2.jpg';
import edu1 from './images/Educ.png';
import edu2 from './images/b.jpg';
import Movies1 from './images/Movies1.jpg'
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
    { image: a, title: 'Best Internet Browsers in 2023', link: '/Best-Internet-Browsers-in-2023' },
    { image: b, title: 'Best Software Trends 2023', link: '/Best-Software-Trends-2023' },
    { image: c, title: 'Best 5G Mobile under 20,000 in 2023', link: '/Best-Mobile-under-20000-in-2023' },
    { image: d, title: 'Best Gaming Laptop 2023', link: '/Best-Gaming-Laptop' },

    // Add more articles as needed
  ];
   const techArticles = [
    { image: tech1, title: 'Best AI Tool/Website used in daily life in 2023', link: '/Best-AI-Tool/Website-used-in-daily-life-in-2023' },
    { image: tech2, title: 'The Future of Quantum Computing', link: '/Blogger5' },
    // Add more technology articles as needed
  ];
    const eduArticles = [
    { image: edu1, title: 'How to download Visual Studio for C++', link: '/How-to-download-Visual-Studio-for-C++' },
    { image: edu2, title: 'The Role of Technology in Education', link: '/Blogger5' },
    // Add more education articles as needed
  ];
  const MoviesArticles = [
    { image: Movies1, title: 'Best Drama Movies', link: '/Best-Drama-Movies' },
    { image: tech2, title: 'Best Action Movies', link: '/Blogger5' },
    // Add more technology articles as needed
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
            {[t1, t2, t3, t4, t5].map((image, index) => (
              <div key={index} className="swiper-slide">
                  <a href={image} onClick={handleImageClick}>
                    <img className='imageslider' src={image} alt="" />
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
        <center><h2><strong>Recommended Articles</strong></h2></center> 
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

       <div className='technology-section '>
<center>  <h2><strong>Technology</strong></h2></center>
  <div className='article-card-container recommendations-container'>
    {techArticles.map((article, index) => (
      <div key={index} className='article-card-rec'>
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
  <center><h2><strong>Education</strong></h2></center>
  <div className='article-card-container recommendations-container'>
    {eduArticles.map((article, index) => (
      <div key={index} className='article-card-rec'>
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
        <div className='movies-section'>
           <center><h2><strong>Movies</strong></h2></center>

  <div className='article-card-container recommendations-container'>
    {MoviesArticles.map((article, index) => (
      <div key={index} className='article-card-rec'>
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

