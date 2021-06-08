import React from "react";

interface IPriceTypeFilterProp {}

export const PriceTypeFilter: React.FC<IPriceTypeFilterProp> = React.memo(
  (props) => {
    return (
      <div className="active-fliter__item">
        <div className="active-fliter__title">Price</div>
        <div className="active-fliter__body active-fliter__body_price">
          <div className="active-fliter__slider"></div>
        </div>
      </div>
    );
  }
);
