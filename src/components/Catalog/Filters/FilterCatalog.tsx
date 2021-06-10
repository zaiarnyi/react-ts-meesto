import React from "react";
import { ViewItems } from "./ViewSort/ViewItems";
import { SortBy } from "./ViewSort/SortBy";
import { FiltersForm } from "./FilterCatForm/FiltersForm";

interface IFilterItemsProp {}

export const FilterCatalog: React.FC<IFilterItemsProp> = React.memo((props) => {
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
});
