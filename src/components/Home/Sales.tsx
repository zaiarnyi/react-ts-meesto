import React from "react";
import salesWEBP from "../../assets/img/sale/1.webp";
import salesJPG from "../../assets/img/sale/1.jpg";

interface ISalesProp {}

export const Sales: React.FC<ISalesProp> = (props) => {
  return (
    <div className="page__sale sale-page">
      <div className="sale-page__top">
        <div className="number-top">
          <span>04</span>
        </div>
      </div>
      <div className="sale-page__body">
        <div className="sale-page__content _container">
          <div className="sale-page__info">
            <p>70% off</p>
            <a href="#" className="sale-page__btn btn-anim">
              Shop now
            </a>
          </div>
          <div className="sale-page__item-label">
            <div className="label-item">
              <div className="label-item__number">04</div>
              <div className="label-item__title">Sale</div>
            </div>
          </div>
        </div>
        <div className="sale-page__image _ibg">
          <picture>
            <source srcSet={salesWEBP} type="image/webp" />
            <img src={salesJPG} alt="content picture" />
          </picture>
        </div>
      </div>
      <div className="sale-page__bottom">
        <div className="number-bottom">
          <span>04</span>
        </div>
      </div>
    </div>
  );
};
