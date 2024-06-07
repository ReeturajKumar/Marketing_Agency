import React, { useState, useEffect } from 'react';
import '../CSS/Admin.css';

export default function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE3NzI2MjA0LCJleHAiOjE3MTc3Mjk4MDR9.dulTtdql477-316ljKxawUpYTf2nrIdxYmtVbUuBJLo'; 
    fetch('http://localhost:5000/api/contact/contacts', {
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