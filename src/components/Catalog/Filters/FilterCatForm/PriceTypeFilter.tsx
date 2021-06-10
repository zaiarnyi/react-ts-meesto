import React from "react";
import Nouislider from "nouislider-react";

interface IPriceTypeFilterProp {
  currency: string;
  priceStart: number[];
  priceCustom: number[];
  setPriceCustom: (array: Array<number>) => void;
}

export const PriceTypeFilter: React.FC<IPriceTypeFilterProp> = React.memo(
  (props) => {
    return (
      <Nouislider
        range={{ min: props.priceStart[0], max: props.priceStart[1] }}
        start={[props.priceCustom[0], props.priceCustom[1]]}
        tooltips
        connect
        onChange={(values, handle, unencodedValues, tap, positions) => {
          let start = +unencodedValues[0].toFixed();
          let end = +unencodedValues[1].toFixed();
          props.setPriceCustom([start, end]);
        }}
        format={{
          to: (value) => {
            return `${props.currency} ${value.toFixed()}`;
          },
          from: (value: string) => {
            return Number(value);
          },
        }}
      />
    );
  }
);
