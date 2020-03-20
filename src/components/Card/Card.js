import React from "react";
import "./card.scss";
export const Card = ({ data, title, cls }) => {
  return (
    <div className="card-box">
      <p
        className={
          cls === "Infected"
            ? `title red`
            : cls === "recovered"
            ? "title green"
            : " title yellow"
        }
      >
        {title}
      </p>
      <p className="status">{data}</p>
    </div>
  );
};

