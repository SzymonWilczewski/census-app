import "./Offices.css";
import data from "./Offices.json";

const Offices = () => (
  <div className="Offices">
    {data.map((office) => (
      <div className="Office">
        <h4>{office.name}</h4>
        <p>{office.address}</p>
        <a href={`mailto:${office.email}`} className="Email">
          {office.email}
        </a>
        <p>{office.businessHours}</p>
      </div>
    ))}
  </div>
);

export default Offices;
