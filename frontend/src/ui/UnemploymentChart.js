import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

function UnemploymentChart({ data, voivodeship }) {
  return (
    <div>
      {voivodeship == null &&
      <React.Fragment>
      <h3>Poziom bezrobocia w Polsce: </h3>
      <BarChart width={600} height={340} data={data}>
        <Bar name="bezrobocie" dataKey="unemployment" fill="#82ca9d" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
      </BarChart>
      </React.Fragment>}
    </div>
  );
}

export default UnemploymentChart;