import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { isAuth, getUser } from "../utils";
import { API_URL } from "../config";
import axios from "axios";

export default function Panel() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const history = useHistory();

  function deleteSurvey(id) {
    axios.delete(`${API_URL}/survey/${id}`).then(() => {
      setData(data.filter((survey) => survey.id !== +id));
    });
  }

  useEffect(() => {
    // change to protected routes in future
    if (!isAuth() || getUser().role === "pollster") {
      history.push("/");
    } else {
      axios
        .get(`${API_URL}/survey`)
        .then(({ data }) => {
          setData(data.surveys);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, []);

  return (
    <div>
      <h1> Panel admina </h1>
      {error ? (
        <div> {error} </div>
      ) : (
        <div>
          {(data &&
            data.map((survey) => {
              return (
                <div key={survey.id}>
                  {Object.keys(survey).map((i, index) => {
                    return (
                      <div key={index}>
                        {i}: {survey[i]}
                      </div>
                    );
                  })}
                  <button onClick={() => deleteSurvey(survey.id)}>
                    delete
                  </button>
                  <br /> <br />
                </div>
              );
            })) || <div> Fetching data </div>}
        </div>
      )}
    </div>
  );
}
