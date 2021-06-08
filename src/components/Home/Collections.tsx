import React from "react";
import collection1WEBP from "../../assets/img/collection/1.webp";
import collection1JPG from "../../assets/img/collection/1.jpg";

interface ICollectionsProp {}

export const Collections: React.FC<ICollectionsProp> = (props) => {
  return (
    <div className="page__collection collection-page">
      <div className="collection-page__container _container">
        <div className="collection-page__top">
          <div className="number-top">
            <span>02</span>
          </div>
        </div>
        <div className="collection-page__body">
          <div className="collection-page__items">
            <div className="collection-page__item-image _ibg">
              <picture>
                <source srcSet={collection1WEBP} type="image/webp" />
                <img src={collection1JPG} alt="content picture" />
              </picture>
            </div>
            <div className="collection-page__item-info info-collection">
              <div className="info-collection__column">
                <ul className="info-collection__list">
                  <li>
                    <p>Part of our responsible edit</p>
                  </li>
                  <li>
                    <p>Waterproof up to 10,000mm</p>
                  </li>
                  <li>
                    <p>10, 000gm breathable</p>
                  </li>
                  <li>
                    <p>Signature printed lining</p>
                  </li>
                  <li>
                    <p>Two internal pockets</p>
                  </li>
                  <li>
                    <p>Adjustable hood</p>
                  </li>
                </ul>
                <div className="info-collection__text">
                  <p>
                    A woman has the age she deserves. Luxury will be always
                    around, no matter what happens in the world. I've always
                    thought of the T-shirt as the Alpha and Omega of the fashion
                    alphabet. I think I'd go mad if I didn't have a place to
                    escape to. I am like a freight train. Working on the
                    details, twisting them and playing with them over the years,
                    but always staying on the same track.
                  </p>
                </div>
              </div>
              <div className="info-collection__column">
                <ul className="info-collection__list">
                  <li>
                    <p>Funnel neck</p>
                  </li>
                  <li>
                    <p>Storm placket</p>
                  </li>
                  <li>
                    <p>Long sleeves</p>
                  </li>
                  <li>
                    <p>Adjustable wrist cuffs with built</p>
                  </li>
                </ul>
                <div className="info-collection__text">
                  <p>
                    A woman has the age she deserves. Luxury will be always
                    around, no matter what happens in the world. I've always
                    thought of the T-shirt as the Alpha and Omega of the fashion
                    alphabet. I think I'd go mad if I didn't have a place to
                    escape to. I am like a freight train. Working on the
                    details, twisting them and playing with them over the years,
                    but always staying on the same track.
                  </p>
                </div>
              </div>
            </div>
            <div className="collection-page__item-label">
              <div className="label-item">
                <div className="label-item__number">02</div>
                <div className="label-item__title">Collection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
