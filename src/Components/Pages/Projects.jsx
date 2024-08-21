import React, { useEffect, useState } from 'react';

function Projects() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')  // Make sure this URL matches your backend server URL
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p className='text-white font-semibold'>{message}</p>
    </div>
  );
}

export default Projects;