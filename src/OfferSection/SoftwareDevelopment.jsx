import React from 'react'
import { Link } from 'react-router-dom'

export default function SoftwareDevelopment() {
return (
  <div className="max-w-5xl mx-auto px-6 py-12">
  {/* Header Section */}
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-green-700 mb-3">Custom Software Development</h1>
    <p className="text-gray-600 text-lg">
      Transform your business with tailor-made software solutions that drive efficiency and innovation.
    </p>
  </div>

  {/* Service Overview */}
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-green-600 mb-4">What We Offer</h2>
    <p className="text-gray-700 leading-relaxed">
      Our custom software development services are designed to meet the **unique needs** of businesses by
      **automating processes, enhancing user experiences, and optimizing performance**.  
      Whether you need a **web app, mobile solution, or enterprise software**, we ensure scalable and high-performance results.
    </p>

    {/* Key Benefits Section */}
    <div className="mt-6">
      <h3 className="text-xl font-semibold text-green-700 mb-3">Key Benefits</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>✔ **Custom Web & Mobile Apps** – Scalable solutions for modern businesses.</li>
        <li>✔ **Enterprise Software Development** – Automate workflows and increase productivity.</li>
        <li>✔ **Cloud-Based Solutions** – Secure, scalable, and efficient cloud applications.</li>
        <li>✔ **API Development & Integration** – Seamless connectivity between services.</li>
        <li>✔ **AI & Machine Learning Solutions** – Smart automation and data-driven insights.</li>
      </ul>
    </div>
  </div>

  {/* Call to Action Section */}
  <div className="mt-8 text-center">
    <h3 className="text-2xl font-semibold text-green-700">Let's Build Your Software</h3>
    <p className="text-gray-600 mt-2">Partner with us to create cutting-edge software tailored to your needs.</p>
    <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
      Contact Us
    </button>
    <Link to={'/'}  className="ml-5 mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
      Home
    </Link>
  </div>
</div>
)
}
