import React, { useState, useEffect } from 'react';
import './styles/Polling.scss'; // Import the SCSS file for styling
import t1 from './images/Chrome.jpg';
import t2 from './images/firefox.jpg';
import t3 from './images/MicrosoftEdge.jpg';
import t4 from './images/Safari.jpg';
import t5 from './images/opera.jpg';
import t6 from './images/brave.jpg';
import t7 from './images/Vivaldi.jpg';
import t8 from './images/Tor.jpg.png';
import { Pie } from 'react-chartjs-2';

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { signOut, onAuthStateChanged } from 'firebase/auth';

import { auth} from './firebase';

const Polling = () => {
  const ownerEmail = 'inamulhaque952@gmail.com'; // Replace with the actual owner's email address
  const [pollResults, setPollResults] = useState(() => {
    // Retrieve poll results from local storage on component mount
    const storedResults = JSON.parse(localStorage.getItem('pollResults'));
    return storedResults || {
      Chrome: 0,
      Firefox: 0,
      Edge: 0,
      Safari: 0,
      Opera: 0,
      Brave: 0,
      Vivaldi: 0,
      Tor: 0,
    };
  });
  const [userEmail, setUserEmail] = useState('');
  const [chartVisible, setChartVisible] = useState(false);

  useEffect(() => {
    // Save poll results to local storage whenever it changes
    localStorage.setItem('pollResults', JSON.stringify(pollResults));
  }, [pollResults]);

 const handlePollButtonClick = () => {
    // Check if the user is signed in
    if (!auth.currentUser) {
      alert("Please sign in with Google before submitting the form.");
      return;
    }

    // Check if the user has already submitted the form
    const submittedUsers = JSON.parse(localStorage.getItem('submittedUsers')) || [];
    if (submittedUsers.includes(userEmail)) {
      setChartVisible(true);
      alert("You have already submitted the form. Please try again after 2 months. You can view the results below.");
      return;
    }

    // Get selected browser preference
    const selectedBrowser = document.querySelector('input[name="browserPreference"]:checked');

    // Check if the user entered a valid Gmail address


    if (selectedBrowser) {
      // Update the poll results based on user selection
      const updatedResults = { ...pollResults, [selectedBrowser.value]: pollResults[selectedBrowser.value] + 1 };
      setPollResults(updatedResults);

      // Add the user to the list of submitted users
      const updatedSubmittedUsers = [...submittedUsers, userEmail];
      localStorage.setItem('submittedUsers', JSON.stringify(updatedSubmittedUsers));

      // Show the chart after submitting the form
      setChartVisible(true);
    } else {
      alert("Please select your preferred browser before submitting.");
    }
  };
  

 const handleResetButtonClick = () => {
    // Check if the user's email matches the owner's email
    if (userEmail === ownerEmail) {
      // Reset the poll results
      setPollResults({
        Chrome: 0,
        Firefox: 0,
        Edge: 0,
        Safari: 0,
        Opera: 0,
        Brave: 0,
        Vivaldi: 0,
        Tor: 0,
      });
      // Hide the chart after resetting
      setChartVisible(false);

      // Clear the list of submitted users
      localStorage.removeItem('submittedUsers');
    } else {
      alert("You are not authorized to reset the poll. Please provide the correct Gmail address.");
    }
  };

const totalVotes = Object.values(pollResults).reduce((sum, votes) => sum + votes, 0);
const percentages = Object.values(pollResults).map(votes => ((votes / totalVotes) * 100).toFixed(2));

const chartData = {
  labels: Object.keys(pollResults),
  datasets: [
    {
      label: 'Votes',
      data: Object.values(pollResults),
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 77, 77, 0.2)',
        'rgba(255, 153, 0, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 77, 77, 1)',
        'rgba(255, 153, 0, 1)',
      ],
      borderWidth: 1,
    },
  ],
  };
 const handleGoogleSignIn = async () => {
    try {
      if (auth.currentUser) {
        await signOut(auth);
        setUserEmail('');
      } else {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);

        const currentUser = auth.currentUser;
        if (currentUser) {
          setUserEmail(currentUser.email);
        }
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail('');
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <center><h2><strong>The 8 Best Internet Browsers in 2023</strong></h2></center>
    
    <section className="polling-section">
      
      <h2>Browser Preference Poll</h2>
      <form id="browserPollForm">
        <label>
          <input type="radio" name="browserPreference" value="Chrome" />
          Google Chrome<img className='browserx' src={t1} alt=''/>
        </label>
        <label>
          <input type="radio" name="browserPreference" value="Firefox" />
          Mozilla Firefox<img className='browserx' src={t2} alt=''/>
        </label>
        <label>
          <input type="radio" name="browserPreference" value="Edge" />
          Microsoft Edge<img className='browserx' src={t3} alt=''/>
        </label>
        <label>
          <input type="radio" name="browserPreference" value="Safari" />
          Safari<img className='browserx' src={t4} alt=''/>
        </label>
        <label>
          <input type="radio" name="browserPreference" value="Opera" />
          Opera<img className='browserx' src={t5} alt=''/>
        </label>
        <label>
          <input type="radio" name="browserPreference" value="Brave" />
          Brave Browser<img className='browserx' src={t6} alt=''/>
        </label>
        <label>
          <input type="radio" name="browserPreference" value="Vivaldi" />
          Vivaldi<img className='browserx' src={t7} alt=''/>
        </label>
        <label>
          <input type="radio" name="browserPreference" value="Tor" />
          Tor Browser<img className='browserx' src={t8} alt=''/>
              </label>
        
          <button type="button" onClick={handleGoogleSignIn}>
            {userEmail ? 'Sign Out' : 'Sign in with Google'}
          </button>
       
        <button className='submtipoll' type="button" onClick={handlePollButtonClick}>
          Submit Poll
        </button>
        {userEmail === ownerEmail && (
          <button type="button" onClick={handleResetButtonClick}>
            Reset Poll
          </button>
        )}
        {chartVisible && (
  <div>
    <h3>Poll Results</h3>
    <Pie data={chartData} />
    <div className="percentage-labels">
      <div className="browser-matrix">
        {Object.keys(pollResults).map((browser, index) => (
          <p key={browser}>
            {browser}: {percentages[index]}%
          </p>
        ))}
      </div>
    </div>
  </div>
)}
      </form>
      </section>
      </div>
  );
};

export default Polling;