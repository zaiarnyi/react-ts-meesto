import React, { useState } from "react";
import { BreadCrumbs } from "../General/BreadCrumbs/BreadCrumbs";
import { FilterCatalog } from "../Catalog/Filters/FilterCatalog";
import { DealsItem } from "../General/Deals/DealsItem";
import { LoadCatalog } from "../Catalog/LoadCatalog/LoadCatalog";
import { TagsCatalog } from "../Catalog/TagsCatalog/TagsCatalog";

interface ICatalogProp {}

const Catalog: React.FC<ICatalogProp> = (props) => {
  const [view, setView] = useState(3); // TODO заменить на данные из Redux
  const [isLoading, setIsLoading] = useState(false); // TODO заменить на данные из Redux

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
          <div className="grid-content__items" data-grid-columns={view}>
            <DealsItem />
            <DealsItem />
            <DealsItem />
            <DealsItem />
            <DealsItem />
            <DealsItem />
          </div>
          <div className="grid-content__loading">
            <LoadCatalog isLoading={isLoading} />
          </div>
        </div>
      </div>
      <div className="page__tags">
        <TagsCatalog />
      </div>
    </>
  );
};

export default Catalog;
