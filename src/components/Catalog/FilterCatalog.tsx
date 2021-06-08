import React from "react";
import { ViewItems } from "./ViewItems";
import { SortBy } from "./SortBy";
import { FiltersForm } from "./FiltersForm";

interface IFilterItemsProp {}

export const FilterCatalog: React.FC<IFilterItemsProp> = (props) => {
  return (
    <div className={"filter-page"}>
      <div className="filter-page__items">
        <div className="filter-page__item item-view">
          <div className="item-view__column">
            <ViewItems />
          </div>
          <div className="item-view__column">
            <SortBy />
          </div>
        </div>
        <div className="filter-page__item">
          <FiltersForm />
        </div>
      </div>
    </div>
  );
};
