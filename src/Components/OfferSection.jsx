import React from 'react';
import { FaBriefcase, FaLaptopCode, FaBullhorn, FaCloud, FaHeadset, FaShieldAlt } from 'react-icons/fa';

export default function OfferSection() {
  return (
    <div className="text-center py-12 bg-gray-50 my-10">
      <h2 className="text-3xl font-semibold text-green-600 mb-6">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {/* Service 1: Consulting */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-4xl text-green-500 mb-4">
            < FaBriefcase /> {/* Icon */}
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Consulting</h3>
          <p className="text-gray-500 mb-4">Our expert consultants provide strategic advice to help your business grow, scale, and thrive in a competitive market.</p>
          <button className="btn btn-primary bg-green-400 text-white">Learn More</button>
        </div>

        {/* Service 2: Custom Software Development */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-4xl text-green-500 mb-4">
            <FaLaptopCode /> {/* Icon */}
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Custom Software Development</h3>
          <p className="text-gray-500 mb-4">We specialize in building tailored software solutions that meet the unique needs of your business, streamlining operations and enhancing user experience.</p>
          <button className="btn btn-primary bg-green-400 text-white">Learn More</button>
        </div>

        {/* Service 3: Digital Marketing */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-4xl text-green-500 mb-4">
            <FaBullhorn /> {/* Icon */}
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Digital Marketing</h3>
          <p className="text-gray-500 mb-4">Boost your online presence and reach your target audience with our expert digital marketing strategies, including SEO, PPC, and content marketing.</p>
          <button className="btn btn-primary bg-green-400 text-white">Learn More</button>
        </div>

        {/* Service 4: Cloud Solutions */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-4xl text-green-500 mb-4">
            <FaCloud /> {/* Icon */}
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Cloud Solutions</h3>
          <p className="text-gray-500 mb-4">Harness the power of the cloud with scalable, secure, and cost-effective solutions tailored to your business needs, ensuring flexibility and performance.</p>
          <button className="btn btn-primary bg-green-400 text-white">Learn More</button>
        </div>

        {/* Service 5: IT Support */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-4xl text-green-500 mb-4">
            <FaHeadset /> {/* Icon */}
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">IT Support</h3>
          <p className="text-gray-500 mb-4">Our dedicated IT support team provides 24/7 assistance to keep your systems running smoothly and solve any technical issues quickly.</p>
          <button className="btn btn-primary bg-green-400 text-white">Learn More</button>
        </div>

        {/* Service 6: Cybersecurity */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <div className="text-4xl text-green-500 mb-4">
            <FaShieldAlt /> {/* Icon */}
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Cybersecurity</h3>
          <p className="text-gray-500 mb-4">Protect your business from cyber threats with our comprehensive cybersecurity solutions, ensuring data privacy and safeguarding sensitive information.</p>
          <button className="btn btn-primary bg-green-400 text-white">Learn More</button>
        </div>

      </div>
    </div>
  );
}
