import React from "react";

interface ISocialMenuProp {}

export const SocialMenu: React.FC<ISocialMenuProp> = React.memo((props) => {
  return (
    <div className={"socials-menu"}>
      <ul className="socials-menu__list">
        <li>
          <a
            href="#"
            className="socials-menu__link socials-menu__link_instagram"
          ></a>
        </li>
        <li>
          <a
            href="#"
            className="socials-menu__link socials-menu__link_facebook"
          ></a>
        </li>
        <li>
          <a
            href="#"
            className="socials-menu__link socials-menu__link_twitter"
          ></a>
        </li>
        <li>
          <a
            href="#"
            className="socials-menu__link socials-menu__link_pinterest"
          ></a>
        </li>
        <li>
          <a
            href="#"
            className="socials-menu__link socials-menu__link_whatsup"
          ></a>
        </li>
        <li>
          <a
            href="#"
            className="socials-menu__link socials-menu__link_snapchat"
          ></a>
        </li>
      </ul>
    </div>
  );
});
