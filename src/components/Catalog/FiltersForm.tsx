import React, { useState } from "react";
import { ProductTypeFilter } from "./FilterCatForm/ProductTypeFilter";
import { ColorTypeFilter } from "./FilterCatForm/ColorTypeFilter";
import { SizeTypeFilter } from "./FilterCatForm/SizeTypeFilter";
import { PriceTypeFilter } from "./FilterCatForm/PriceTypeFilter";
import { useFormik } from "formik";

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

export const FiltersForm: React.FC<IFiltersFormProp> = (props) => {
  const [active, setActive] = useState(false);
  const formik = useFormik({
    initialValues: {
      product: {
        accessories: false,
        bags: false,
        coats: true,
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
    onSubmit: (values, formikHelpers) => {},
  });

  const onToggleHandler = () => {
    setActive((prevState) => !prevState);
  };
  let name, value, checked;

  return (
    <div className={!active ? "item-filter" : "item-filter _active"}>
      <div className="item-filter__label" onClick={onToggleHandler}>
        View filters
      </div>
      <div className="item-filter__active">
        <form className="active-fliter" onSubmit={formik.handleSubmit}>
          <div className="active-fliter__item">
            <div className="active-fliter__title">Product type</div>
            <div className="active-fliter__body">
              {Object.keys(formik.values.product).map((item) => {
                name = item.split("")[0].toUpperCase();
                name += item.substring(1);
                // name
                // @ts-ignore
                checked = pformik.values.product[item];
                return (
                  <div className="active-fliter__product" key={item}>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        // value={formik.values.product}
                        name={item}
                        id={item}
                        checked={checked}
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
          <ColorTypeFilter
            color={formik.values.color}
            blur={formik.handleBlur}
            toggle={formik.handleChange}
          />
          <SizeTypeFilter
            size={formik.values.size}
            blur={formik.handleBlur}
            toggle={formik.handleChange}
          />
          <PriceTypeFilter />
          <div className="active-fliter__item">
            <div className="active-fliter__body active-fliter__body_button">
              <button
                type="reset"
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
};
