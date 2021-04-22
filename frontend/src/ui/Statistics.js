import React from "react";
import Charts from "./Charts";
import UnemploymentChart from "./UnemploymentChart";
import { useState, useEffect } from "react";
import "./Filterbar.css"

import axios from "axios";
import { API_URL } from "../config";
 
function Statistics() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [voivodeship, setVoivodeship] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/survey/statistics`)
      .then(({ data }) => {
        setData(data.statistics);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <div class="Filterbar">
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Cała Polska</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship("pomorskie")}>Pomorskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship("mazowieckie")}>Mazowieckie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship("warminsko-mazurskie")}>Warminsko-mazurskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Dolnośląskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Kujawsko-pomorskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Lubelskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Lubuskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Łódzkie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Małopolskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Opolskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Podkarpackie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Podlaskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Śląskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Świętokrzyskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Wielkopolskie</button></div>
        <div><button class="FilterButton" onClick={() => setVoivodeship(null)}>Zachodniopomorskie</button></div>
      </div>
      {(data && (
        <>
          <Charts data={data.education} voivodeship={voivodeship}/>
          <UnemploymentChart data={data.unemployment} voivodeship={voivodeship} />
        </>
      )) || <div>{error}</div>}
    </div>
  );
}

export default Statistics;