import React from "react";
import instaShop1WEBP from "../../assets/img/instashop/1.webp";
import instaShop1JPG from "../../assets/img/instashop/1.jpg";

interface IShopProp {}

export const Shop: React.FC<IShopProp> = (props) => {
  return (
    <div className="page__shop shop-page">
      <div className="shop-page__container _container">
        <div className="shop-page__body">
          <div className="shop-page__column col-label">
            <div className="col-label__title">My instagram</div>
            <a href="#" className="col-label__name">
              @d.zaiarnyi
            </a>
          </div>
          <div className="shop-page__column col-shop">
            <div className="col-shop__links">
              <a
                href="#shopone"
                className="col-shop__link col-shop__link_one _popup-link"
              >
                1
              </a>
              <a
                href="#shoptwo"
                className="col-shop__link col-shop__link_two _popup-link"
              >
                2
              </a>
              <a
                href="#shopthree"
                className="col-shop__link col-shop__link_three _popup-link"
              >
                3
              </a>
            </div>
            <div className="col-shop__image _ibg">
              <picture>
                <source srcSet={instaShop1WEBP} type="image/webp" />
                <img src={instaShop1JPG} alt="content picture" />
              </picture>
            </div>
            <div className="col-shop__hover">Shop the look</div>
          </div>
        </div>
        <div className="shop-page__button">
          <a href="#" className="shop-page__arrow"></a>
        </div>
      </div>
    </div>
  );
};
