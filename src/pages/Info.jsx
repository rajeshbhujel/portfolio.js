import React from 'react';

const Info = () => {
  return (
    <section id="info" className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img src="https://via.placeholder.com/400x30" alt="Rajesh Bhujel" className="rounded-lg shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-900">About Me</h2>
          <p className="text-gray-700 text-lg">
            I'm Rajesh Bhujel, a passionate developer and BIT student. I enjoy coding in React, Django, and Python.
            I also have strong networking knowledge (CCNA) and love creative challenges, swimming, and hiking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
