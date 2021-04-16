import { BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

function UnemploymentChart({ data }) {
  return (
    <div>
      <h3>Poziom bezrobocia w Polsce: </h3>
      <BarChart width={600} height={340} data={data}>
        <Bar dataKey="unemployment" fill="#82ca9d" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
      </BarChart>
    </div>
  );
}

export default UnemploymentChart;