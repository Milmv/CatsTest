import React from "react";
import "./index.scss";

const ContentCard = ({ topTitle, title, subTitle, types, present }) => {
  return (
    <div className="content">
      <p className="content__topTitle">{topTitle}</p>
      <h3 className="content__title">{title}</h3>
      <p className="content__subTitle">{subTitle}</p>
      <p className="content__types">{types}</p>
      <p className="content__present">{present}</p>
    </div>
  );
};

export default ContentCard;
