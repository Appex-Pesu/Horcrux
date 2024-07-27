import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    srn: '',
    names: '',
    email: '',
    sem: '',
    github: '',
    track: '',
    problemStatement: '',
    description: ''
  });

  const tracks = [
    'Track 1',
    'Track 2',
    'Track 3',
    'Track 4',
    'Track 5',
    'Track 6'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2>Team Registration Form</h2>
      <form onSubmit={handleSubmit} action='https://docs.google.com/forms/d/e/1FAIpQLSfS_h1UJ4aocHxiMjlmY6wmT5O1O0ms8hH0rs3iX7ko-i4XMg/formResponse'>
        <label>
          Team Name:
          <input
            type="text"
            name="Team Name"
            value={formData.teamName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="Member 1"
            value={formData.srn}
            onChange={handleChange}
            required
          />
        </label>

		<label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="Member 2"
            value={formData.srn}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="Member 3"
            value={formData.names}
            onChange={handleChange}
            required
          />
        </label>
		<label>
          Member 1 Name, Sem, Srn, Email:
          <input
            type="text"
            name="Member 4"
            value={formData.names}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email of each:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Sem of each:
          <input
            type="text"
            name="sem"
            value={formData.sem}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          GitHub of each:
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Track:
          <select
            name="track"
            value={formData.track}
            onChange={handleChange}
            required
          >
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
          <input
            type="text"
            name="problemStatement"
            value={formData.problemStatement}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description (within 200 words) + Tech Stack:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength="200"
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

