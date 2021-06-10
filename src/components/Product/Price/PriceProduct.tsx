import React from "react";

interface IPriceProductProp {
  sale: number;
  price: number;
}

export const PriceProduct: React.FC<IPriceProductProp> = ({ sale, price }) => {
  return (
    <>
      {sale ? (
        <>
          <div className="aside-product__old-price money">{price}</div>
          <div className="aside-product__price-sale money">
            {Math.ceil(price - price * (sale / 100))}
          </div>
        </>
      ) : (
        <div className="aside-product__price money">{price}</div>
      )}
    </>
  );
};
