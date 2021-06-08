import React, { useState } from "react";
import deals1WEBP from "../../../assets/img/deals/1.webp";
import deals1JPG from "../../../assets/img/deals/1.jpg";
import dealsHover1WEBP from "../../../assets/img/deals/hover/1.webp";
import dealsHover1JPG from "../../../assets/img/deals/hover/1.jpg";

interface IDealsItemProp {}

export const DealsItem: React.FC<IDealsItemProp> = (props) => {
  const [sale, setSale] = useState(30);
  const [freeShip, setFreeShip] = useState(false);
  const [newThing, setNewThing] = useState(false);
  const classesTop = sale
    ? "item-deals__badge item-deals__badge_sale"
    : "item-deals__badge";
  return (
    <div className="item-deals">
      <div className="item-deals__content">
        <div className="item-deals__top">
          <a href="#" className={classesTop}>
            {(sale ? sale : null) ||
              (freeShip ? "Free Shipping" : null) ||
              (newThing ? "New In" : null)}
          </a>
          <a href="product.html" className="item-deals__image _ibg">
            <picture>
              <source srcSet={deals1WEBP} type="image/webp" />
              <img src={deals1JPG} alt="content picture" />
            </picture>
          </a>
        </div>
        <div className="item-deals__body">
          <a href="product.html" className="item-deals__label">
            Poke flannel marfa swag slow-carb narwhal
          </a>
          <div className="item-deals__price-block">
            {sale ? (
              <>
                <div className="item-deals__old-price money">265</div>
                <div className="item-deals__price item-deals__price_red money">
                  {Math.ceil(265 - 265 * (sale / 100))}
                </div>
              </>
            ) : (
              <div className="item-deals__price money">265</div>
            )}
          </div>
        </div>
      </div>
      <div className="item-deals__hover">
        <div className="hover-deals">
          <div className="hover-deals__top">
            <a href="product.html" className="hover-deals__image _ibg">
              <picture>
                <source srcSet={dealsHover1WEBP} type="image/webp" />
                <img src={dealsHover1JPG} alt="content picture" />
              </picture>
            </a>
          </div>
          <div className="hover-deals__body">
            <a href="#" className="hover-deals__btn btn-anim">
              add
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
