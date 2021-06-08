import React, { useEffect, useState } from "react";
import { HeaderMenu } from "./Menu/HeaderMenu";
import { HeaderSearch } from "./Search/HeaderSearch";
import { HeaderLang } from "./Language/HeaderLang";
import { HeaderBasket } from "./Basket/HeaderBasket";
import { HeaderLogo } from "./Logo/HeaderLogo";

interface IHeaderProp {
  delivery: boolean;
}

export const Header: React.FC<IHeaderProp> = React.memo((props) => {
  const [sticky, setSticky] = useState(false);
  const [offset, setOffset] = useState(0);
  const onScrollHeader = () => {
    if (window.scrollY >= offset) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrollHeader);
  }, []);
  useEffect(() => {
    const isBanner = document.querySelector(".free-delivery");
    if (isBanner && isBanner.classList.contains("show")) {
      setOffset(isBanner.clientHeight);
    } else {
      setOffset(0);
    }
  }, [props.delivery]);

  return (
    <header className={!sticky ? "header" : "header _sticky"}>
      <div className="header__row" style={{ top: offset + "px" }}>
        <div className={"header__menu "}>
          <HeaderMenu />
        </div>
        <HeaderLogo />
        <div className="header__info info-header">
          <HeaderSearch />
          <div className="info-header__language">
            <HeaderLang />
          </div>
          <div className="info-header__basket">
            <HeaderBasket />
          </div>
        </div>
      </div>
    </header>
  );
});
