import React, { useState } from 'react';

const HomePage = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-orange text-right py-2 md:py-2">
      
  <div className="md:text-4xl font-extrabold text-left leading-tight animate__animated animate__fadeIn animate__delay-1s flex items-center justify-between">
    <span>Welcome to Our Social Media App</span>
    <a
      href="/signup"
      className="bg-yellow-500 text-blue-800 hover:bg-yellow-600 font-semibold py-1 px-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ml-4"
    >
      Get Started
    </a>
  </div>

  <div className="md:text-2xl text-left leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
    Connect, share, and discover with ease.
  </div>

</section>

      {/* Features Section */}
      <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold py-4 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
            {/* Feature 1 */}
            <div
              className={`bg-white shadow-lg rounded-lg p-8 text-center transition-transform duration-300 transform ${hoveredFeature === 1 ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setHoveredFeature(1)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-700 text-base mb-4">
                Build your network, follow friends, and stay updated with their latest activities.
              </p>
            </div>
            {/* Feature 2 */}
            <div
              className={`bg-white shadow-lg rounded-lg p-8 text-center transition-transform duration-300 transform ${hoveredFeature === 2 ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setHoveredFeature(2)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Share</h3>
              <p className="text-gray-700 text-base mb-4">
                Share your thoughts, photos, and updates with your friends and followers.
              </p>
            </div>
            {/* Feature 3 */}
            <div
              className={`bg-white shadow-lg rounded-lg p-8 text-center transition-transform duration-300 transform ${hoveredFeature === 3 ? 'scale-105' : 'scale-100'}`}
              onMouseEnter={() => setHoveredFeature(3)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Discover</h3>
              <p className="text-gray-700 text-base mb-4">
                Discover new content, follow new people, and engage with interesting posts.
              </p>
            </div>
          </div>
        
      </section>

     {/* Call to Action Section */}
<section className=" bg-green-700 text-black text-center py-14 md:py-4 flex flex-col items-center">
  <div className="text-4xl md:text-6xl font-bold mb-4">Ready to join us?</div>
  
  <p className="text-lg md:text-xl mb-6">Sign up today and start connecting with the world.</p>
  
  <a
    href="/signup"
    className="bg-yellow-500 text-blue-800 hover:bg-yellow-600 font-semibold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
  >
    Sign Up
  </a>
</section>


    </div>
  );
};

export default HomePage;
