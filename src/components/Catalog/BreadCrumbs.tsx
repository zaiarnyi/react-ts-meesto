import React from "react";

interface IBreadCrumbsProp {}

export const BreadCrumbs: React.FC<IBreadCrumbsProp> = React.memo((props) => {
  return (
    <div className={"breadcrumbs"}>
      <div className="breadcrumbs__container">
        <ul className="breadcrumbs__list">
          <li>
            <a href="index.html" className="breadcrumbs__link">
              home
            </a>
          </li>
          <li>
            <a href="#" className="breadcrumbs__link">
              men
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});
