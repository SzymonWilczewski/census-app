import "./News.css";
import data from "./News.json";

const News = () => (
  <div className="News">
    {data.map((article) => (
      <div className="Article">
        <h4>{article.title}</h4>
        <p>{article.description}</p>
      </div>
    ))}
  </div>
);

export default News;
