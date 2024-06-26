import React, { useState, useEffect } from 'react';
import '../CSS/Admin.css';

export default function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token is missing!');
      return;
    }

    fetch('https://marketing-agency-5br7.onrender.com/api/contact/contacts', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setMessages(data.data);
      } else {
        console.error('Error fetching contact messages:', data.error);
      }
    })
    .catch(error => console.error('Error fetching contact messages:', error));
}, []); // Only run once when the component mounts

  return (
    <div>
    <h1 className='head'>Contact Messages</h1>
    <div className="card-container">
      {messages && messages.map((message, index) => (
        <div key={index} className="card">
          <p>Name: {message.name}</p>
          <p>Email: {message.email}</p>
          <p>Message: {message.message}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
