import React from "react";
import looks1WEBP from "../../../assets/img/looks/1.webp";
import looks1JPG from "../../../assets/img/looks/1.jpg";
import looks2WEBP from "../../../assets/img/looks/2.webp";
import looks2JPG from "../../../assets/img/looks/2.jpg";
import looks3WEBP from "../../../assets/img/looks/3.webp";
import looks3JPG from "../../../assets/img/looks/3.jpg";
import looks4WEBP from "../../../assets/img/looks/4.webp";
import looks4JPG from "../../../assets/img/looks/4.jpg";
import looks5WEBP from "../../../assets/img/looks/5.webp";
import looks5JPG from "../../../assets/img/looks/5.jpg";
import { LookItem } from "./LookItem";
interface ILooksProp {}

export const Looks: React.FC<ILooksProp> = (props) => {
  return (
    <div className="page__looks look-page">
      <div className="look-page__container _container">
        <div className="look-page__top">
          <div className="number-top">
            <span>05</span>
          </div>
        </div>
        <div className="look-page__body">
          <div className="look-page__items">
            <div className="look-page__item">
              <div className="look-label">
                <div className="look-label__year-collection">2020</div>
                <div className="look-label__title">Recent looks</div>
                <a href="#" className="look-label__link">
                  Discover now
                </a>
              </div>
            </div>
            <LookItem />
            <div className="look-page__item">
              <div className="look-item">
                <div className="look-item__label">
                  <div className="look-item__name">Nela Combs</div>
                  <div className="look-item__description">The important</div>
                </div>
                <div className="look-item__image _ibg">
                  <picture>
                    <source srcSet={looks2WEBP} type="image/webp" />
                    <img src={looks2JPG} alt="content picture" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="look-page__item">
              <div className="look-item">
                <div className="look-item__label">
                  <div className="look-item__name">Nela Combs</div>
                  <div className="look-item__description">The important</div>
                </div>
                <div className="look-item__image _ibg">
                  <picture>
                    <source srcSet={looks3WEBP} type="image/webp" />
                    <img src={looks3JPG} alt="content picture" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="look-page__item">
              <div className="look-item">
                <div className="look-item__label">
                  <div className="look-item__name">Nela Combs</div>
                  <div className="look-item__description">The important</div>
                </div>
                <div className="look-item__image _ibg">
                  <picture>
                    <source srcSet={looks4WEBP} type="image/webp" />
                    <img src={looks4JPG} alt="content picture" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="look-page__item">
              <div className="look-item">
                <div className="look-item__label">
                  <div className="look-item__name">Nela Combs</div>
                  <div className="look-item__description">The important</div>
                </div>
                <div className="look-item__image _ibg">
                  <picture>
                    <source srcSet={looks5WEBP} type="image/webp" />
                    <img src={looks5JPG} alt="content picture" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div className="look-page__item-label">
            <div className="label-item">
              <div className="label-item__number">05</div>
              <div className="label-item__title">Looks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
