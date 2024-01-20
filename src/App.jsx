// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Blogger from './Blogger';
import About from './about';
import Contact from './Contact';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Footer';
import Blogger1 from './Blogger1'; 
import Blogger2 from './Blogger2';
import Blogger3 from './Blogger3';
import Blogger4 from './Blogger4';
import TermsAndConditions from './TermAndCondition';
import Privacy from './Privacy';

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Blogger />} />
                    <Route path="/Blogger1" element={<Blogger1 />} />
                    <Route path="/Blogger2" element={<Blogger2 />} />
                    <Route path="/Blogger3" element={<Blogger3 />} />
                    <Route path="/Blogger4" element={<Blogger4 />} />
                    
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
