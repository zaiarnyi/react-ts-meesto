import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../Catalog/Filters/BreadCrumbs/BreadCrumbs";
import { SliderProduct } from "../Product/Slider/SliderProduct";
import { PriceProduct } from "../Product/Price/PriceProduct";
import { useFormik } from "formik";
import Select from "react-select";

interface IInitValues {
  color: string;
  size: null | ISelectOptions | string;
}
interface ISelectOptions {
  value: string;
  label: string;
}
interface IProductProp {}
const color = [
  "black",
  "red",
  "yellow",
  "green",
  "white",
  "grey",
  "brown",
  "blue",
  "other",
];
const size = [
  "xs",
  "s",
  "m",
  "l",
  "xl",
  "xxl",
  "32",
  "36",
  "40",
  "42",
  "44",
  "46",
  "50",
];
const sizeOptions = size.reduce((acc: Array<ISelectOptions>, item) => {
  let obj: ISelectOptions = { value: item, label: item.toUpperCase() };
  acc = [...acc, obj];
  return acc;
}, []);
const sale = 20; //TODO Получить скидку из Redux
const price = 234;

export const Product: React.FC<IProductProp> = (props) => {
  const detailsRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const headerHeight = document.querySelector(".header__row"),
      deliveryHeight = document.querySelector(".free-delivery");
    const sum =
      (headerHeight?.clientHeight || 0) + (deliveryHeight?.clientHeight || 0);
    setHeaderHeight(sum);
  }, []);
  const formik = useFormik({
    initialValues: {
      color: "",
      size: null,
    } as IInitValues,
    validate: (values: IInitValues) => {
      const errors: Partial<IInitValues> = {};
      if (values.color.length === 0) {
        console.log(values);
        errors.color = "Required";
      }
      if (!values.size) {
        errors.size = "Required";
      }
      return errors;
    },
    onSubmit: (values, formikHelpers) => {
      console.log(values);
    },
  });
  const onScrollToDetails = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // @ts-ignore
    let offsetTop = detailsRef.current.offsetTop - headerHeight;
    window.scrollBy({ top: offsetTop, behavior: "smooth" });
  };

  console.log(!!formik.touched);
  console.log(formik);
  return (
    <>
      <div className="page__breadcrumbs">
        <BreadCrumbs />
      </div>
      <div className="page__products products-page">
        <div className="products-page__content content-products">
          <div className="content-products__gallery">
            <div className="gallery-product _gallery">
              <div className="gallery-product__item">
                <a
                  href="img/product/1.jpg"
                  className="gallery-product__image _ibg"
                >
                  <picture>
                    <source srcSet="img/product/1.webp" type="image/webp" />
                    <img src="img/product/1.jpg" alt="content picture" />
                  </picture>
                </a>
              </div>
              <div className="gallery-product__item">
                <a
                  href="img/product/2.jpg"
                  className="gallery-product__image _ibg"
                >
                  <picture>
                    <source srcSet="img/product/2.webp" type="image/webp" />
                    <img src="img/product/2.jpg" alt="content picture" />
                  </picture>
                </a>
              </div>
              <div className="gallery-product__item">
                <a
                  href="img/product/3.jpg"
                  className="gallery-product__image _ibg"
                >
                  <picture>
                    <source srcSet="img/product/3.webp" type="image/webp" />
                    <img src="img/product/3.jpg" alt="content picture" />
                  </picture>
                </a>
              </div>
              <div className="gallery-product__item">
                <a
                  href="img/product/4.jpg"
                  className="gallery-product__image _ibg"
                >
                  <picture>
                    <source srcSet="img/product/4.webp" type="image/webp" />
                    <img src="img/product/4.jpg" alt="content picture" />
                  </picture>
                </a>
              </div>
            </div>
          </div>
          <aside className="content-products__aside">
            <form onSubmit={formik.handleSubmit} className="aside-product">
              <div className="aside-product__code">
                Ref. <span>1234567GH</span>
              </div>
              <h2 className="aside-product__name">
                Fashion axe vegan single-origin cotton keffiyeh shoe
              </h2>
              <div className="aside-product__price-block">
                <PriceProduct sale={sale} price={price} />
              </div>
              <div className="aside-product__tax">
                Tax free (21%) outside US
              </div>
              <div className="aside-product__text">
                Men’s black technical lace-up sneakers in contrasting materials
                with a contrasting cotton-tab at the heel.
              </div>
              <div className="aside-product__info-block">
                <button
                  className="aside-product__details"
                  onClick={onScrollToDetails}
                >
                  Product details
                </button>
                <Link to={"/size-guide"} className="aside-product__size-guide">
                  Size guide
                </Link>
              </div>
              <div className="aside-product__color-block">
                <div className="aside-product__color-choice">
                  {color.map((item) => {
                    return (
                      <div className="aside-product__color" key={item}>
                        <label className="aside-product__radio">
                          <input
                            type="radio"
                            name={`color`}
                            value={item}
                            className="aside-product__input"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          <span
                            className={`aside-product__image aside-product__image_${item} ${
                              formik.values.color === item ? "_active" : ""
                            }`}
                            data-color={item}
                          ></span>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className="aside-product__color-name">
                  {formik.values.color}
                </div>
              </div>
              <div className="aside-product__select-size">
                <div className="aside-product__select">
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={sizeOptions[0]}
                    isClearable={true}
                    name="size"
                    options={sizeOptions}
                    onBlur={() => formik.setFieldTouched("size", true)}
                    onChange={(opt, e) => {
                      formik.setFieldValue("size", opt);
                      if (!formik.touched.size) {
                        formik.setFieldTouched("size", true);
                      }
                    }}
                    toched={formik.touched.size}
                    error={formik.errors.size}
                  />
                </div>
              </div>
              <div className="aside-product__button">
                <button
                  type="submit"
                  className="aside-product__btn"
                  disabled={!!formik.touched && !!formik.errors}
                >
                  Add to bag
                </button>
              </div>
              <a href="#" className="aside-product__share">
                <span>Share</span>
              </a>
            </form>
          </aside>
        </div>
        <div className="products-page__info">
          <div className="products-page__container _container">
            <div className="products-page__details details-product _spollers">
              <div className="details-product__column" ref={detailsRef}>
                <div className="details-product__title _spoller _spoller-992">
                  Product details
                </div>
                <div className="details-product__body">
                  <div className="details-product__text">
                    Tote bag mlkshk humblebrag leggings normcore authentic
                    mustache. Chartreuse swag brunch chillwave keytar shabby
                    chic synth jianbing wolf pork belly jean shorts trust fund
                    ugh hot chicken blog. Flexitarian pickled vape asymmetrical
                    man braid chia hot chicken vinyl. Prism wolf keffiyeh
                    cornhole snackwave roof party next level sartorial
                    church-key messenger bag salvia. offal letterpress, poutine
                    ramps man bun intelligentsia kogi you probably haven't heard
                    of them. Pickled aesthetic gochujang polaroid
                  </div>
                  <ul className="details-product__list">
                    <li>
                      <p>Green juice flexitarian jean shorts</p>
                    </li>
                    <li>
                      <p>Stumptown mumblecore asymmetrical ugh</p>
                    </li>
                    <li>
                      <p>Fashion axe vegan single-origin</p>
                    </li>
                  </ul>
                  <div className="details-product__tags">
                    <div className="tags-page">
                      <ul className="tags-page__list">
                        <li>
                          <a href="#" className="tags-page__link">
                            Sneackers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="tags-page__link">
                            Trainers
                          </a>
                        </li>
                        <li>
                          <a href="#" className="tags-page__link">
                            Running
                          </a>
                        </li>
                        <li>
                          <a href="#" className="tags-page__link">
                            Outdoor and active wear
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details-product__column">
                <div className="details-product__title _spoller _spoller-992">
                  Information
                </div>
                <div className="details-product__body">
                  <ul className="details-product__list details-product__list_info">
                    <li>
                      <p>Green juice flexitarian jean shorts</p>
                    </li>
                    <li>
                      <p>Stumptown mumblecore asymmetrical ugh</p>
                    </li>
                    <li>
                      <p>Fashion axe vegan single-origin</p>
                    </li>
                  </ul>
                  <div className="details-product__text details-product__text_info">
                    Af offal letterpress, poutine ramps man bun intelligentsia
                    kogi you probably haven't heard of them. Pickled aesthetic
                    gochujang polaroid
                  </div>
                  <div className="tags-page__help-link">
                    <ul className="help-link__list">
                      <li>
                        <a href="#" className="help-link__link">
                          Delivery
                        </a>
                      </li>
                      <li>
                        <a href="#" className="help-link__link">
                          Return
                        </a>
                      </li>
                      <li>
                        <a href="#" className="help-link__link">
                          Help
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products-page__slider slider-product">
          <SliderProduct />
        </div>
      </div>
    </>
  );
};
