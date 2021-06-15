import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BreadCrumbs } from "../Catalog/Filters/BreadCrumbs/BreadCrumbs";
import { SliderProduct } from "../Product/Slider/SliderProduct";
import { PriceProduct } from "../Product/Price/PriceProduct";
import { useFormik } from "formik";
import Select from "react-select";
import LightGallery from "lightgallery/react";
import { CSSTransition } from "react-transition-group";
import "lightgallery/scss/lightgallery.scss";
//Import photo
import product1WEBP from "../../assets/img/product/1.webp";
import product1JPG from "../../assets/img/product/1.jpg";
import product2WEBP from "../../assets/img/product/2.webp";
import product2JPG from "../../assets/img/product/2.jpg";
import product3WEBP from "../../assets/img/product/3.webp";
import product3JPG from "../../assets/img/product/3.jpg";
import product4WEBP from "../../assets/img/product/3.webp";
import product4JPG from "../../assets/img/product/4.jpg";

//Types
interface IInitValues {
  color: string;
  size: null | ISelectOptions | string;
}
interface ISelectOptions {
  value: string;
  label: string;
}
interface IProductProp {}

//Props
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
const information = [
  "Green juice flexitarian jean shorts",
  "Stumptown mumblecore asymmetrical ugh",
  "Fashion axe vegan single-origin",
];
const tags = ["sneakers", "trainers", "outdoor and active wear", "running"];
const photoGallery = [
  [product1WEBP, product1JPG],
  [product2WEBP, product2JPG],
  [product3WEBP, product3JPG],
  [product4WEBP, product4JPG],
];

export const Product: React.FC<IProductProp> = React.memo((props) => {
  const detailsRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [productBlock, setProductBlock] = useState(true);
  const [infoBlock, setInfoBlock] = useState(true);
  const nodeProductRef = useRef(null);
  const nodeInfoRef = useRef(null);
  useEffect(() => {
    const headerHeight = document.querySelector(".header__row") as HTMLElement,
      deliveryHeight = document.querySelector(".free-delivery") as HTMLElement;
    const sum = headerHeight.clientHeight + (deliveryHeight.clientHeight || 0);
    setHeaderHeight(sum);
    window.addEventListener("resize", onChangeWidthWindow);
    if (document.documentElement.clientWidth <= 992) {
      setProductBlock(false);
      setInfoBlock(false);
    }
    return () => {
      window.removeEventListener("resize", onChangeWidthWindow);
    };
  }, []);

  //Formik
  const formik = useFormik({
    initialValues: {
      color: "",
      size: null,
    } as IInitValues,
    validate: (values: IInitValues) => {
      const errors: Partial<IInitValues> = {};
      if (values.color.length === 0) {
        errors.color = "Required";
      }
      if (values.size === null) {
        errors.size = "Required";
      }
      return errors;
    },
    onSubmit: (values, formikHelpers) => {},
  });
  //Func
  const onScrollToDetails = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // @ts-ignore
    let offsetTop = detailsRef.current.offsetTop - headerHeight;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };
  const onToggleProductBlock = () => {
    setProductBlock((prev) => !prev);
  };
  const onToggleInfoBlock = () => {
    setInfoBlock((prev) => !prev);
  };
  const onChangeWidthWindow = () => {
    if (document.documentElement.clientWidth <= 992) {
      setProductBlock(false);
      setInfoBlock(false);
    } else {
      setProductBlock(true);
      setInfoBlock(true);
    }
  };
  return (
    <>
      <div className="page__breadcrumbs">
        <BreadCrumbs />
      </div>
      <div className="page__products ">
        <div className={"products-page"}>
          <div className="products-page__content">
            <div className={"content-products"}>
              <div className="content-products__gallery">
                <div className="gallery-product ">
                  {
                    <LightGallery
                      selector={".gallery-product__item"}
                      speed={500}
                      download={false}
                      // counter={false}
                      getCaptionFromTitleOrAlt={false}
                    >
                      {photoGallery.map(([webp, jpg], i) => {
                        return (
                          <div
                            className="gallery-product__item"
                            key={i}
                            data-src={jpg}
                          >
                            <picture>
                              <source srcSet={webp} type="image/webp" />
                              <img src={jpg} alt="content picture" />
                            </picture>
                          </div>
                        );
                      })}
                    </LightGallery>
                  }
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
                    Men’s black technical lace-up sneakers in contrasting
                    materials with a contrasting cotton-tab at the heel.
                  </div>
                  <div className="aside-product__info-block">
                    <button
                      className="aside-product__details"
                      onClick={onScrollToDetails}
                    >
                      Product details
                    </button>
                    <Link
                      to={"/size-guide"}
                      className="aside-product__size-guide"
                    >
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
                        // onBlur={() => formik.setFieldTouched("size", true)}
                        onBlur={formik.handleBlur}
                        onChange={(opt, e) => {
                          formik.setFieldValue("size", opt);
                          formik.setFieldTouched("size", true);
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
                      disabled={
                        !formik.dirty ||
                        Object.keys(formik.errors).length > 0 ||
                        !formik.isValid
                      }
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
          </div>
          <div className="products-page__info">
            <div className="products-page__container _container">
              <div className="products-page__details">
                <div className={"details-product"}>
                  <div className="details-product__column" ref={detailsRef}>
                    <div
                      className={
                        !productBlock
                          ? "details-product__title"
                          : "details-product__title _active"
                      }
                      onClick={onToggleProductBlock}
                    >
                      Product details
                    </div>
                    {
                      <CSSTransition
                        in={productBlock}
                        timeout={300}
                        unmountOnExit
                        classNames="products-page__toggle"
                        nodeRef={nodeProductRef}
                      >
                        <div
                          ref={nodeProductRef}
                          className={"details-product__body"}
                        >
                          <div className="details-product__text">
                            Tote bag mlkshk humblebrag leggings normcore
                            authentic mustache. Chartreuse swag brunch chillwave
                            keytar shabby chic synth jianbing wolf pork belly
                            jean shorts trust fund ugh hot chicken blog.
                            Flexitarian pickled vape asymmetrical man braid chia
                            hot chicken vinyl. Prism wolf keffiyeh cornhole
                            snackwave roof party next level sartorial church-key
                            messenger bag salvia. offal letterpress, poutine
                            ramps man bun intelligentsia kogi you probably
                            haven't heard of them. Pickled aesthetic gochujang
                            polaroid
                          </div>
                          {information && (
                            <ul className="details-product__list">
                              {information.map((item, index) => {
                                return (
                                  <li key={index}>
                                    <p>{item}</p>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          <div className="details-product__tags">
                            <div className="tags-page">
                              {tags && (
                                <ul className="tags-page__list">
                                  {tags.map((item) => {
                                    return (
                                      <li key={item}>
                                        <Link
                                          to={`/tags/${item}`}
                                          className="tags-page__link"
                                        >
                                          {item[0].toUpperCase() +
                                            item.substring(1)}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </CSSTransition>
                    }
                  </div>
                  <div className="details-product__column">
                    <div
                      className={
                        !infoBlock
                          ? "details-product__title"
                          : "details-product__title _active"
                      }
                      onClick={onToggleInfoBlock}
                    >
                      Information
                    </div>
                    {
                      <CSSTransition
                        in={infoBlock}
                        timeout={300}
                        unmountOnExit
                        classNames="products-page__toggle"
                        nodeRef={nodeInfoRef}
                      >
                        <div
                          className={"details-product__body"}
                          ref={nodeInfoRef}
                        >
                          {information && (
                            <ul className="details-product__list details-product__list_info">
                              {information.map((item) => {
                                return (
                                  <li key={item[0]}>
                                    <p>{item}</p>
                                  </li>
                                );
                              })}
                            </ul>
                          )}

                          <div className="details-product__text details-product__text_info">
                            Af offal letterpress, poutine ramps man bun
                            intelligentsia kogi you probably haven't heard of
                            them. Pickled aesthetic gochujang polaroid
                          </div>
                          <div className="tags-page__help-link">
                            <ul className="help-link__list">
                              <li>
                                <Link
                                  to={"/delivery"}
                                  className="help-link__link"
                                >
                                  Delivery
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to={"/return"}
                                  className="help-link__link"
                                >
                                  Return
                                </Link>
                              </li>
                              <li>
                                <Link to={"/help"} className="help-link__link">
                                  Help
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CSSTransition>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-page__slider">
            <SliderProduct />
          </div>
        </div>
      </div>
    </>
  );
});
