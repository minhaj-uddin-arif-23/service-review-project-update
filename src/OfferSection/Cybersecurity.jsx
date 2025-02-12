import React from "react";
import { Link } from "react-router-dom";

export default function Cybersecurity() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Cybersecurity Services</h1>
        <p className="text-gray-600 text-lg">
          Protect your business from cyber threats with cutting-edge **security solutions** tailored for data privacy, risk management, and compliance.
        </p>
      </div>

      {/* Service Overview */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Why Cybersecurity Matters?</h2>
        <p className="text-gray-700 leading-relaxed">
          Cyber threats are evolving every day, and **your business data needs strong protection** against hacking, phishing, malware, and ransomware attacks.  
          Our **comprehensive cybersecurity solutions** ensure **data privacy, compliance, and risk mitigation** to safeguard your sensitive information.
        </p>

        {/* Key Services Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Our Cybersecurity Services</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>🔒 **Threat Detection & Prevention** – Identify and stop cyber threats before they impact your business.</li>
            <li>💻 **Network Security & Firewalls** – Protect your IT infrastructure from unauthorized access.</li>
            <li>📊 **Risk Assessment & Compliance** – Ensure compliance with industry security standards (ISO, GDPR, NIST).</li>
            <li>🛡 **Endpoint Protection** – Secure every device connected to your network.</li>
            <li>🔑 **Data Encryption & Secure Backup** – Keep sensitive business data protected from cybercriminals.</li>
            <li>👨‍💻 **Cybersecurity Awareness Training** – Educate employees on best security practices.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-green-700">Secure Your Business Today</h3>
        <p className="text-gray-600 mt-2">Stay ahead of cyber threats with our advanced security solutions.</p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Get Cybersecurity Protection
        </button>
        <Link to={'/'}  className="ml-5 mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
      Home
    </Link>
      </div>
    </div>
  );
}
