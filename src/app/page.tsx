import React from 'react';

const ResearchLandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      <main className="flex-grow container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-green-500 my-4 flex items-center">
            <span className="mr-2 w-3 h-3 bg-green-500 rounded-full"></span>
            Available Now
          </p>
          <h1 className="text-6xl font-bold mb-6">
            Let&apos;s explore breakthrough <br /> mimetic therapies, together.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Pioneering research in carbohydrate and protein mimetics for targeted therapeutic interventions in cancer, diabetes, and beyond.
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="/home" 
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Explore Research
            </a>
            <a 
              href="/about" 
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition flex items-center"
            >
              About Us
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="text-xl font-bold mb-2">Precision Targeting</h3>
            <p className="text-gray-300">
              Advanced mimetic designs for ultra-precise therapeutic interventions.
            </p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 01-4.176-3.97L9.854 7.91a2 2 0 00-.173-.362 2 2 0 00-2.53-.823L3.622 8.189A2 2 0 002 10.007c.002.381.125.745.348 1.04 5.869 7.445 14.346 10.658 16.05 11.149a2 2 0 002.296-2.81l-2.266-4.536z" />
            </svg>
            <h3 className="text-xl font-bold mb-2">Innovative Methods</h3>
            <p className="text-gray-300">
              Cutting-edge research methodologies in molecular design.
            </p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-xl font-bold mb-2">Comprehensive Research</h3>
            <p className="text-gray-300">
              Extensive studies across multiple disease domains.
            </p>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-gray-400">
        © 2025 MimeticResearch • All Rights Reserved
      </footer>
    </div>
  );
};

export default ResearchLandingPage;