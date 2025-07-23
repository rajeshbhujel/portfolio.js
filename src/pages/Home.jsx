import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100 pt-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-900">Hi, I'm Rajesh Bhujel</h2>
        <p className="text-lg text-gray-700 mt-4">Developer | Tech Enthusiast | BIT Student</p>
        <a href="#projects" className="inline-block mt-6 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">See My Work</a>
      </div>
    </section>
  );
};

export default Home;
