import React, { useState } from "react";
import deals1WEBP from "../../../assets/img/deals/1.webp";
import deals1JPG from "../../../assets/img/deals/1.jpg";
import dealsHover1WEBP from "../../../assets/img/deals/hover/1.webp";
import dealsHover1JPG from "../../../assets/img/deals/hover/1.jpg";
import { Link, useParams } from "react-router-dom";
import { IParamsCatalog } from "../../../App";

interface IDealsItemProp {}

export const DealsItem: React.FC<IDealsItemProp> = (props) => {
  const [sale, setSale] = useState(20); //TODO заменит на данные из Redux
  const [freeShip, setFreeShip] = useState(false); //TODO заменит на данные из Redux
  const [newThing, setNewThing] = useState(false); //TODO заменит на данные из Redux
  const classesTop = sale
    ? "item-deals__badge item-deals__badge_sale"
    : "item-deals__badge";
  const { gender, category, product } = useParams<Required<IParamsCatalog>>();
  const name = "Poke flannel marfa swag slow-carb narwhal"; //TODO Получить все данные
  const linkName = name.split(" ").join("-").toLowerCase();
  const link =
    gender && category
      ? `/catalog/${gender}/${category}/${linkName}`
      : gender && !category
      ? `/catalog/${gender}/${linkName}`
      : "/";

  return (
    <div className="item-deals">
      <div className="item-deals__content">
        <div className="item-deals__top">
          <span className={classesTop}>
            {(sale ? sale : null) ||
              (freeShip ? "Free Shipping" : null) ||
              (newThing ? "New In" : null)}
          </span>
          <Link to={link} className="item-deals__image _ibg">
            <picture>
              <source srcSet={deals1WEBP} type="image/webp" />
              <img src={deals1JPG} alt="content picture" />
            </picture>
          </Link>
        </div>
        <div className="item-deals__body">
          <Link to={link} className="item-deals__label">
            {name}
          </Link>
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
            <Link to={link} className="hover-deals__image _ibg">
              <picture>
                <source srcSet={dealsHover1WEBP} type="image/webp" />
                <img src={dealsHover1JPG} alt="content picture" />
              </picture>
            </Link>
          </div>
          <div className="hover-deals__body">
            <Link to={link} className="hover-deals__btn btn-anim">
              add
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
