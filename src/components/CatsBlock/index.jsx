import React from "react";
import "./index.scss";
import classNames from "classnames";
import { Badge, ContentCard, BuyButton } from "../index";

const CatsBlock = ({ obj }) => {
  const [visibleActive, setVisibleActive] = React.useState(false);
  const onEnter = () => {
    setVisibleActive(!visibleActive);
  };

  return (
    <div className="catalog__card">
      <div
        onClick={onEnter}
        className={classNames(
          "pentagon-wrapper",
          `${visibleActive ? `${obj.ClassNames}` : ""}`
        )}
      >
        <div className="pentagon">
          <div className="card">
            <ContentCard {...obj} />
            <Badge {...obj} />
          </div>
        </div>
      </div>
      <BuyButton visibleActive={visibleActive} onEnter={onEnter} {...obj} />
    </div>
  );
};

export default CatsBlock;
