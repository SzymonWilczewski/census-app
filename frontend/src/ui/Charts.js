import React from "react";
import "./PieChart.css";
import { PieChart, Pie, Cell, Legend } from "recharts";

function Charts({ data, voivodeship = null}) {
  const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="chartContainer">
      {voivodeship == null &&
      <React.Fragment>
      <div>
        <h3>Struktura wykształcenie ludności Polski:</h3>
        {voivodeship == null && 
          <h3>Średnia w Polsce:</h3>
        }
        <PieChart width={400} height={260}>
          <Pie
            data={data["poland"]}
            cx={120}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data["poland"].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
      <div>
        <div className="pie-titles">
          <h3>Mazowieckie</h3>
          <h3>Pomorskie</h3>
          <h3>Warminsko-mazurskie</h3>
        </div>
        <PieChart width={900} height={300}>
          <Pie
            data={data["mazowieckie"]}
            cx={120}
            cy={90}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data["mazowieckie"].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data["pomorskie"]}
            cx={400}
            cy={90}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data["pomorskie"].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data["warminsko-mazurskie"]}
            cx={680}
            cy={90}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data["warminsko-mazurskie"].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      </React.Fragment>}
      {voivodeship != null &&
      <div className="voivodeshipChart">
        <h3>Struktura wykształcenie ludności Polski:</h3>
        <h3>{voivodeship.charAt(0).toUpperCase() + voivodeship.slice(1)}</h3>
      <PieChart width={400} height={260}>
      <Pie
      data={data[voivodeship]}
      cx={120}
      cy={100}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {data[voivodeship].map((entry, index) => (
        <Cell
          key={`cell-${index}`}
          fill={COLORS[index % COLORS.length]}
        />
      ))}
    </Pie>
    <Legend />
    </PieChart>
    </div>
      }
    </div>
  );
}


export default Charts;
