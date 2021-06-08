import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ViewMenu } from "./ViewMenu/ViewMenu";
import { SearchMenu } from "./SearchFormMenu/SearchMenu";
import { SocialMenu } from "./SocialMenu/SocialMenu";
import { InfoMenu } from "./InfoMenu/InfoMenu";
import { AsideMenu } from "./AsideMenu";

interface IHeaderMenuProp {}

export const HeaderMenu: React.FC<IHeaderMenuProp> = React.memo((props) => {
  const [sideMenu, setSideMenu] = useState(false);
  const menuRef = useRef(null);
  const onToggleShowMenu = () => {
    setSideMenu((prevState) => !prevState);
  };

  const onHideMenu = (e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(menuRef.current)) {
      setSideMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onHideMenu);
  }, []);
  return (
    <div className="menu" ref={menuRef}>
      <div
        className={
          !sideMenu ? "menu__icon icon-menu" : "menu__icon icon-menu _active"
        }
        onClick={onToggleShowMenu}
      >
        <span></span> <span></span> <span></span>
      </div>
      <ViewMenu />
      <nav className={!sideMenu ? "menu__body" : "menu__body _active"}>
        <SearchMenu />
        <AsideMenu />
        <div className="menu__info info-menu">
          <InfoMenu />
        </div>
        <div className="menu__socials socials-menu">
          <SocialMenu />
        </div>
      </nav>
    </div>
  );
});
