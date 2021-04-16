import React from "react";
import Charts from "./Charts";
import UnemploymentChart from "./UnemploymentChart";
import { useState, useEffect } from "react";

import axios from "axios";
import { API_URL } from "../config";

function Statistics() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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
      {(data && (
        <>
          <Charts data={data.education} />
          <UnemploymentChart data={data.unemployment} />
        </>
      )) || <div>{error}</div>}
    </div>
  );
}

export default Statistics;