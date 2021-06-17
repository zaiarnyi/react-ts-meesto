import React from "react";
import { Link, useParams } from "react-router-dom";
import { IParamsCatalog } from "../../../App";

interface IBreadCrumbsProp {}

export const BreadCrumbs: React.FC<IBreadCrumbsProp> = React.memo((props) => {
  const params = useParams<IParamsCatalog>();
  let link: Array<string> = ["catalog"];
  return (
    <div className={"breadcrumbs"}>
      <div className="breadcrumbs__container">
        <ul className="breadcrumbs__list">
          <li>
            <Link to={`/`} className="breadcrumbs__link">
              Home
            </Link>
          </li>
          {Object.values(params).map((item, i) => {
            if (item) {
              link.push(Object.values(params)[i]);
              if (i > 0 && i < Object.values(params).length - 1) {
                return (
                  <li key={item}>
                    <Link
                      to={`/catalog/${
                        Object.values(params)[i - 1]
                          ? Object.values(params)[i - 1]
                          : ""
                      }/${item}`}
                      className="breadcrumbs__link"
                    >
                      {item.split("-").join(" ")[0].toUpperCase() +
                        item.split("-").join(" ").substring(1)}
                    </Link>
                  </li>
                );
              } else if (i === 0) {
                return (
                  <li key={item}>
                    <Link to={`/catalog/${item}`} className="breadcrumbs__link">
                      {item.split("-").join(" ")[0].toUpperCase() +
                        item.split("-").join(" ").substring(1)}
                    </Link>
                  </li>
                );
              } else if (i === Object.values(params).length - 1) {
                return (
                  <li key={item}>
                    <Link
                      to={`/${link.join("/")}`}
                      className="breadcrumbs__link"
                    >
                      {item.split("-").join(" ")[0].toUpperCase() +
                        item.split("-").join(" ").substring(1)}
                    </Link>
                  </li>
                );
              }
            }
          })}
        </ul>
      </div>
    </div>
  );
});
