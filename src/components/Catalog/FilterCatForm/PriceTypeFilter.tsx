import React from "react";
import Nouislider from "nouislider-react";

interface IPriceTypeFilterProp {
  max: number;
}

export const PriceTypeFilter: React.FC<IPriceTypeFilterProp> = React.memo(
  (props) => {
    return (
      <Nouislider
        range={{ min: 0, max: props.max }}
        start={[0, props.max]}
        tooltips
        animate
        connect
        // onChange={}
      />
    );
  }
);
