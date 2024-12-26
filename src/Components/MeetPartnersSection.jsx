"use client";
import React from 'react';

import { Card, Dropdown } from "flowbite-react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg"; // Example for additional images
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/education.jpg";
import img6 from "../assets/hello.jpeg";

export default function MeetPartnersSection() {
  const partners = [
    { name: "Michael Brown", role: "Marketing Strategist", image: img1, description: "Michael leads the marketing efforts to promote the service review platform. He develops campaigns to raise awareness, attract users, and ensure that the platform reaches its target audience. His strategies help the service review system grow and become a trusted name in the industry." },
    { name: "Bonnie Green", role: "Visual Designer", image: img2, description: "Bonnie is responsible for the visual aspects of the service review platform, ensuring the user interface is intuitive and visually appealing." },
    { name: "John Doe", role: "Lead Developer", image: img3, description: "John leads the development team, building robust and scalable back-end systems to support the review platform." },
    { name: "Sarah Smith", role: "Customer Experience Specialist", image: img4, description: "Sarah ensures a positive and seamless experience for all users, improving the usability and functionality of the platform." },
    { name: "Emily White", role: "Data Analyst", image: img5, description: "Emily analyzes data to generate insights that improve decision-making and guide the evolution of the platform." },
    { name: "David Harris", role: "Customer Support Lead", image: img6, description: "David ensures customers receive excellent support and timely solutions to their issues." }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-10">
      {partners.map((partner, index) => (
        <Card key={index} className="max-w-xs mx-auto">
          <div className="flex justify-end px-4 pt-4">
            <Dropdown inline label="">
              <Dropdown.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Edit
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Export Data
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </a>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img
              alt={`${partner.name} image`}
              height="96"
              src={partner.image}
              width="96"
              className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{partner.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{partner.role}</span>
            <p className="my-4 text-center text-sm text-gray-500 dark:text-gray-400">{partner.description}</p>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add friend
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
