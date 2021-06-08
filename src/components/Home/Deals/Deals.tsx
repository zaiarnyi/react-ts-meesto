import React from "react";
import deals1WEBP from "../../../assets/img/deals/1.webp";
import deals1JPG from "../../../assets/img/deals/1.jpg";
import dealsHover1JPG from "../../../assets/img/deals/hover/1.jpg";
import dealsHover1WEBP from "../../../assets/img/deals/hover/1.webp";
import deals2WEBP from "../../../assets/img/deals/2.webp";
import deals2JPG from "../../../assets/img/deals/2.jpg";
import deals3WEBP from "../../../assets/img/deals/3.webp";
import deals3JPG from "../../../assets/img/deals/3.jpg";
import deals4WEBP from "../../../assets/img/deals/4.webp";
import deals4JPG from "../../../assets/img/deals/4.jpg";
import deals5WEBP from "../../../assets/img/deals/5.webp";
import deals5JPG from "../../../assets/img/deals/5.jpg";
import deals6WEBP from "../../../assets/img/deals/6.webp";
import deals6JPG from "../../../assets/img/deals/6.jpg";
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
