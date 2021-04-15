import React from 'react'
import './PieChart.css';
import { PieChart, Pie, Cell, Legend} from 'recharts';

function Charts({data}) {
    const maz = data.filter(d => d["voivodeship"] === "mazowieckie")
    const war = data.filter(d => d["voivodeship"] === "warminsko-mazurskie")
    const pom = data.filter(d => d["voivodeship"] === "pomorskie")
        
    const higherPoland = data.filter(d => d["education"] === "higher")
    const secondaryPoland = data.filter(d => d["education"] === "secondary")
    const primaryPoland = data.filter(d => d["education"] === "primary")
    const polandEduData = [
        { name: 'Wyższe', value: higherPoland.length },
        { name: 'Średnie', value: secondaryPoland.length },
        { name: 'Podstawowe', value: primaryPoland.length },
      ];

    const higherMaz = maz.filter(d => d["education"] === "higher")
    const secondaryMaz = maz.filter(d => d["education"] === "secondary")
    const primaryMaz = maz.filter(d => d["education"] === "primary")
    const mazEduData = [
        { name: 'Wyższe', value: higherMaz.length },
        { name: 'Średnie', value: secondaryMaz.length },
        { name: 'Podstawowe', value: primaryMaz.length },
    ];

    const higherPom = pom.filter(d => d["education"] === "higher")
    const secondaryPom = pom.filter(d => d["education"] === "secondary")
    const primaryPom = pom.filter(d => d["education"] === "primary")
    const pomEduData = [
        { name: 'Wyższe', value: higherPom.length },
        { name: 'Średnie', value: secondaryPom.length },
        { name: 'Podstawowe', value: primaryPom.length },
    ];
    const higherWar = war.filter(d => d["education"] === "higher")
    const secondaryWar = war.filter(d => d["education"] === "secondary")
    const primaryWar = war.filter(d => d["education"] === "primary")
    const warEduData = [
        { name: 'Wyższe', value: higherWar.length },
        { name: 'Średnie', value: secondaryWar.length },
        { name: 'Podstawowe', value: primaryWar.length },
    ];
      
    const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
    return (
        <div className="chartContainer">
        <h3>Struktura wykształcenie ludności Polski:</h3>
        <PieChart width={400} height={260} >
          <Pie
            data={polandEduData}
            cx={120}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
           <Legend/>
           </PieChart>
           <div className="pie-titles">
           <h3>Mazowieckie</h3>
           <h3>Pomorskie</h3>
           <h3>Warmińsko-mazurskie</h3>
           </div>
           <PieChart width={900} height={300} >
          <Pie
            data={mazEduData}
            cx={120}
            cy={90}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie
            data={pomEduData}
            cx={400}
            cy={90}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie
            data={warEduData}
            cx={680}
            cy={90}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    )
}

export default Charts
