import React from "react";
import slide1WEBP from "../../../assets/img/main-slider/1.webp";
import slide1JPG from "../../../assets/img/main-slider/1.jpg";

interface ISlideHomeProp {
  active: boolean;
  prev: boolean;
}

export const SlideHome: React.FC<ISlideHomeProp> = (props) => {
  return (
    <div
      className="fullslider-page__item"
      data-swiper-parallax-opacity={"0"}
      data-swiper-parallax-scale={"1.3"}
      data-swiper-parallax-duration={"800"}
    >
      <div className={"item-fullslider"}>
        <div className="item-fullslider__body item-fullslider__body_right_container">
          <a
            href="#"
            className="item-fullslider__label"
            data-swiper-parallax="-70%"
            data-swiper-parallax-duration={"800"}
          >
            Accessories
          </a>
          <div
            className="item-fullslider__sublabel"
            data-swiper-parallax="-50%"
            data-swiper-parallax-duration={"800"}
          >
            2020
          </div>
          <a
            href="#"
            className="item-fullslider__link"
            data-swiper-parallax="-20%"
            data-swiper-parallax-duration={"800"}
          >
            Discover now
          </a>
        </div>
        <div className="item-fullslider__image _ibg">
          <picture>
            <source srcSet={slide1WEBP} type="image/webp" />
            <img
              src={slide1JPG}
              alt="content picture"
              className="swiper-lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};
