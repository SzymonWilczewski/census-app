import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

function UnemploymentChart({data}) {
    const maz = data.filter(d => d["voivodeship"] === "mazowieckie")
    const war = data.filter(d => d["voivodeship"] === "warminsko-mazurskie")
    const pom = data.filter(d => d["voivodeship"] === "pomorskie")

    const polandUnemployment = data.filter(d => d["professionalActivity"] === "unemployed");
    const mazUnemployment = maz.filter(d => d["professionalActivity"] === "unemployed");
    const warUnemployment = war.filter(d => d["professionalActivity"] === "unemployed");
    const pomUnemployment = pom.filter(d => d["professionalActivity"] === "unemployed");

    const unemployedData = [
        {
            name: "Polska",
            unemployment: (polandUnemployment.length/data.length)*100
        },
        {
            name: "Mazowieckie",
            unemployment: (mazUnemployment.length/maz.length)*100
        },
        {
            name: "Pomorskie",
            unemployment: (pomUnemployment.length/pom.length)*100
        },
        {
            name: "Warmińsko-mazurskie",
            unemployment: (warUnemployment.length/war.length)*100
        },
    ]
    return (
        <div>
           <h3>Poziom bezrobocia w Polsce: </h3>
          <BarChart width={600} height={340} data={unemployedData}>
            <Bar dataKey="unemployment" fill="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend /> 
          </BarChart>  
        </div>
    )
}

export default UnemploymentChart
