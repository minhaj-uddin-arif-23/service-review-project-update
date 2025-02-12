import React from "react";
import { Link } from "react-router-dom";

export default function DigitalMarketing() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Digital Marketing Services</h1>
        <p className="text-gray-600 text-lg">
          Unlock your business potential with **data-driven digital marketing strategies** to boost traffic, engagement, and revenue.
        </p>
      </div>

      {/* Service Overview */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed">
          Our **comprehensive digital marketing services** are designed to help businesses **increase visibility, generate leads, and grow revenue**.
          Whether you're a **startup, small business, or enterprise**, we create **tailored strategies** to meet your goals.
        </p>

        {/* Key Services Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Our Core Services</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>📈 **Search Engine Optimization (SEO)** – Improve rankings on Google & Bing.</li>
            <li>🎯 **Pay-Per-Click (PPC) Advertising** – Run high-converting Google & Social Ads.</li>
            <li>📝 **Content Marketing** – Create engaging blog posts, videos, and infographics.</li>
            <li>📧 **Email Marketing** – Drive conversions with effective email campaigns.</li>
            <li>📊 **Social Media Marketing (SMM)** – Grow your brand across Facebook, Instagram, and LinkedIn.</li>
            <li>🛒 **E-commerce Marketing** – Boost online store sales with targeted strategies.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-green-700">Start Growing Your Business Today</h3>
        <p className="text-gray-600 mt-2">Leverage our expertise to **increase your online presence and drive more sales**.</p>
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
