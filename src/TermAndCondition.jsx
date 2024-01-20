// TermsAndConditions.jsx

import React from 'react';
import './styles/TermsAndConditions.scss';
import { Link } from 'react-router-dom';
const TermsAndConditions = () => {
      const scrollToTop = () => {
  window.scrollTo(0, 0);
  };
  return (
      <div className="terms-and-conditions">
          <div className='boxtac' >
      <center><h1>Welcome to CodeBlog! Terms and Conditions</h1></center>

      <section>
        <h2><strong>1. Introduction</strong></h2>
        <h4>
          Welcome to our blogger website, CodeBlog. If you continue to browse and use this website, you are
          agreeing to comply with and be bound by the following terms and conditions of use,
          which together with our privacy policy govern CodeBlog's relationship with
          you in relation to this website.
        </h4>
      </section>

      <section>
        <h2><strong>2. Definitions</strong></h2>
        <h4>
          The terms "we," "us," and "our" refer to CodeBlog. The term "you" refers to
          the person who logs on to this website and is compliant with the Company’s terms and conditions.
          “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. 
          “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. 
          All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process
          of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s
          needs in respect of the provision of the Company’s stated services, in accordance with and subject to,
          prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural,
          capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same.
        </h4>
      </section>

      <section>
        <h2><strong>3. Use of the Website</strong></h2>
        <h4>
          The use of this website is subject to the following terms of use:
          <ul>
            <li>The content of the pages of this website is for your general information and use only.</li>
            <li>It is subject to change without notice.</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy,
                timeliness, performance, completeness, or suitability of the information and materials found
                or offered on this website for any particular purpose.</li>
            <li>Your use of any information or materials on this website is entirely at your own risk, for which
                we shall not be liable.</li>
          </ul>
        </h4>
      </section>



      <section>
        <h2><strong>11. Changes to Terms</strong></h2>
        <h4>
          We reserve the right to update or change our terms and conditions at any time without notice.
          Please review this page periodically for changes.
        </h4>
      </section>

      <section>
        <h2><strong>12. Contact Information</strong></h2>
        <h4>
          If you have any questions about our Terms and Conditions, please contact us at <Link to={`/contact`}  onClick={scrollToTop} rel="noopener noreferrer" className='contacttac' >
    Contact
  </Link>.
        </h4>
      </section>
          </div>
          </div>
  );
};

export default TermsAndConditions;
