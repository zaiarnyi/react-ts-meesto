import React, { useEffect, useRef } from "react";
import dealsWEBP from "../../assets/img/deals/6.webp";
import dealsJPG from "../../assets/img/deals/6.jpg";
import { Link } from "react-router-dom";
import { ItemProduct } from "./CardProduct/ItemProduct";

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
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
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
        <Link to={"/shopping-cart"} className="hover-basket__cart">
          <span>View shopping cart</span>
        </Link>
        <Link to={"/checkout"} className="hover-basket__checkout btn-anim">
          Checkout
        </Link>
      </div>
    </div>
  );
});
