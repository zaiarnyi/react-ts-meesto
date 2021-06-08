import React from "react";
import masterCardWEB from "../../assets/img/icons/mastercard.webp";
import masterCard from "../../assets/img/icons/mastercard.png";
import visaCardWEB from "../../assets/img/icons/visa.webp";
import visaCard from "../../assets/img/icons/visa.png";
import payCardWEB from "../../assets/img/icons/PayPal.webp";
import payCard from "../../assets/img/icons/PayPal.png";

interface IFooterProp {}

export const Footer: React.FC<IFooterProp> = (props) => {
  return (
    <footer className="footer">
      <div className="footer__content _container">
        <div className="footer__logotype">
          <a href="#" className="logo">
            meesto
          </a>
        </div>
        <div className="footer__row">
          <div className="footer__column col-about">
            <div className="col-about__body col-footer">
              <div className="col-footer__title title-footer">Services</div>
              <ul className="col-footer__list">
                <li>
                  <a href="catalog.html" className="col-footer__link">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="catalog.html" className="col-footer__link">
                    Men’s colleaction
                  </a>
                </li>
                <li>
                  <a href="catalog.html" className="col-footer__link">
                    Woman’s collection
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column col-links">
            <div className="col-links__column">
              <div className="col-footer">
                <div className="col-footer__title title-footer">Company</div>
                <ul className="col-footer__list">
                  <li>
                    <a href="#" className="col-footer__link">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="col-footer__link">
                      Stores location
                    </a>
                  </li>
                  <li>
                    <a href="#" className="col-footer__link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-links__column">
              <div className="col-footer">
                <div className="col-footer__title title-footer">Help</div>
                <ul className="col-footer__list">
                  <li>
                    <a href="#" className="col-footer__link">
                      Clothing care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="col-footer__link">
                      Shoe care
                    </a>
                  </li>
                  <li>
                    <a href="#" className="col-footer__link">
                      Delivery
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__column col-socials">
            <div className="col-socials__top">
              <ul className="col-socials__list">
                <li>
                  <a
                    href="#"
                    className="col-socials__link col-socials__link_twitter"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="col-socials__link col-socials__link_facebook"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="col-socials__link col-socials__link_pinterest"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="col-socials__link col-socials__link_snapchat"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="col-socials__link col-socials__link_instagram"
                  ></a>
                </li>
              </ul>
            </div>
            <div className="col-socials__pay">
              <ul className="col-socials__pay-list">
                <li>
                  <picture>
                    <source srcSet={masterCardWEB} type="image/webp" />
                    <img src={masterCard} alt="mastercard" />
                  </picture>
                </li>
                <li>
                  <picture>
                    <source srcSet={visaCardWEB} type="image/webp" />
                    <img src={visaCard} alt="visa" />
                  </picture>
                </li>
                <li>
                  <picture>
                    <source srcSet={payCardWEB} type="image/webp" />
                    <img src={payCard} alt="paypal" />
                  </picture>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
