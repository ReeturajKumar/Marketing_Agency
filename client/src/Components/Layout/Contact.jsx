import React from 'react';
import '../CSS/contact.css';
import img2 from '../../assets/2.png';

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData.message);
        alert('Contact form submitted successfully');
        event.target.reset();
      } else {
        console.error('Error submitting contact form:', responseData.error);
        alert('Failed to submit contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <section id='contact' className='contact'>
      <div className="container">
        <div className="contact_wrapper">
          <div className="contact_content">
            <img src={img2} alt="Contact Us" />
          </div>
          <div className="contact_form">
            <form onSubmit={handleSubmit}>
              <div>
                <input id="name" name="name" type='text' placeholder='Name' required />
              </div>
              <div>
                <input id="email" name="email" type='email' placeholder='Email' required />
              </div>
              <div>
                <textarea id="message" name="message" placeholder='Message' required />
              </div>
              <button type="submit" className="secondary_btn sub">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
