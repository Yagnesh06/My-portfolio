import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Prepare the data to be sent
    const formData = {
      name,
      email,
      message
    };

    try {
      // Send the data to the backend
      const response = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Message sent successfully!');
        // Optionally, clear the form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle error response
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='mt-20'>
        <h1 className='text-slate-100 font-bold text-3xl text-center max-sm:text-2xl'>Contact Me</h1>
      </div>

      <div className='flex justify-center mt-8 max-[400px]:mt-0'>
        <div className='flex flex-col gap-5 w-3/6 max-lg:w-3/4 max-[400px]:w-full items-center mt-10 border-2 border-white p-5 rounded-xl'>
          <input
            className='w-full p-3 rounded-md text-2xl max-[400px]:text-base bg-transparent border-b-2 text-white outline-0 font-semibold'
            type="text"
            placeholder='Enter Your Full name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='w-full p-3 rounded-md text-2xl max-[400px]:text-base bg-transparent border-b-2 text-white outline-0 font-semibold'
            type="email"
            placeholder='Enter Your E-mail'
            value={email}
            
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows={4}
            className='w-full p-3 rounded-md text-2xl max-[400px]:text-base bg-transparent border-b-2 text-white outline-0 font-semibold'
            placeholder='Write Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className='w-2/5 self-start p-3 rounded-lg text-2xl max-[400px]:text-base font-semibold text-white border-solid border-2 border-white transition-colors duration-300 hover:bg-slate-50 hover:text-black'
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
