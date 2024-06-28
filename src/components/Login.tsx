import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Header */}
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 bg-blue-700 rounded-full"></div>
                <div className="h-6 w-6 bg-blue-700 rounded-full"></div>
                <div className="h-6 w-6 bg-blue-700 rounded-full"></div>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">IT Service Desk Africa</span>
            </div>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-900">Home</a>
              <a href="#" className="text-gray-900">About Us</a>
              <a href="#" className="text-gray-900">Service</a>
              <a href="#" className="text-gray-900">Partner with Us</a>
              <a href="#" className="text-gray-900">Blogs</a>
              <a href="#" className="text-gray-900">Download Drivers</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Hello Dear, You are welcome<br/>
            Pick up from where you left off
          </h1>
          <p className="text-center text-gray-600 mb-4">For IT Technician Only</p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username/ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="text-right mt-2">
            <a href="#" className="text-blue-600">Forgotten Password?</a>
          </div>
          <button
            type="button"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Log in
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white shadow-md mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <div className="h-40 bg-gray-300 flex items-center justify-center text-2xl font-bold">img</div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
