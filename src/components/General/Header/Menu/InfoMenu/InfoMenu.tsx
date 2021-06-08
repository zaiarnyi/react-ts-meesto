import React from "react";
import { Link } from "react-router-dom";

interface IInfoMenuProp {}

export const InfoMenu: React.FC<IInfoMenuProp> = React.memo((props) => {
  return (
    <>
      <div className="info-menu__text">
        Austin brunch cloud bread cronut photo booth locavore crucifix edison
        bulb pork belly distillery. Before they sold out palo santo try-hard,
        vaporware salvia cardigan letterpress ugh butcher bitters brooklyn.
      </div>
      <Link to={"/"} className="info-menu__btn">
        read more
      </Link>
    </>
  );
});
