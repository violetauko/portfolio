"use client"

import React, { useEffect, useState } from 'react'

const ProgressBar = ({percentage }) => {
  const [count, setCount] = useState(0);
  const radius = 50; 
  const strokeWidth = 10; 
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Animate percentage on page load
  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / percentage));

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= percentage) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="flex items-center justify-center">
      <svg width="120" height="120" className="block">
  <circle
    cx="60"
    cy="60"
    r={radius}
    fill="transparent"
    stroke="#d3d3d3"
    strokeWidth={strokeWidth}
  />
  <circle
    cx="60"
    cy="60"
    r={radius}
    fill="transparent"
    stroke="#38bdf8"
    strokeWidth={strokeWidth}
    strokeDasharray={circumference}
    strokeDashoffset={offset}
    strokeLinecap="round"
    style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
  />
</svg>

      <div className="absolute text-center">
        <p className="text-xl font-bold">{count}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
