import React from "react";
import { Link } from "react-router-dom";

interface IHeaderLogoProp {}

export const HeaderLogo: React.FC<IHeaderLogoProp> = React.memo((props) => {
  return (
    <Link to={"/"} className="header__logotype logo">
      meesto
    </Link>
  );
});
