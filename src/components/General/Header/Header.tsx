import React, { useCallback, useEffect, useRef, useState } from "react";
import { HeaderMenu } from "./Menu/HeaderMenu";
import { HeaderSearch } from "./Search/HeaderSearch";
import { HeaderLang } from "./Language/HeaderLang";
import { HeaderBasket } from "./Basket/HeaderBasket";
import { HeaderLogo } from "./Logo/HeaderLogo";
import { useLocation } from "react-router-dom";
import { observe } from "web-vitals/dist/modules/lib/observe";

interface IHeaderProp {
  delivery: boolean;
}

export const Header: React.FC<IHeaderProp> = React.memo(({ delivery }) => {
  const [sticky, setSticky] = useState(false);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", onScrollHeader);
    return () => {
      window.removeEventListener("scroll", onScrollHeader);
    };
  }, []);
  useEffect(() => {
    const isBanner = document.querySelector(".free-delivery") as HTMLElement;
    delivery ? setOffset(isBanner.clientHeight) : setOffset(0);
  }, [delivery]);
  const loc = useLocation();
  //Func
  const headerClasses = useCallback((): string => {
    let styles = ["header"];
    if (loc.pathname.length > 1) {
      styles.push("header__row_second-page");
    }
    if (sticky) {
      styles.push("_sticky");
    }
    return styles.join(" ");
  }, [sticky]);
  const onScrollHeader = () => {
    if (window.scrollY >= offset + 5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  return (
    <header className={headerClasses()} style={{ top: offset + "px" }}>
      <div className="header__row">
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
