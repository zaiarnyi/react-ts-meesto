import React from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import { DealsItem } from "../../Home/Deals/DealsItem";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

interface ISliderProductProp {}

export const SliderProduct: React.FC<ISliderProductProp> = (props) => {
  return (
    <div className="products-page__slider slider-product">
      <div className="slider-product__container _container">
        <div className="slider-product__items _swiper">
          <Swiper
            id={"product"}
            slidesPerView={3}
            spaceBetween={30}
            navigation={{
              nextEl: ".slider-product__arrow_next",
              prevEl: ".slider-product__arrow_prev",
            }}
            containerModifierClass={"._swiper"}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true, onlyInViewport: false }}
            speed={800}
            parallax={true}
          >
            <SwiperSlide>
              <DealsItem />
            </SwiperSlide>
            <SwiperSlide>
              <DealsItem />
            </SwiperSlide>
            <SwiperSlide>
              <DealsItem />
            </SwiperSlide>
            <SwiperSlide>
              <DealsItem />
            </SwiperSlide>
            <SwiperSlide>
              <DealsItem />
            </SwiperSlide>
            <SwiperSlide>
              <DealsItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="slider-product__arrow slider-product__arrow_prev"></div>
      <div className="slider-product__arrow slider-product__arrow_next"></div>
    </div>
  );
};
