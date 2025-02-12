import React from "react";
import { Link } from "react-router-dom";

export default function Consulting() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Expert Business Consulting</h1>
        <p className="text-gray-600 text-lg">
          Unlock business growth with strategic consulting tailored to your needs.
        </p>
      </div>

      {/* Service Overview */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed">
          Our consulting services are designed to help businesses scale efficiently, improve workflows, and maximize profitability.  
          We analyze your business model, identify growth opportunities, and provide **customized strategies** for success.
        </p>

        {/* Key Benefits Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Key Benefits</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>✔ **Strategic Business Planning** – Roadmaps to achieve long-term success.</li>
            <li>✔ **Market Research & Analysis** – Data-driven insights to stay competitive.</li>
            <li>✔ **Digital Transformation** – Optimizing business with cutting-edge technology.</li>
            <li>✔ **Financial & Risk Management** – Smart investments for sustainable growth.</li>
            <li>✔ **Operational Efficiency** – Streamlining processes to reduce costs.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-green-700">Get Started Today</h3>
        <p className="text-gray-600 mt-2">Schedule a free consultation with our experts and start optimizing your business.</p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Contact Us
        </button>
        <Link to={'/'}  className="ml-5 mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
      Home
    </Link>
      </div>
    </div>
  );
}
