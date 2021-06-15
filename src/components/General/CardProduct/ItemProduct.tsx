import React from "react";
import dealsWEBP from "../../../assets/img/deals/6.webp";
import dealsJPG from "../../../assets/img/deals/6.jpg";
import { Link } from "react-router-dom";

interface IItemProductProp {
  // link: string;
  // webpImg: string;
  // jpgImg: string;
  // name: string;
  // sku: number;
  // price: number;
}

export const ItemProduct: React.FC<IItemProductProp> = (props) => {
  return (
    <div className="products-info">
      <Link
        to={"/catalog/men/shoes/everyday-carry"}
        className="products-info__image"
      >
        <picture>
          <source srcSet={dealsWEBP} type="image/webp" />
          <img src={dealsJPG} alt="content picture" />
        </picture>
      </Link>
      <div className="products-info__description">
        <Link
          to={"/catalog/men/shoes/everyday-carry"}
          className="products-info__label"
        >
          Everyday carry blue bottle YOLO neutra, tousled four loko
        </Link>
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
  );
};
