import React from "react";
// import "./home.style.scss";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "../Card/Card";
export const India = () => {
  const url = "https://corona.lmao.ninja/countries/india";
  const indiaData = useFetch(url);
  return (
    <div>
      <h1 className="title">India Details</h1>
      <div className="cards">
        <Card
          data={indiaData ? indiaData.cases : "Loading.."}
          title="Total Infected"
          cls="Infected"
        />
        <Card
          data={indiaData ? indiaData.recovered : "Loading.."}
          title="Total Recovered"
          cls="recovered"
        />
        <Card
          data={indiaData ? indiaData.deaths : "Loading.."}
          title="Total Deaths"
          cls="death"
        />
      </div>
    </div>
  );
};
