import React from "react";
import "./ccard.scss";
export const CCard = ({ data }) => {
  const { country, cases, todayCases, deaths, todayDeaths, recovered } = data;
  return (
    <div className="card">
      <div className="title">{country}</div>
      <div className="infected">Infected: {cases}</div>
      <div className="recovered">Recovered: {recovered} </div>
      <div className="deaths">Deaths: {deaths} </div>
      <div className="todaycases">Today's Cases: {todayCases} </div>
      <div className="todaydeaths">Today's Death: {todayDeaths} </div>
    </div>
  );
};
