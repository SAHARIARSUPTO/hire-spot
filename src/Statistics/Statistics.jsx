import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Statistics.css';

const data = [
  { id: 1, assignmentNumber: 1, marks: 57 },
  { id: 2, assignmentNumber: 2, marks: 59 },
  { id: 3, assignmentNumber: 3, marks: 56 },
  { id: 4, assignmentNumber: 4, marks: 32 },
  { id: 5, assignmentNumber: 5, marks: 51 },
  { id: 6, assignmentNumber: 6, marks: 0 },
  { id: 7, assignmentNumber: 7, marks: 59 },
];

const BarChartComponent = () => {
  return (
    <div className='chart-parent'>
        <h1>A Barchart by taking my last 7 assignments Number</h1>
        <p>We can see here, y-axis contains assignments marks and x-axis contains assignment Numbers.</p>
    <BarChart width={700} height={500} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="assignmentNumber" label={null} />
      <YAxis label={null} />
      <Tooltip />
      <Legend />
      <Bar dataKey="marks" fill="mediumspringgreen" />
    </BarChart></div>
  );
};

export default BarChartComponent;
