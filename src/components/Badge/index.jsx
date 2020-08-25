import React from "react";
import "./index.scss";

const Badge = ({ size, category }) => {
  return (
    <div className="badge">
      <p className="badge__size">{size}</p>
      <p className="badge__category">{category}</p>
    </div>
  );
};

export default Badge;
