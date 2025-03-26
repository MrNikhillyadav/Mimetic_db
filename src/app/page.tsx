import React from 'react';
import { 
  Target, 
  Microscope, 
  ShieldCheck 
} from 'lucide-react';


const ResearchLandingPage = () => {
  return (
    <div className="min-h-screen rounded-t-lg  bg-white text-black flex flex-col">
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green-600 my-4 flex items-center justify-center">
            <span className="mr-2 w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
            Available Now
          </p>
          <h1 className="text-5xl font-bold mb-6">
            Let&apos;s explore breakthrough <br /> mimetic therapies, together.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Pioneering research in carbohydrate and protein mimetics for targeted therapeutic interventions in cancer, diabetes, and beyond.
          </p>

          {/* Action Buttons */}
          <div className="flex space-x-4 justify-center">
            <a 
              href="/home" 
              className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Explore Research
            </a>
            <a 
              href="/about" 
              className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition"
            >
              About Us
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="p-4 rounded-full bg-green-50 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-green-100 transition">
              <Target className="text-green-600 w-8 h-8 group-hover:scale-110 transition" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition">
              Precision Targeting
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition">
              Advanced mimetic designs for ultra-precise therapeutic interventions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="p-4 rounded-full bg-blue-50 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
              <Microscope className="text-blue-600 w-8 h-8 group-hover:scale-110 transition" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">
              Innovative Methods
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition">
              Cutting-edge research methodologies in molecular design.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
            <div className="p-4 rounded-full bg-purple-50 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition">
              <ShieldCheck className="text-purple-600 w-8 h-8 group-hover:scale-110 transition" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">
              Comprehensive Research
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition">
              Extensive studies across multiple disease domains.
            </p>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default ResearchLandingPage;