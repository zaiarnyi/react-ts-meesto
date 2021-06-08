import React from "react";
import { SlideHome } from "./SlideHome";
// Import Swiper React components
import SwiperCore, { Navigation, Autoplay, EffectFade, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay, EffectFade, Parallax]);

interface IFullSliderProp {}

export const FullSlider: React.FC<IFullSliderProp> = (props) => {
  return (
    <div className="page__fullslider fullslider-page">
      <div className="fullslider-page__body">
        <div className="fullslider-page__items _swiper">
          <Swiper
            id={"fullSlider"}
            slidesPerView={1}
            navigation={{
              nextEl: ".fullslider-page__arrow_next",
              prevEl: ".fullslider-page__arrow_prev",
            }}
            containerModifierClass={"._swiper"}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true, onlyInViewport: false }}
            effect={"fade"}
            speed={800}
            parallax={true}
          >
            <SwiperSlide>
              {({ isActive, isPrev }) => {
                return <SlideHome active={isActive} prev={isPrev} />;
              }}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive, isPrev }) => {
                return <SlideHome active={isActive} prev={isPrev} />;
              }}
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="fullslider-page__arrow fullslider-page__arrow_prev"></div>
        <div className="fullslider-page__arrow fullslider-page__arrow_next"></div>
      </div>
      <div className="fullslider-page__bottom">
        <div className="number-bottom">
          <span>01</span>
        </div>
      </div>
    </div>
  );
};
