import React from "react";
import { BreadCrumbs } from "../Catalog/BreadCrumbs";
import { FilterCatalog } from "../Catalog/FilterCatalog";
import { DealsItem } from "../Home/Deals/DealsItem";

interface ICatalogProp {}

const Catalog: React.FC<ICatalogProp> = (props) => {
  return (
    <>
      <div className="page__breadcrumbs">
        <BreadCrumbs />
      </div>
      <div className="page__filter">
        <FilterCatalog />
      </div>

      <div className="page__items-grid">
        <div className="grid-content">
          <div className="grid-content__items" data-grid-columns="3">
            <DealsItem />
            <DealsItem />
            <DealsItem />
            <DealsItem />
            <DealsItem />
            <DealsItem />
          </div>
          <div className="grid-content__loading">
            <div className="item-load">
              <div className="item-load__number">15 of 234 items was view</div>
              <a href="#" className="item-load__btn btn-anim">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="page__tags tags-page">
        <ul className="tags-page__list">
          <li>
            <a href="#" className="tags-page__link">
              Sneackers
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Trainers
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Running
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Outdoor and active wear
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Sport
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Casual
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              T-shirt
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Clothing
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Shoes
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Collection
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Sale
            </a>
          </li>
          <li>
            <a href="#" className="tags-page__link">
              Exclusive
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Catalog;
