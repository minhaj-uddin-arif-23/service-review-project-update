import React from 'react';
import CountUp from 'react-countup';

export default function Countup() {
  const stats = [
    { label: 'Total Reviews', end: 12345 },
    { label: 'Services', end: 789 },
    { label: 'Visits', end: 45678 },
  ];

  return (
    <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '30px', fontSize: '2rem', color: '#4CAF50' }}>
        Statistics
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              width: '150px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>
              <CountUp end={stat.end} duration={4.5} separator="," />
            </h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
