'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send('service_0zqifmo', 'template_y22vs43', formData, 'lG3AmMgXExhdJmOID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Let us know.
        </p>
        <form onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="reply_to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
            <input
              type="email"
              id="reply_to"
              name="reply_to"
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              onChange={handleInputChange}
              className="shadow-sm bg-gray-50 text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-white bg-accent rounded-lg bg-primary-700"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
