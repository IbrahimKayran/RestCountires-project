import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
//import { filters } from "react-bootstrap-table2-filter/lib/src/filter";
function App() {
  const [veri, setVeri] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((res) => setVeri(res.data));
  });

  return (
    <div className="App">
      <div className="container">
        {" "}
        <div className="row">
          <div className="col-sm-6">
            <h3 className=".text-primary">General Search</h3>
            <input
              type="search"
              className="search form-control form-control input-group input-group-sm mb-3"
            />
          </div>
          <div className="col-sm-6">
            <h3>Capital Search</h3>
            <input
              type="search"
              className="search form-control form-control input-group input-group-sm mb-3"
              id="capital1"
            />
          </div>
        </div>
      </div>

      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Flag</th>
          </tr>
        </thead>

        {veri.map((country) => {
          return (
            <tbody className="table-striped">
              <tr>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td>{country.region}</td>
                <td>
                  <img
                    src={country.flag}
                    alt={country.name}
                    style={{ width: "100px" }}
                  />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
