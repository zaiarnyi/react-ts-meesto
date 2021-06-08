import React, { useState } from "react";
import { Link } from "react-router-dom";

interface IAsideMenuProp {}

export const AsideMenu: React.FC<IAsideMenuProp> = React.memo((props) => {
  const [submenu, setSubmenu] = useState(false);
  const onHandlerToggle = () => {
    setSubmenu((prevState) => !prevState);
  };

  return (
    <ul className="menu__list">
      <li>
        <Link to={"/account"} className="menu__link menu__link_new">
          my account
        </Link>
      </li>
      <li>
        <Link to={"/catalog/sale"} className="menu__link menu__link_sale">
          sale
        </Link>
      </li>
      <li>
        <Link to={"/catalog/men"} className="menu__link">
          men
        </Link>
      </li>
      <li>
        <Link to={"/catalog/woman"} className="menu__link">
          woman
        </Link>
      </li>
      <li>
        <Link to={"/catalog/sale"} className="menu__link">
          sale
        </Link>
      </li>
      <li>
        <Link to={"/catalog/men"} className="menu__link">
          men
        </Link>
      </li>
      <li>
        <Link to={"/catalog/lookbook"} className="menu__link">
          Lookbook
        </Link>
      </li>
      <li>
        <span
          className={
            !submenu
              ? "menu__link menu__spoller"
              : "menu__link menu__spoller _active"
          }
          onClick={onHandlerToggle}
        >
          Pages
        </span>
        {
          <ul
            className={
              !submenu ? "menu__submenu-list" : "menu__submenu-list _active"
            }
          >
            <li>
              <Link to={"/about"} className="menu__submenu-link">
                about
              </Link>
            </li>
            <li>
              <Link to={"/locations"} className="menu__submenu-link">
                store locations
              </Link>
            </li>
            <li>
              <Link to={"/blog"} className="menu__submenu-link">
                blog
              </Link>
            </li>
          </ul>
        }
      </li>
    </ul>
  );
});
