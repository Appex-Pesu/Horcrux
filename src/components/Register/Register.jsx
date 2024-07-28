import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const tracks = [
    'Generative AI and Machine Learning',
    'Blockchain / Crypto',
    'Web / App Development',
    'Cybersecurity',
    'AR / VR',
    'Open Innovation'
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    try {
      const response = await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfS_h1UJ4aocHxiMjlmY6wmT5O1O0ms8hH0rs3iX7ko-i4XMg/formResponse',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors'
        }
      );
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="contact-container">
        <h2>Registration Successful!</h2>
        <p>Thank you for registering. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <h2>Ctrl+Alt+Code</h2>
	  <p>Register Here</p>
      <form onSubmit={handleSubmit}>
        <label>
          Team Name:
          <input type="text" name="entry.1907539909" required />
        </label>
        <label>
          Member 1 Name, Sem, Srn, Email:
          <input type="text" name="entry.350592232" required />
        </label>
        <label>
          Member 2 Name, Sem, Srn, Email:
          <input type="text" name="entry.700166675" required />
        </label>
        <label>
          Member 3 Name, Sem, Srn, Email:
          <input type="text" name="entry.548548196" required />
        </label>
        <label>
          Member 4 Name, Sem, Srn, Email:
          <input type="text" name="entry.837670875" />
        </label>
        <label>
          GitHub of Leader:
          <input type="text" name="entry.1126140029" required />
        </label>
		<label>
		  Phone number of Leader:
		  <input type="text" name="entry.451885995" required />
		</label>
        <label>
          Track:
          <select name="entry.1037587301" required>
            <option value="">Select a track</option>
            {tracks.map((track, index) => (
              <option key={index} value={track}>
                {track}
              </option>
            ))}
          </select>
        </label>
        <label>
          Problem Statement:
          <input type="text" name="entry.653675328" required />
        </label>
        <label>
          Approach for the solution and Tech Stack:
          <input type="text" name="entry.1140061896" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
