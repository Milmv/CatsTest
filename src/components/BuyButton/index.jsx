import React from "react";
import classNames from "classnames";
import "./index.scss";

const BuyButton = ({
  visibleActive,
  onEnter,
  ClassNames,
  buttonText,
  selected,
}) => {
  return (
    <div
      className={classNames(
        "buyButton",
        `${visibleActive ? `${ClassNames}` : ""}`
      )}
      onClick={onEnter}
    >
      {visibleActive ? (
        selected.buttonText
      ) : (
        <div>
          {buttonText}
          <span>купи.</span>
        </div>
      )}
    </div>
  );
};

export default BuyButton;
