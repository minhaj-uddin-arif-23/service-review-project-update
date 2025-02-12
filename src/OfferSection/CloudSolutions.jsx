import React from "react";
import { Link } from "react-router-dom";

export default function CloudSolutions() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Cloud Solutions</h1>
        <p className="text-gray-600 text-lg">
          Elevate your business with **scalable, secure, and cost-effective cloud solutions** tailored to meet your operational needs.
        </p>
      </div>

      {/* Service Overview */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Choose Cloud Solutions?</h2>
        <p className="text-gray-700 leading-relaxed">
          Cloud computing enables businesses to **scale effortlessly, reduce IT costs, and improve security** while maintaining seamless access to data and applications.
          Whether you're a **startup, enterprise, or growing business**, our **cloud solutions** provide **flexibility and enhanced performance**.
        </p>

        {/* Key Services Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Our Cloud Services</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>☁️ **Cloud Migration** – Seamlessly transition to cloud platforms like AWS, Azure, or Google Cloud.</li>
            <li>🔐 **Cloud Security & Compliance** – Ensure data protection and regulatory compliance.</li>
            <li>⚡ **Cloud Infrastructure Management** – Optimize performance and cost efficiency.</li>
            <li>📊 **Big Data & Analytics** – Leverage cloud-powered insights and AI-driven solutions.</li>
            <li>🔄 **Backup & Disaster Recovery** – Minimize downtime and ensure business continuity.</li>
            <li>🖥️ **SaaS, PaaS, and IaaS Solutions** – Custom cloud solutions for different business needs.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-green-700">Ready to Move to the Cloud?</h3>
        <p className="text-gray-600 mt-2">Embrace the future with **scalable, secure, and cost-efficient** cloud solutions.</p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Get a Free Consultation
        </button>
        <Link to={'/'}  className="ml-5 mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
      Home
    </Link>
      </div>
    </div>
  );
}
