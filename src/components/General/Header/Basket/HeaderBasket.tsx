import React, { useState } from "react";
import { ShippingCard } from "../../ShippingCard";

interface IHeaderBasketProp {}

export const HeaderBasket: React.FC<IHeaderBasketProp> = React.memo((props) => {
  const [card, setCard] = useState(false);

  const onToggleCard = () => {
    setCard((prevState) => !prevState);
  };
  return (
    <div className={"basket-header"}>
      <div className="basket-header__quantity">
        <div className="basket-header__view" onClick={onToggleCard}>
          1
        </div>
      </div>
      <ShippingCard show={card} toggleHide={setCard} />
    </div>
  );
});
