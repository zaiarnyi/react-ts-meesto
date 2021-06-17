import React, { useRef } from "react";
import { ItemProduct } from "../General/CardProduct/ItemProduct";
import { useFormik } from "formik";
import { CSSTransition } from "react-transition-group";
import { LogIsCheck } from "../Checkout/LogIsCheck/LogIsCheck";
import * as Yup from "yup";
import card from "../../assets/img/icons/mastercard.png";
import cardWEBP from "../../assets/img/icons/mastercard.webp";
import payCardWEB from "../../assets/img/icons/PayPal.webp";
import payCard from "../../assets/img/icons/PayPal.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import { CustomInput } from "../Checkout/CustomForm/CustomInput";
import { CustomSelect } from "../Checkout/CustomForm/CustomSelect";

interface ICheckoutProp {}
interface IInitValuesCheck {
  isCoupon: boolean;
  coupon: string;
  shippingMethod: string;
  payBy: string;
  privacy: boolean;
  billEmail?: string;
  billFirstName?: string;
  billLastName?: string;
  billPhone?: string;
  billCompany?: string;
  billCountry?: IOptionsSelectCountry;
  billZipCode?: number | string;
  billHouse?: number | string;
  billApartment?: number | string;
  billStreet?: string;
  billCity?: string;
  billState?: string;
  shipEmail: string;
  shipFirstName: string;
  shipLastName: string;
  shipPhone: string;
  shipCompany: string;
  shipCountry: IOptionsSelectCountry;
  shipZipCode: number | string;
  shipHouse: number | string;
  shipApartment: number | string;
  shipStreet: string;
  shipCity: string;
  shipState: string;
  diffAddress: boolean;
  createAcc: boolean;
}
export interface IOptionsSelectCountry {
  value: string;
  label: string;
}
const isAuth = true;
const initVal = (
  auth: boolean,
  defaultShip: string,
  defaultPay: string,
  country: Array<IOptionsSelectCountry>
): object => {
  const init: IInitValuesCheck = {
    isCoupon: false,
    coupon: "",
    shippingMethod: defaultShip,
    payBy: defaultPay,
    privacy: true,
    shipEmail: "",
    shipFirstName: "",
    shipLastName: "",
    shipPhone: "",
    shipCompany: "",
    shipCountry: country[0],
    shipZipCode: "",
    shipHouse: "",
    shipApartment: "",
    shipCity: "",
    shipState: "",
    shipStreet: "",
    diffAddress: false,
    createAcc: false,
  };
  // if (!auth) {
  if (init.diffAddress) {
    init.billEmail = "";
    init.billFirstName = "";
    init.billLastName = "";
    init.billPhone = "";
    init.billCompany = "";
    init.billCountry = country[0];
    init.billZipCode = "";
    init.billHouse = "";
    init.billApartment = "";
    init.billCity = "";
    init.billState = "";
  }
  // }
  return init;
};
const shipMethod = ["USPS / FedEx - Free shipping", "DHL - Standard shipping"];
const payBy = [
  {
    label: "MasterCard / Visa",
    description:
      "международная платёжная система, транснациональная финансовая корпорация",
    image: card,
    imageWEBP: cardWEBP,
  },
  {
    label: "PayPal",
    description: "крупнейшая дебетовая электронная платёжная система.",
    image: payCard,
    imageWEBP: payCardWEB,
  },
];
const country = ["ukraine", "france", "italy", "spain"];

const Checkout: React.FC<ICheckoutProp> = (props) => {
  const optionsCountry: Array<IOptionsSelectCountry> = country.map((item) => {
    return {
      value: item,
      label: item[0].toUpperCase() + item.substring(1),
    };
  });
  const couponRef = useRef(null);
  const billRef = useRef(null);
  const defaultShipMethod = shipMethod[0].split("-")[0].trim();
  const formik = useFormik({
    initialValues: initVal(
      isAuth,
      defaultShipMethod,
      payBy[0].label,
      optionsCountry
    ) as IInitValuesCheck,
    validationSchema: Yup.object().shape({
      isCoupon: Yup.boolean(),
      coupon: Yup.string().when("isCoupon", {
        is: true,
        then: Yup.string().min(5).required().trim(),
      }),
      shippingMethod: Yup.string(),
      payBy: Yup.string(),
      privacy: Yup.boolean(),
      shipEmail: Yup.string()
        .email("must be a valid email")
        .min(4)
        .trim()
        .required("Обязательно к заполнению"),
      shipFirstName: Yup.string()
        .min(2)
        .trim()
        .required("Обязательно к заполнению"),
      shipLastName: Yup.string()
        .min(2)
        .trim()
        .required("Обязательно к заполнению"),
      shipPhone: Yup.string()
        .min(13)
        .trim()
        .required("Обязательно к заполнению"),
      shipCompany: Yup.string().min(2).trim(),
      shipZipCode: Yup.number()
        .typeError("you must specify a number")
        .min(4, "Очень коротко")
        .required("Обязательно к заполнению"),
      shipHouse: Yup.number()
        .typeError("you must specify a number")
        .min(1, "Очень коротко")
        .required("Обязательно к заполнению"),
      shipApartment: Yup.number()
        .typeError("you must specify a number")
        .min(1, "Очень коротко"),
      shipStreet: Yup.string()
        .min(4, "Очень коротко")
        .required("Обязательно к заполнению"),
      shipCity: Yup.string().min(1).trim().required("Обязательно к заполнению"),
      shipState: Yup.string()
        .min(1)
        .trim()
        .required("Обязательно к заполнению"),
      diffAddress: Yup.boolean(),
      createAcc: Yup.boolean(),
      billEmail: Yup.string().when("diffAddress", {
        is: true,
        then: Yup.string()
          .email("must be a valid email")
          .min(4)
          .trim()
          .typeError("must be a valid email")
          .required("Обязательно к заполнению"),
      }),
      billFirstName: Yup.string().when("diffAddress", {
        is: true,
        then: Yup.string().min(2).trim().required("Обязательно к заполнению"),
      }),
      billLastName: Yup.string().when("diffAddress", {
        is: true,
        then: Yup.string().min(2).trim().required("Обязательно к заполнению"),
      }),
      billPhone: Yup.string().when("diffAddress", {
        is: true,
        then: Yup.string().min(4).trim().required("Обязательно к заполнению"),
      }),
      billCompany: Yup.string().when("diffAddress", {
        is: true,
        then: Yup.string().min(2).trim(),
      }),
      billZipCode: Yup.number().when("diffAddress", {
        is: true,
        then: Yup.number()
          .min(4)
          .required("Обязательно к заполнению")
          .typeError("you must specify a number"),
      }),
      billHouse: Yup.number().when("diffAddress", {
        is: true,
        then: Yup.number()
          .min(1)
          .required("Обязательно к заполнению")
          .typeError("you must specify a number"),
      }),
      billApartment: Yup.number().when("diffAddress", {
        is: true,
        then: Yup.number().min(4).typeError("you must specify a number"),
      }),
      billCity: Yup.string().when("diffAddress", {
        is: true,
        then: Yup.string().min(4).trim().required("Обязательно к заполнению"),
      }),
      billState: Yup.string().when("diffAddress", {
        is: true,
        then: Yup.string().min(4).trim().required("Обязательно к заполнению"),
      }),
    }),
    onSubmit: (values, formikHelpers) => {},
  });
  return (
    <form action="#" className="page__checkout">
      <div className={"checkout-page"}>
        <div className="checkout-page__view-cart">
          <div className="checkout-cart">
            <div className="checkout-cart__title checkout-title">
              Shopping Cart
            </div>
            <div className="checkout-cart__content">
              <div className="checkout-cart__body">
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
              </div>
              <div className="checkout-cart__info-block">
                <div className="checkout-text">Shipping:</div>
                <div className="checkout-text">Free</div>
              </div>
              <div className="checkout-cart__info-block">
                <div className="checkout-text">Subtotal:</div>
                <div className="checkout-text money">250</div>
              </div>
              <div className="checkout-cart__info-block">
                <div className="checkout-title">Cart total:</div>
                <div className="checkout-title money">250</div>
              </div>
              <div className="checkout-cart__coupon">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    value={String(formik.values.isCoupon)}
                    checked={formik.values.isCoupon}
                    name="isCoupon"
                    onChange={formik.handleChange}
                    className="checkbox__input"
                  />
                  <span className="checkbox__text">I have a coupon code</span>
                </label>
                {
                  <CSSTransition
                    in={formik.values.isCoupon}
                    timeout={500}
                    classNames={"toggle-anim"}
                    unmountOnExit
                    nodeRef={couponRef}
                  >
                    <div className={"checkout-pre-error"} ref={couponRef}>
                      <input
                        autoComplete="off"
                        type="text"
                        name="coupon"
                        value={formik.values.coupon}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input input-coupon"
                      />
                      {formik.errors.coupon && formik.touched.coupon && (
                        <div className={"checkout-error"}>
                          {formik.errors.coupon}
                        </div>
                      )}
                    </div>
                  </CSSTransition>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-page__data">
          <div className={"checkout-data"}>
            <LogIsCheck />
            <div className="checkout-data__shipping-block">
              <div className="checkout-data__label checkout-title">
                1. Shipping
              </div>
              <div className="checkout-data__row">
                <CustomInput
                  title={"Email*"}
                  name={"shipEmail"}
                  value={formik.values.shipEmail}
                  change={formik.handleChange}
                  blur={formik.handleBlur}
                  error={formik.errors.shipEmail || ""}
                  touched={formik.touched.shipEmail || false}
                  autofocus={true}
                />
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <CustomInput
                    title={"First name*"}
                    name={"shipFirstName"}
                    value={formik.values.shipFirstName}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipFirstName || ""}
                    touched={formik.touched.shipFirstName || false}
                  />
                </div>
                <div className="checkout-data__second-input">
                  <CustomInput
                    title={"Last name*"}
                    name={"shipLastName"}
                    value={formik.values.shipLastName}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipLastName || ""}
                    touched={formik.touched.shipLastName || false}
                  />
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <CustomInput
                    title={"Phone*"}
                    name={"shipPhone"}
                    value={formik.values.shipPhone}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipPhone || ""}
                    touched={formik.touched.shipPhone || false}
                  />
                </div>
                <div className="checkout-data__second-input">
                  <CustomInput
                    title={"Company name"}
                    name={"shipCompany"}
                    value={formik.values.shipCompany}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipCompany || ""}
                    touched={formik.touched.shipCompany || false}
                  />
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <CustomSelect
                    title={"Country*"}
                    name={"shipCountry"}
                    options={optionsCountry}
                    value={formik.values.shipCountry}
                    changeFunc={formik.setFieldValue}
                  />
                </div>
                <div className="checkout-data__second-input">
                  <CustomInput
                    title={"Zip code*"}
                    name={"shipZipCode"}
                    value={formik.values.shipZipCode}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipZipCode || ""}
                    touched={formik.touched.shipZipCode || false}
                  />
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__small-body">
                    <div className="checkout-data__small-block">
                      <CustomInput
                        title={"House number*"}
                        name={"shipHouse"}
                        value={formik.values.shipHouse}
                        change={formik.handleChange}
                        blur={formik.handleBlur}
                        error={formik.errors.shipHouse || ""}
                        touched={formik.touched.shipHouse || false}
                      />
                    </div>
                    <div className="checkout-data__small-block">
                      <CustomInput
                        title={"Apartment (suit, unit etc.)"}
                        name={"shipApartment"}
                        value={formik.values.shipApartment}
                        change={formik.handleChange}
                        blur={formik.handleBlur}
                        error={formik.errors.shipApartment || ""}
                        touched={formik.touched.shipApartment || false}
                      />
                    </div>
                  </div>
                </div>
                <div className="checkout-data__second-input">
                  <CustomInput
                    title={"Street name*"}
                    name={"shipStreet"}
                    value={formik.values.shipStreet}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipStreet || ""}
                    touched={formik.touched.shipStreet || false}
                  />
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <CustomInput
                    title={"City*"}
                    name={"shipCity"}
                    value={formik.values.shipCity}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipCity || ""}
                    touched={formik.touched.shipCity || false}
                  />
                </div>
                <div className="checkout-data__second-input">
                  <CustomInput
                    title={"State*"}
                    name={"shipState"}
                    value={formik.values.shipState}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.shipState || ""}
                    touched={formik.touched.shipState || false}
                  />
                </div>
              </div>
              <div className="checkout-data__row checkout-data__row_check">
                <div className="checkout-data__delivery">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value={String(formik.values.diffAddress)}
                      checked={formik.values.diffAddress}
                      onChange={formik.handleChange}
                      name="diffAddress"
                      className="checkbox__input"
                    />
                    <span className="checkbox__text checkout-text">
                      Billing to a different address
                    </span>
                  </label>
                </div>
                {!isAuth && (
                  <div className="checkout-data__new-account">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        value={String(formik.values.createAcc)}
                        name="createAcc"
                        onChange={formik.handleChange}
                        className="checkbox__input"
                      />
                      <span className="checkbox__text checkout-text">
                        Create an account
                      </span>
                    </label>
                  </div>
                )}
              </div>
            </div>
            <CSSTransition
              in={formik.values.diffAddress}
              timeout={500}
              classNames={"toggle-anim"}
              nodeRef={billRef}
              unmountOnExit
            >
              <div className="checkout-data__billing-block" ref={billRef}>
                <div className="checkout-data__label checkout-title">
                  2. Billing
                </div>
                <div className="checkout-data__row">
                  <CustomInput
                    title={"Email*"}
                    name={"billEmail"}
                    defaultValue={formik.values.shipEmail}
                    value={formik.values.billEmail || ""}
                    change={formik.handleChange}
                    blur={formik.handleBlur}
                    error={formik.errors.billEmail || ""}
                    touched={formik.touched.billEmail || false}
                    autofocus={true}
                  />
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <CustomInput
                      title={"First name*"}
                      name={"billFirstName"}
                      defaultValue={formik.values.shipFirstName || ""}
                      value={formik.values.billFirstName || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billFirstName || ""}
                      touched={formik.touched.billFirstName || false}
                      autofocus={true}
                    />
                  </div>
                  <div className="checkout-data__second-input">
                    <CustomInput
                      title={"Last name*"}
                      name={"billLastName"}
                      defaultValue={formik.values.shipLastName || ""}
                      value={formik.values.billLastName || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billLastName || ""}
                      touched={formik.touched.billLastName || false}
                      autofocus={true}
                    />
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <CustomInput
                      title={"Phone"}
                      name={"billPhone"}
                      defaultValue={formik.values.shipPhone || ""}
                      value={formik.values.billPhone || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billPhone || ""}
                      touched={formik.touched.billPhone || false}
                      autofocus={true}
                    />
                  </div>
                  <div className="checkout-data__second-input">
                    <CustomInput
                      title={"Company name"}
                      name={"billCompany"}
                      defaultValue={formik.values.shipCompany || ""}
                      value={formik.values.billCompany || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billCompany || ""}
                      touched={formik.touched.billCompany || false}
                      autofocus={true}
                    />
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <CustomSelect
                      title={"Country*"}
                      name={"billCountry"}
                      options={optionsCountry}
                      defaultValue={formik.values.shipCountry}
                      value={formik.values.billCountry}
                      changeFunc={formik.setFieldValue}
                    />
                  </div>
                  <div className="checkout-data__second-input">
                    <CustomInput
                      title={"Zip code*"}
                      name={"billZipCode"}
                      defaultValue={formik.values.shipZipCode || ""}
                      value={formik.values.billZipCode || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billZipCode || ""}
                      touched={formik.touched.billZipCode || false}
                      autofocus={true}
                    />
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <div className="checkout-data__small-body">
                      <div className="checkout-data__small-block">
                        <CustomInput
                          title={"House number*"}
                          name={"billHouse"}
                          defaultValue={formik.values.shipHouse || ""}
                          value={formik.values.billHouse || ""}
                          change={formik.handleChange}
                          blur={formik.handleBlur}
                          error={formik.errors.billHouse || ""}
                          touched={formik.touched.billHouse || false}
                          autofocus={true}
                        />
                      </div>
                      <div className="checkout-data__small-block">
                        <CustomInput
                          title={"Apartment (suit, unit etc.)"}
                          name={"billApartment"}
                          defaultValue={formik.values.shipApartment || ""}
                          value={formik.values.billApartment || ""}
                          change={formik.handleChange}
                          blur={formik.handleBlur}
                          error={formik.errors.billApartment || ""}
                          touched={formik.touched.billApartment || false}
                          autofocus={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout-data__second-input">
                    <CustomInput
                      title={"Street name*"}
                      name={"billStreet"}
                      defaultValue={formik.values.shipStreet || ""}
                      value={formik.values.billStreet || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billStreet || ""}
                      touched={formik.touched.billStreet || false}
                      autofocus={true}
                    />
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <CustomInput
                      title={"City*"}
                      name={"billCity"}
                      defaultValue={formik.values.shipCity || ""}
                      value={formik.values.billCity || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billCity || ""}
                      touched={formik.touched.billCity || false}
                      autofocus={true}
                    />
                  </div>
                  <div className="checkout-data__second-input">
                    <CustomInput
                      title={"State*"}
                      name={"billState"}
                      defaultValue={formik.values.shipCity || ""}
                      value={formik.values.billState || ""}
                      change={formik.handleChange}
                      blur={formik.handleBlur}
                      error={formik.errors.billState || ""}
                      touched={formik.touched.billState || false}
                      autofocus={true}
                    />
                  </div>
                </div>
              </div>
            </CSSTransition>
            <div className="checkout-data__payment payment-checkout">
              <div className="payment-checkout__column">
                <div className="payment-checkout__label checkout-title">
                  3. Shipping Method
                </div>
                <div className="payment-checkout__body">
                  {shipMethod.map((item) => {
                    const current = item.split("-")[0].trim();
                    return (
                      <div className="payment-checkout__row" key={current}>
                        <label>
                          <input
                            type="radio"
                            name="shippingMethod"
                            value={current}
                            onChange={formik.handleChange}
                            checked={current === formik.values.shippingMethod}
                            className="payment-checkout__radiobutton"
                          />
                          <span className="payment-checkout__text">{item}</span>
                        </label>
                        <div className="payment-checkout__list">
                          <p>free shipping other $125</p>
                          <p>
                            All the rules and conditions of each shipping
                            company apply to customer
                          </p>
                          <p>Free store delivery and free returns</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="payment-checkout__column">
                <div className="payment-checkout__label checkout-title">
                  4. Payment Method
                </div>
                <div className="payment-checkout__body">
                  {payBy.map((item) => {
                    return (
                      <div className="payment-checkout__row" key={item.label}>
                        <label>
                          <input
                            type="radio"
                            name="payBy"
                            value={item.label}
                            onChange={formik.handleChange}
                            checked={item.label === formik.values.payBy}
                            className="payment-checkout__radiobutton"
                          />
                          <span className="payment-checkout__text">
                            {item.label}
                          </span>
                        </label>
                        <div className="payment-checkout__list">
                          <div className="payment-checkout__info">
                            <div className="payment-checkout__image">
                              <picture>
                                <source
                                  srcSet={item.imageWEBP}
                                  type="image/webp"
                                />
                                <img src={item.image} alt={item.label} />
                              </picture>
                            </div>
                            <Link to={"/"} className="payment-checkout__link">
                              What is {item.label}?
                            </Link>
                          </div>
                          <div className="payment-checkout__subtext">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="checkout-data__order">
              <div className="order-checkout">
                <div className="order-checkout__top">
                  <div className="order-checkout__label checkout-title">
                    Order Total:
                  </div>
                  <div className="order-checkout__sum money checkout-title">
                    250
                  </div>
                </div>
                <div className="order-checkout__body">
                  <div className="order-checkout__regulations">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        value={String(formik.values.privacy)}
                        name="privacy"
                        checked={formik.values.privacy}
                        onChange={formik.handleChange}
                        className="checkbox__input"
                      />
                      <span className="checkbox__text">
                        I accept the
                        <Link to={"/"} className="text-underline">
                          Terms and Conditions
                        </Link>
                        and
                        <Link to={"/"} className="text-underline">
                          Privacy statement
                        </Link>
                      </span>
                    </label>
                  </div>
                  <div className="order-checkout__button">
                    <button
                      type="submit"
                      className="order-checkout__btn btn"
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
