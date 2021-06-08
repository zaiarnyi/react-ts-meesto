import React, { useEffect, useRef } from "react";
import dealsWEBP from "../../assets/img/deals/6.webp";
import dealsJPG from "../../assets/img/deals/6.jpg";

interface IShippingCardProp {
  show: boolean;
  toggleHide: (prev: boolean) => any;
}

export const ShippingCard: React.FC<IShippingCardProp> = React.memo((props) => {
  const cardRef = useRef(null);

  const onHandlerHide = (e: any) => {
    const target = e.target,
      cardWrap = target.closest(".basket-header"),
      searchHeader = target.closest(".info-header__search"),
      langHeader = target.closest(".info-header__language");

    if (target && !(!!cardWrap || !!searchHeader || !!langHeader)) {
      props.toggleHide(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onHandlerHide);
  }, []);

  return (
    <div
      className={
        !props.show
          ? "basket-header__hover hover-basket"
          : "basket-header__hover hover-basket _active"
      }
      ref={cardRef}
    >
      <div className="hover-basket__products">
        <div className="products-info">
          <a href="product.html" className="products-info__image _ibg">
            <picture>
              <source srcSet={dealsWEBP} type="image/webp" />
              <img src={dealsJPG} alt="content picture" />
            </picture>
          </a>
          <div className="products-info__description">
            <a href="product.html" className="products-info__label">
              Everyday carry blue bottle YOLO neutra, tousled four loko
            </a>
            <p>
              <span>Sku:</span>12345
            </p>
          </div>
          <div className="products-info__info">
            <div className="products-info__price">250</div>
            <div className="products-info__remove">
              <span>remove</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hover-basket__shipping">
        <div className="hover-basket__text">Shipping:</div>
        <div className="hover-basket__info">Free</div>
      </div>
      <div className="hover-basket__total">
        <div className="hover-basket__text">Subtotal:</div>
        <div className="hover-basket__info hover-basket__info_price">250</div>
      </div>
      <div className="hover-basket__button">
        <a href="shopping-cart.html" className="hover-basket__cart">
          <span>View shopping cart</span>
        </a>
        <a href="checkout.html" className="hover-basket__checkout btn-anim">
          Checkout
        </a>
      </div>
    </div>
  );
});
