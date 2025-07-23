import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-blue-100 to-cyan-100 py-20 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact Me</h2>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
          <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
