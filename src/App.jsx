// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Blogger from './Blogger';
import About from './about';
import Contact from './Contact';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Footer';
import Blogger1 from './blogger1'; 
import Blogger2 from './blogger2';
import Blogger3 from './blogger3';
import Blogger4 from './blogger4';
import Blogger5 from './Blogger5';
import TermsAndConditions from './TermAndCondition';
import Privacy from './Privacy';
import Education1 from './edu1';
import Movies1 from './Movies1';
import Techn1 from './Techn1';
const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Blogger />} />
                    <Route path="/Best-Internet-Browsers-in-2023" element={<Blogger1 />} />
                    <Route path="/Best-Software-Trends-2023" element={<Blogger2 />} />
                    <Route path="/Best-Mobile-under-20000-in-2023" element={<Blogger3 />} />
                    <Route path="/Best-Gaming-Laptop" element={<Blogger4 />} />
                     <Route path="/Blogger5" element={<Blogger5 />} />
                    <Route path='/How-to-download-Visual-Studio-for-C++' element={<Education1 />} />
                       <Route path='/Best-Drama-Movies' element={<Movies1 />} />
                 <Route path='/Best-AI-Tool/Website-used-in-daily-life-in-2023' element={<Techn1 />} />
                    
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/TermAndCondition" element={<TermsAndConditions />} />
                     <Route path="/Privacy" element={<Privacy />} />
                </Routes>
              
               <Footer/>
            </div>
        </Router>
    );
};

export default App;
