import React from "react";
import { Link } from "react-router-dom";

export default function ITSupport() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-3">IT Support Services</h1>
        <p className="text-gray-600 text-lg">
          Reliable **24/7 IT support** to keep your business operations running smoothly and securely.
        </p>
      </div>

      {/* Service Overview */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Choose Our IT Support?</h2>
        <p className="text-gray-700 leading-relaxed">
          Our expert IT support team ensures that your **business systems remain efficient, secure, and up-to-date**.  
          Whether you need **real-time troubleshooting, network management, or cybersecurity solutions**, we are here to help.
        </p>

        {/* Key Services Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Our IT Support Services</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>⚡ **24/7 Technical Support** – Instant assistance for any IT-related issues.</li>
            <li>🔧 **Hardware & Software Maintenance** – Ensure your systems are updated and functioning smoothly.</li>
            <li>🔒 **Cybersecurity Protection** – Prevent data breaches and secure your infrastructure.</li>
            <li>📡 **Network Setup & Optimization** – Improve connectivity and ensure seamless business operations.</li>
            <li>💾 **Data Backup & Recovery** – Secure your business data with our backup solutions.</li>
            <li>👨‍💻 **Remote & On-Site Support** – Flexible IT support to fit your business needs.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-green-700">Need Reliable IT Support?</h3>
        <p className="text-gray-600 mt-2">Let our experts handle your IT concerns while you focus on growing your business.</p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Get Support Now
        </button>
        <Link to={'/'}  className="ml-5 mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
      Home
    </Link>
      </div>
    </div>
  );
}
