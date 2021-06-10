import React from "react";
import { Link, useParams } from "react-router-dom";
import { IParamsCatalog } from "../../../../App";

interface IBreadCrumbsProp {}

export const BreadCrumbs: React.FC<IBreadCrumbsProp> = React.memo((props) => {
  const params = useParams<IParamsCatalog>();
  return (
    <div className={"breadcrumbs"}>
      <div className="breadcrumbs__container">
        <ul className="breadcrumbs__list">
          <li>
            <Link to={`/`} className="breadcrumbs__link">
              Home
            </Link>
          </li>
          {Object.values(params).map((item) => {
            return (
              <li key={item}>
                <Link to={`/catalog/${item}`} className="breadcrumbs__link">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
