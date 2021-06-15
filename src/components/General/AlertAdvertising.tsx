import React, { useState } from "react";

interface IAlertAdvertisingProp {
  toggleDelivery: (prev: boolean) => void;
  delivery: boolean;
}

export const AlertAdvertising: React.FC<IAlertAdvertisingProp> = (props) => {
  const onToggleHandler = () => {
    props.toggleDelivery(false);
  };
  return (
    <>
      {props.delivery && (
        <div
          className={props.delivery ? "free-delivery show" : "free-delivery"}
        >
          <div className="free-delivery__text">free delivery</div>
          <button
            className="free-delivery__btn"
            onClick={onToggleHandler}
          ></button>
        </div>
      )}
    </>
  );
};
