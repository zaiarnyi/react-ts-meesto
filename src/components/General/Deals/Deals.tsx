import React from "react";
import { DealsItem } from "./DealsItem";

interface IDealsProp {}

export const Deals: React.FC<IDealsProp> = (props) => {
  return (
    <div className="page__deals deals-page">
      <div className="deals-page__container _container">
        <div className="deals-page__body">
          <div className="deals-page__items">
            <div className={"deals-page__item "}>
              <DealsItem />
            </div>
            <div className={"deals-page__item "}>
              <DealsItem />
            </div>
            <div className={"deals-page__item "}>
              <DealsItem />
            </div>
            <div className={"deals-page__item "}>
              <DealsItem />
            </div>
            <div className={"deals-page__item "}>
              <DealsItem />
            </div>
            <div className={"deals-page__item "}>
              <DealsItem />
            </div>
          </div>
          <div className="deals-page__items-label">
            <div className="label-item">
              <div className="label-item__number">03</div>
              <div className="label-item__title">Best deals</div>
            </div>
          </div>
        </div>
        <div className="deals-page__bottom">
          <div className="number-bottom">
            <span>03</span>
          </div>
        </div>
      </div>
    </div>
  );
};
