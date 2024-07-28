import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const tracks = [
    'Track 1',
    'Track 2',
    'Track 3',
    'Track 4',
    'Track 5',
    'Track 6'
  ];

  return (
    <div className="contact-container">
      <h2>Team Registration Form</h2>
      <form method='POST' action='https://docs.google.com/forms/d/e/1FAIpQLSfS_h1UJ4aocHxiMjlmY6wmT5O1O0ms8hH0rs3iX7ko-i4XMg/formResponse'>
        <label>
          Team Name:
          <input
            type="text"
            name="entry.1907539909"
            required
          />
        </label>

        <label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="entry.350592232"
            required
          />
        </label>

		<label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="entry.700166675"
			required
          />
        </label>

        <label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="entry.548548196"
            required
          />
        </label>
		<label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="entry.837670875"
            required
          />
        </label>
        <label>
          GitHub of Leader:
          <input
            type="text"
            name="entry.1126140029"
            required
          />
        </label>

        /*<label>
          Track:
          <select
            name="entry.1037587301"
            required
          >
            <option value="">Select a track</option>
            {tracks.map((track, index) => (
              <option key={index} value={track}>
                {track}
              </option>
            ))}
          </select>
        </label>*/

		<label>
          Track:
          <input
            type="text"
            name="entry.1037587301"
            required
          />
        </label>
        <label>
          Problem Statement:
          <input
            type="text"
            name="entry.653675328"
            required
          />
        </label>
		<label>
          Approach for the solution and Tech Stack:
          <input
            type="text"
            name="entry.1140061896"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

