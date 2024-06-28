import React from 'react'

const App: React.FC = function () {

  const features = [
    {
      title: "Transform Your Device Management Experience",
      description: "Unlock a new era of device management with our user-friendly DHMS...",
    },
    {
      title: "Experience a new level of efficiency with our inventory management solution",
      description: "Simplify your device inventory management with our DHMS...",
    },
  ];


  const plans = [
    { name: 'Bronze' },
    { name: 'Gold' },
    { name: 'Platinum' },
  ];

  return (
    <>
      <header className="text-center py-10 bg-gray-50">
        <h1 className="text-4xl font-bold">IT Service Desk Africa</h1>
        <h2 className="text-xl mt-4">Welcome to the future of device management</h2>
        <div className="flex justify-center mt-6">
          <div className="bg-gray-200 w-48 h-24 flex items-center justify-center">Image</div>
        </div>
        <div className="mt-6 space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Admin login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Staff login</button>
        </div>
      </header>
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="mt-6 space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row md:space-x-6">
              <div className="bg-gray-200 w-full md:w-1/2 h-48 flex items-center justify-center">Image</div>
              <div className="mt-4 md:mt-0 md:w-1/2">
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">DHMS Subscription Plans</h2>
        <div className="flex flex-col md:flex-row justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded w-full md:w-1/3 text-center">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-10 bg-blue-600 text-white text-center">
        <p>Welcome to the future of device management</p>
        <p className="mt-2">
          Introducing Device Health Management Service (DHMS), a comprehensive solution for efficient device management...
        </p>
        <div className="mt-6">
          <button className="bg-white text-blue-600 px-4 py-2 rounded">Learn more</button>
        </div>
        <p className="mt-6 text-xs">
          Privacy Policy: At IT Service Desk Africa, we value your privacy and are committed to protecting your personal information...
        </p>
      </footer>
    </>
  )
}

export default App
