import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add your logic to send the data to a server, etc.
  };

  return (
    <Layout>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="font-semibold text-xl">
          Feel free to reach out to us. We'll get back to you as soon as
          possible.
        </p>
      </div>
      <div className="flex items-center my-10 md:my-0 justify-center h-screen">
        <form
          className="w-full max-w-xl bg-white  lg:my-0 mx-10 md:mx-0 px-6 py-10 shadow-2xl rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block font-semibold  mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block font-semibold  mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="mt-6">
            <label className="block font-semibold  mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              rows="4"
              placeholder="Type your message here"
            ></textarea>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-10 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
