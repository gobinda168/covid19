import React from "react";
import "./home.style.scss";
import { useFetch } from "../../hooks/useFetch";
import { Card } from "../Card/Card";
export const Home = () => {
  const url = "https://corona.lmao.ninja/all";
  const globalData = useFetch(url);
  return (
    <div className="cards">
      <Card
        data={globalData ? globalData.cases : "Loading.."}
        title="Total Infected"
        cls="Infected"
      />
      <Card
        data={globalData ? globalData.recovered : "Loading.."}
        title="Total Recovered"
        cls="recovered"
      />
      <Card
        data={globalData ? globalData.deaths : "Loading.."}
        title="Total Deaths"
        cls="death"
      />
    </div>
  );
};
