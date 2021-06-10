import React, { useCallback, useEffect, useState } from "react";
import { PriceTypeFilter } from "./PriceTypeFilter";
import { useFormik } from "formik";
import { useRef } from "react";

export interface IProductFilter {
  accessories: boolean;
  bags: boolean;
  coats: boolean;
  hats: boolean;
  "jackets-and-bombers": boolean;
  "pants-and-jeans": boolean;
  shoes: boolean;
  "t-shirts-and-sweatshirts": boolean;
  underwear: boolean;
}
export interface IColorFilter {
  black: boolean;
  white: boolean;
  red: boolean;
  grey: boolean;
  green: boolean;
  brown: boolean;
  blue: boolean;
  other: boolean;
}
export interface ISizeFilter {
  xs: boolean;
  s: boolean;
  m: boolean;
  l: boolean;
  xl: boolean;
  xxl: boolean;
  "32": boolean;
  "36": boolean;
  "40": boolean;
  "42": boolean;
  "44": boolean;
  "46": boolean;
  "50": boolean;
}

interface IFiltersFormProp {}
interface IInitValues {
  product: IProductFilter;
  color: IColorFilter;
  size: ISizeFilter;
}

export const FiltersForm: React.FC<IFiltersFormProp> = React.memo((props) => {
  const [active, setActive] = useState(false);
  const [currency, setCurrency] = useState("$"); // TODO заменить на данные из Redux
  const [priceStart, setPriceStart] = useState<Array<number>>([0, 20000]); // TODO заменить на данные из Redux
  const [priceCustom, setPriceCustom] = useState<Array<number>>([50, 10000]); // // TODO заменить на данные из Redux
  const formik = useFormik({
    initialValues: {
      product: {
        accessories: false,
        bags: false,
        coats: false,
        hats: false,
        "jackets-and-bombers": false,
        "pants-and-jeans": false,
        shoes: false,
        "t-shirts-and-sweatshirts": false,
        underwear: false,
      },
      color: {
        black: false,
        white: false,
        red: false,
        grey: false,
        green: false,
        brown: false,
        blue: false,
        other: false,
      },
      size: {
        xs: false,
        s: false,
        m: false,
        l: false,
        xl: false,
        xxl: false,
        "32": false,
        "36": false,
        "40": false,
        "42": false,
        "44": false,
        "46": false,
        "50": false,
      },
    } as IInitValues,
    onSubmit: (values, formikHelpers) => {
      const newValue = { ...values, priceCustom };
      console.log(JSON.stringify(newValue, null, 2));
    },
  });
  const filterRef = useRef(null);
  useEffect(() => {
    window.addEventListener("click", onHideHandler);
    return () => {
      window.addEventListener("click", onHideHandler); //TODO задиспатчить обнуление priceCustom
    };
  }, [active]);

  //Func
  const onToggleHandler = () => {
    setActive((prevState) => !prevState);
  };
  const onHideHandler = (e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(filterRef.current) && active) {
      setActive(false);
      formik.handleSubmit();
    }
  };
  let name, check;
  return (
    <div
      className={!active ? "item-filter" : "item-filter _active"}
      ref={filterRef}
    >
      <div className="item-filter__label" onClick={onToggleHandler}>
        View filters
      </div>
      <div className="item-filter__active">
        <form className="active-fliter" onSubmit={formik.handleSubmit}>
          <div className="active-fliter__item">
            <div className="active-fliter__title">Product type</div>
            <div className="active-fliter__body">
              {Object.keys(formik.values.product).map((item: string) => {
                name = item.split("")[0].toUpperCase();
                name += item.substring(1);
                // @ts-ignore
                check = formik.values.product[item];
                return (
                  <div className="active-fliter__product" key={item}>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        value={check}
                        name={`product.${item}`}
                        checked={check}
                        className="checkbox__input"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <span className="checkbox__text">
                        {name} <span>102</span>
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="active-fliter__item">
            <div className="active-fliter__title">Color</div>
            <div className="active-fliter__body active-fliter__body_color">
              {Object.keys(formik.values.color).map((item) => {
                name = item.split("")[0].toUpperCase();
                name += item.substring(1);
                // @ts-ignore
                check = formik.values.color[item];
                return (
                  <div className="active-fliter__color" key={item}>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        value={check}
                        name={`color.${item}`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="checkbox__input"
                        checked={check}
                      />
                      <span className="checkbox__text">{name}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="active-fliter__item">
            <div className="active-fliter__title">Size</div>
            <div className="active-fliter__body active-fliter__body_size">
              {Object.keys(formik.values.size).map((item) => {
                // @ts-ignore
                check = formik.values.size[item];
                return (
                  <div className="active-fliter__size" key={item}>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        value={check}
                        checked={check}
                        name={`size.${item}`}
                        className="checkbox__input"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <span className="checkbox__text">
                        {item.toUpperCase()}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="active-fliter__item">
            <div className="active-fliter__title">Price</div>
            <div className="active-fliter__body active-fliter__body_price">
              <div className="active-fliter__slider">
                <PriceTypeFilter
                  currency={currency}
                  priceStart={priceStart}
                  priceCustom={priceCustom}
                  setPriceCustom={setPriceCustom}
                />
              </div>
            </div>
          </div>
          <div className="active-fliter__item">
            <div className="active-fliter__body active-fliter__body_button">
              <button
                type="reset"
                onClick={formik.handleReset}
                className="active-fliter__btn active-fliter__btn_w"
              >
                Clear Filters
              </button>
              <button
                type="submit"
                className="active-fliter__btn active-fliter__btn_b"
              >
                View Items
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
});
