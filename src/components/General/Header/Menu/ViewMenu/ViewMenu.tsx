import React from "react";
import { Link } from "react-router-dom";

interface IViewMenuProp {}

export const ViewMenu: React.FC<IViewMenuProp> = React.memo((props) => {
  const onHoverOver = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target && target.classList.contains("view-menu__link")) {
      const parent = target.closest(".view-menu__list"),
        child = Array.from(parent!.querySelectorAll(".view-menu__link"));
      child.forEach((item) => {
        if (item !== target) {
          item.classList.add("hide");
        }
      });
    }
  };
  const onHoverOut = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target) {
      const parent = target.closest(".view-menu__list"),
        child = Array.from(parent!.querySelectorAll(".view-menu__link"));
      child.forEach((item) => {
        item.classList.remove("hide");
      });
    }
  };
  return (
    <div className="menu__view view-menu">
      <ul
        className="view-menu__list"
        onMouseOver={onHoverOver}
        onMouseOut={onHoverOut}
      >
        <li>
          <Link to={"/catalog/sale"} className="view-menu__link">
            sale
          </Link>
        </li>
        <li>
          <Link to={"/catalog/men"} className="view-menu__link">
            men
          </Link>
        </li>
        <li>
          <Link to={"/catalog/woman"} className="view-menu__link">
            woman
          </Link>
        </li>
      </ul>
    </div>
  );
});
