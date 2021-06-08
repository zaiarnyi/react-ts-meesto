import React from "react";
import looks1WEBP from "../../../assets/img/looks/1.webp";
import looks1JPG from "../../../assets/img/looks/1.jpg";

interface ILookItemProp {}

export const LookItem: React.FC<ILookItemProp> = (props) => {
  return (
    <div className="look-page__item">
      <div className="look-item">
        <div className="look-item__label">
          <div className="look-item__name">Nela Combs</div>
          <div className="look-item__description">The important</div>
        </div>
        <div className="look-item__image _ibg">
          <picture>
            <source srcSet={looks1WEBP} type="image/webp" />
            <img src={looks1JPG} alt="content picture" />
          </picture>
        </div>
      </div>
    </div>
  );
};
