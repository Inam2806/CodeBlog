import React from 'react';

import './styles/Privacy.scss';
const Privacy = () => {
  return (
    <div className="privacycontainer">
      <div className="containerblogP">
        <header className='heading'>
              <center><h1>Welcome to CodeBlog! Privacy Policy</h1></center>
        </header>

        <section className="privacy-content">
          <h2>
            Welcome to our Privacy Policy page. Here, we outline the types of personal information
            that is received and collected by our blog and how it is used.
          </h2>

          <h2>
            <strong>Log Files</strong>: Like many other websites, we make use of log files.
            The information inside the log files includes internet protocol (IP) addresses,
            type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages,
            and the number of clicks to analyze trends, administer the site, track user's movement
            around the site, and gather demographic information.
          </h2>

          <h2>
            <strong>Cookies and Web Beacons</strong>: We use cookies to store information about visitors'
            preferences, to record user-specific information on which pages the site visitor accesses or
            visits, and to personalize or customize our web page content based upon visitors' browser type
            or other information that the visitor sends via their browser.
          </h2>

       
        </section>
      </div>
    </div>
  );
};

export default Privacy;
