// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import './Register.css';
// import { FaWhatsapp } from "react-icons/fa";

// const Register = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const tracks = [
//     'Generative AI and Machine Learning',
//     'Blockchain / Crypto',
//     'Web / App Development',
//     'Cybersecurity',
//     'AR / VR',
//     'Open Innovation'
//   ];

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
    
//     try {
//       const response = await fetch(
//         'https://docs.google.com/forms/d/e/1FAIpQLSfS_h1UJ4aocHxiMjlmY6wmT5O1O0ms8hH0rs3iX7ko-i4XMg/formResponse',
//         {
//           method: 'POST',
//           body: formData,
//           mode: 'no-cors'
//         }
//       );
      
//       setIsSubmitted(true);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   const handleBack = () => {
//     navigate('/');
//   };

//   if (isSubmitted) {
//     return (
//       <div className="contact-container">
// 	  <button 
//         onClick={handleBack}
//         className="back-button"
//       >
//         <ArrowLeft size={24} />
//       </button>
//         <h2>Registration Successful!</h2>
//         <p>Thank you for registering. We&apos;ll be in touch soon.</p>
// 		<p>Join our WhatsApp group and Stay tuned</p>
// 		<a href="https://chat.whatsapp.com/BV8uIDtAx3OEuT0DKFzNlJ" className="register-btn"><FaWhatsapp />&nbsp; Join Now</a>
//       </div>
//     );
//   }

//   return (
//     <div className="contact-container">
//       <button 
//         onClick={handleBack}
//         className="back-button"
//       >
//         <ArrowLeft size={24} />
//       </button>
//       <h2 className='heading'><span className='heading-middle'>H O R C R U X</span></h2>
//       <p>Register Your Team Here</p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Team Name:<span className='star'>*</span>
//           <input type="text" name="entry.1907539909" placeholder='Team name' required />
//         </label>
//         <label>
//           Member 1 Name, Sem, Srn, Email:<span className='star'>*</span>
//           <input type="text" name="entry.350592232" placeholder='name, sem, srn, email' required />
//         </label>
//         <label>
//           Member 2 Name, Sem, Srn, Email:<span className='star'>*</span>
//           <input type="text" name="entry.700166675" placeholder='name, sem, srn, email' required />
//         </label>
//         <label>
//           Member 3 Name, Sem, Srn, Email:<span className='star'>*</span>
//           <input type="text" name="entry.548548196" placeholder='name, sem, srn, email' required />
//         </label>
//         <label>
//           Member 4 Name, Sem, Srn, Email:
//           <input type="text" name="entry.837670875" placeholder='name, sem, srn, email' />
//         </label>
//         <label>
//           GitHub of Leader:<span className='star'>*</span>
//           <input type="text" name="entry.1126140029" placeholder='complete github url' required />
//         </label>
//         <label>
//           Phone number of Leader:<span className='star'>*</span>
//           <input type="tex t" name="entry.451885995" placeholder='phone number' required />
//         </label>
//         <label>
//           Track:<span className='star'>*</span>
//           <select name="entry.1037587301" required>
//             <option value="">Select a track</option>
//             {tracks.map((track, index) => (
//               <option key={index} value={track}>
//                 {track}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Problem Statement:<span className='star'>*</span>
//           <input type="text" name="entry.653675328" placeholder='problem Statement' required />
//         </label>
//         <label>
//           Approach for the solution and Tech Stack:<span className='star'>*</span>
//           <textarea name="entry.1140061896" placeholder='must be within 500 words' required rows={3}/>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Register.css';
import { FaWhatsapp } from "react-icons/fa";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormClosed, setIsFormClosed] = useState(true); // Add this state to manage form closure
  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate('/');
  };

  if (isSubmitted) {
    return (
      <div className="contact-container">
        <button 
          onClick={handleBack}
          className="back-button"
        >
          <ArrowLeft size={24} />
        </button>
        <h2>Registration Successful!</h2>
        <p>Thank you for registering. We&apos;ll be in touch soon.</p>
        <p>Join our WhatsApp group and Stay tuned</p>
        <a href="https://chat.whatsapp.com/BV8uIDtAx3OEuT0DKFzNlJ" className="register-btn">
          <FaWhatsapp />&nbsp; Join Now
        </a>
      </div>
    );
  }

  // if (isFormClosed) { // Render this section if form responses are closed
  //   return (
  //     <div className="contact-container">
  //       <button 
  //         onClick={handleBack}
  //         className="back-button"
  //       >
  //         <ArrowLeft size={24} />
  //       </button>
  //       <h2>Registration Temporarily Closed</h2>
  //       <p>We have temporarily stopped taking responses. Please check back later.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="contact-container">
      <button 
        onClick={handleBack}
        className="back-button"
      >
        <ArrowLeft size={24} />
      </button>
      <h2 className='heading'><span className='heading-middle'>H O R C R U X</span></h2>
      <p>Register Your Team Here</p>
      <form onSubmit={handleSubmit}>
        <label>
          Team Name:<span className='star'>*</span>
          <input type="text" name="entry.1907539909" placeholder='Team name' required />
        </label>
        <label>
          Member 1 Name, Sem, Srn, Email:<span className='star'>*</span>
          <input type="text" name="entry.350592232" placeholder='name, sem, srn, email' required />
        </label>
        <label>
          Member 2 Name, Sem, Srn, Email:<span className='star'>*</span>
          <input type="text" name="entry.700166675" placeholder='name, sem, srn, email' required />
        </label>
        <label>
          Member 3 Name, Sem, Srn, Email:<span className='star'>*</span>
          <input type="text" name="entry.548548196" placeholder='name, sem, srn, email' required />
        </label>
        <label>
          Member 4 Name, Sem, Srn, Email:
          <input type="text" name="entry.837670875" placeholder='name, sem, srn, email' />
        </label>
        <label>
          GitHub of Leader:<span className='star'>*</span>
          <input type="text" name="entry.1126140029" placeholder='complete github url' required />
        </label>
        <label>
          Phone number of Leader:<span className='star'>*</span>
          <input type="text" name="entry.451885995" placeholder='phone number' required />
        </label>
        <label>
          Track:<span className='star'>*</span>
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
          Problem Statement:<span className='star'>*</span>
          <input type="text" name="entry.653675328" placeholder='problem Statement' required />
        </label>
        <label>
          Approach for the solution and Tech Stack:<span className='star'>*</span>
          <textarea name="entry.1140061896" placeholder='must be within 500 words' required rows={3}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
