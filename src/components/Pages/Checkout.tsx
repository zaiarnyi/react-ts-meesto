import React, { useRef } from "react";
import { ItemProduct } from "../General/CardProduct/ItemProduct";
import { useFormik } from "formik";
import { CSSTransition } from "react-transition-group";
import { LogIsCheck } from "../Checkout/LogIsCheck/LogIsCheck";
import * as Yup from "yup";
import card from "../../assets/img/icons/mastercard.png";
import cardWEBP from "../../assets/img/icons/mastercard.webp";
import { Link } from "react-router-dom";
import Select from "react-select";

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
interface IOptionsSelectCountry {
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
    image: card,
    imageWEBP: cardWEBP,
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
                    // onBlur={formik.handleBlur}
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
                <div className="checkout-data__title checkout-text">Email*</div>
                <div className="checkout-data__input">
                  <input
                    autoComplete="off"
                    type="text"
                    name="shipEmail"
                    value={formik.values.shipEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input"
                    autoFocus
                  />
                  {formik.errors.shipEmail && formik.touched.shipEmail && (
                    <div className={"checkout-error"}>
                      {formik.errors.shipEmail}
                    </div>
                  )}
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__title checkout-text">
                    First name*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="shipFirstName"
                      value={formik.values.shipFirstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipFirstName &&
                      formik.touched.shipFirstName && (
                        <div className={"checkout-error"}>
                          {formik.errors.shipFirstName}
                        </div>
                      )}
                  </div>
                </div>
                <div className="checkout-data__second-input">
                  <div className="checkout-data__title checkout-text">
                    Last name*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="shipLastName"
                      value={formik.values.shipLastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipLastName &&
                      formik.touched.shipLastName && (
                        <div className={"checkout-error"}>
                          {formik.errors.shipLastName}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__title checkout-text">
                    Phone*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="tel"
                      name="shipPhone"
                      value={formik.values.shipPhone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipPhone && formik.touched.shipPhone && (
                      <div className={"checkout-error"}>
                        {formik.errors.shipPhone}
                      </div>
                    )}
                  </div>
                </div>
                <div className="checkout-data__second-input">
                  <div className="checkout-data__title checkout-text">
                    Company name
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="shipCompany"
                      value={formik.values.shipCompany}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipCompany &&
                      formik.touched.shipCompany && (
                        <div className={"checkout-error"}>
                          {formik.errors.shipCompany}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__title checkout-text">
                    Country*
                  </div>
                  <div className="checkout-data__select">
                    <Select
                      type={"text"}
                      id={"shipCountry"}
                      // defaultValue={optionsCountry[0]}
                      value={formik.values.shipCountry}
                      className={"country"}
                      name={"shipCountry"}
                      options={optionsCountry}
                      onChange={(option) => {
                        formik.setFieldValue("shipCountry", option);
                      }}
                      styles={{
                        control: (base, props) => {
                          return { ...base, minHeight: 47, top: 2 };
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="checkout-data__second-input">
                  <div className="checkout-data__title checkout-text">
                    Zip code*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="shipZipCode"
                      value={formik.values.shipZipCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipZipCode &&
                      formik.touched.shipZipCode && (
                        <div className={"checkout-error"}>
                          {formik.errors.shipZipCode}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__small-body">
                    <div className="checkout-data__small-block">
                      <div className="checkout-data__title checkout-text">
                        House number*
                      </div>
                      <div className="checkout-data__input">
                        <input
                          autoComplete="off"
                          type="text"
                          name="shipHouse"
                          value={formik.values.shipHouse}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="input"
                        />
                        {formik.errors.shipHouse &&
                          formik.touched.shipHouse && (
                            <div className={"checkout-error"}>
                              {formik.errors.shipHouse}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="checkout-data__small-block">
                      <div className="checkout-data__title checkout-text">
                        Apartment (suit, unit etc.)
                      </div>
                      <div className="checkout-data__input">
                        <input
                          autoComplete="off"
                          type="text"
                          name="shipApartment"
                          value={formik.values.shipApartment}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="input"
                        />
                        {formik.errors.shipApartment &&
                          formik.touched.shipApartment && (
                            <div className={"checkout-error"}>
                              {formik.errors.shipApartment}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkout-data__second-input">
                  <div className="checkout-data__title checkout-text">
                    Street name*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="shipStreet"
                      value={formik.values.shipStreet}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipStreet && formik.touched.shipStreet && (
                      <div className={"checkout-error"}>
                        {formik.errors.shipStreet}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__title checkout-text">
                    City*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="shipCity"
                      value={formik.values.shipCity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipCity && formik.touched.shipCity && (
                      <div className={"checkout-error"}>
                        {formik.errors.shipCity}
                      </div>
                    )}
                  </div>
                </div>
                <div className="checkout-data__second-input">
                  <div className="checkout-data__title checkout-text">
                    State*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="shipState"
                      value={formik.values.shipState}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                    />
                    {formik.errors.shipState && formik.touched.shipState && (
                      <div className={"checkout-error"}>
                        {formik.errors.shipState}
                      </div>
                    )}
                  </div>
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
                  <div className="checkout-data__title checkout-text">
                    Email*
                  </div>
                  <div className="checkout-data__input">
                    <input
                      autoComplete="off"
                      type="text"
                      name="billEmail"
                      defaultValue={formik.values.shipEmail}
                      value={formik.values.billEmail}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input"
                      autoFocus
                    />
                    {formik.errors.billEmail && formik.touched.billEmail && (
                      <div className={"checkout-error"}>
                        {formik.errors.billEmail}
                      </div>
                    )}
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <div className="checkout-data__title checkout-text">
                      First name*
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billFirstName"
                        defaultValue={formik.values.shipFirstName}
                        value={formik.values.billFirstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                        autoFocus
                      />
                      {formik.errors.billFirstName &&
                        formik.touched.billFirstName && (
                          <div className={"checkout-error"}>
                            {formik.errors.billFirstName}
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="checkout-data__second-input">
                    <div className="checkout-data__title checkout-text">
                      Last name*
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billLastName"
                        defaultValue={formik.values.shipLastName}
                        value={formik.values.billLastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                        autoFocus
                      />
                      {formik.errors.billLastName &&
                        formik.touched.billLastName && (
                          <div className={"checkout-error"}>
                            {formik.errors.billLastName}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <div className="checkout-data__title checkout-text">
                      Phone
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billPhone"
                        defaultValue={formik.values.shipPhone}
                        value={formik.values.billPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                      />
                      {formik.errors.billPhone && formik.touched.billPhone && (
                        <div className={"checkout-error"}>
                          {formik.errors.billPhone}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="checkout-data__second-input">
                    <div className="checkout-data__title checkout-text">
                      Company name
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billCompany"
                        defaultValue={formik.values.shipCompany}
                        value={formik.values.billCompany}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                      />
                      {formik.errors.billCompany &&
                        formik.touched.billCompany && (
                          <div className={"checkout-error"}>
                            {formik.errors.billCompany}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <div className="checkout-data__title checkout-text">
                      Country*
                    </div>
                    <div className="checkout-data__select">
                      <Select
                        type={"text"}
                        id={"billCountry"}
                        defaultValue={formik.values.shipCountry}
                        value={formik.values.billCountry}
                        className={"country"}
                        name={"billCountry"}
                        options={optionsCountry}
                        onChange={(option) => {
                          formik.setFieldValue("billCountry", option);
                        }}
                        styles={{
                          control: (base, props) => {
                            return { ...base, minHeight: 47, top: 2 };
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="checkout-data__second-input">
                    <div className="checkout-data__title checkout-text">
                      Zip code*
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billZipCode"
                        defaultValue={formik.values.shipZipCode}
                        value={formik.values.billZipCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                        autoFocus
                      />
                      {formik.errors.billZipCode &&
                        formik.touched.billZipCode && (
                          <div className={"checkout-error"}>
                            {formik.errors.billZipCode}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <div className="checkout-data__small-body">
                      <div className="checkout-data__small-block">
                        <div className="checkout-data__title checkout-text">
                          House number*
                        </div>
                        <div className="checkout-data__input">
                          <input
                            autoComplete="off"
                            type="text"
                            name="billHouse"
                            defaultValue={formik.values.shipHouse}
                            value={formik.values.billHouse}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="input"
                            autoFocus
                          />
                          {formik.errors.billHouse &&
                            formik.touched.billHouse && (
                              <div className={"checkout-error"}>
                                {formik.errors.billHouse}
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="checkout-data__small-block">
                        <div className="checkout-data__title checkout-text">
                          Apartment (suit, unit etc.)
                        </div>
                        <div className="checkout-data__input">
                          <input
                            autoComplete="off"
                            type="text"
                            name="billApartment"
                            defaultValue={formik.values.shipApartment}
                            value={formik.values.billApartment}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="input"
                            autoFocus
                          />
                          {formik.errors.billApartment &&
                            formik.touched.billApartment && (
                              <div className={"checkout-error"}>
                                {formik.errors.billApartment}
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-data__second-input">
                    <div className="checkout-data__title checkout-text">
                      Street name*
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billStreet"
                        defaultValue={formik.values.shipStreet}
                        value={formik.values.billStreet}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                        autoFocus
                      />
                      {formik.errors.billStreet &&
                        formik.touched.billStreet && (
                          <div className={"checkout-error"}>
                            {formik.errors.billStreet}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="checkout-data__body-input">
                  <div className="checkout-data__first-input">
                    <div className="checkout-data__title checkout-text">
                      City*
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billCity"
                        defaultValue={formik.values.shipCity}
                        value={formik.values.billCity}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                        autoFocus
                      />
                      {formik.errors.billCity && formik.touched.billCity && (
                        <div className={"checkout-error"}>
                          {formik.errors.billCity}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="checkout-data__second-input">
                    <div className="checkout-data__title checkout-text">
                      State*
                    </div>
                    <div className="checkout-data__input">
                      <input
                        autoComplete="off"
                        type="text"
                        name="billState"
                        defaultValue={formik.values.shipState}
                        value={formik.values.billState}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="input"
                        autoFocus
                      />
                      {formik.errors.billState && formik.touched.billState && (
                        <div className={"checkout-error"}>
                          {formik.errors.billState}
                        </div>
                      )}
                    </div>
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
