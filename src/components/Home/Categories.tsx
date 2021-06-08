import React from "react";
import { Link } from "react-router-dom";

interface ICategoriesProp {}

export const Categories: React.FC<ICategoriesProp> = (props) => {
  return (
    <div className="page__categories categories-page">
      <div className="categories-page__container _container">
        <div className="categories-page__top">
          <div className="number-top">
            <span>07</span>
          </div>
        </div>
        <div className="categories-page__body">
          <div className="categories-page__title">
            The Parisian heat dictates for plenty of light fabrics - louche
            linens and cool-coloured stonewash denim - and note the combination
            of high and low as sharp tailoring is teamed with light shirts and
            casual Tees
          </div>
          <div className="categories-page__items">
            <Link
              to={"/categories/shoes"}
              className="categories-page__item btn-anim"
            >
              Shoe
            </Link>
            <Link
              to={"/categories/bags"}
              className="categories-page__item btn-anim"
            >
              Bag’s
            </Link>
            <Link
              to={"/categories/t-shirts"}
              className="categories-page__item btn-anim"
            >
              T-shirts
            </Link>
            <Link
              to={"/categories/shoes"}
              className="categories-page__item btn-anim"
            >
              Pants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
