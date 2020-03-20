import React from "react";
// import "./home.style.scss";
import { useFetch } from "../../hooks/useFetch";
import { CCard } from "../Card/CCard";
export const Country = () => {
  const url = "https://corona.lmao.ninja/countries";
  const countryData = useFetch(url);

  return (
    <div className="cards">
      {countryData
        ? countryData.map(country => <CCard data={country} />)
        : "Loading.."}
    </div>
  );
};
