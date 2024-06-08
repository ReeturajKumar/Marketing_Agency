import React, { useState, useEffect } from 'react';
import '../CSS/Admin.css';
import API_URL from '../../config/config';

export default function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token is missing!');
      return;
    }

    fetch(`${API_URL}/contact/contacts`, { 
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        setMessages(data.data);
      } else {
        console.error('Error fetching contact messages:', data.error);
      }
    })
    .catch(error => console.error('Error fetching contact messages:', error));
  }, []); 

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
