import React, { useState } from "react";
import { ItemProduct } from "../General/CardProduct/ItemProduct";
import { useFormik } from "formik";
import { CSSTransition } from "react-transition-group";
import { LogIsCheck } from "../Checkout/LogIsCheck/LogIsCheck";

interface ICheckoutProp {}
const isAuth = false;

export const Checkout: React.FC<ICheckoutProp> = (props) => {
  const formik = useFormik({
    initialValues: {
      isCoupon: false,
      coupon: "",
    },
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
                    onBlur={formik.handleBlur}
                    className="checkbox__input"
                  />
                  <span className="checkbox__text coupon-cart">
                    I have a coupon code
                  </span>
                </label>
                {
                  <CSSTransition
                    in={formik.values.isCoupon}
                    timeout={300}
                    classNames={"toggle-anim"}
                    unmountOnExit
                  >
                    <input
                      autoComplete="off"
                      type="text"
                      name="coupon"
                      value={formik.values.coupon}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="input input-coupon"
                    />
                  </CSSTransition>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-page__data">
          <div className={"checkout-data"}>
            <LogIsCheck />
            <div className="checkout-data__billing-block">
              <div className="checkout-data__label checkout-title">
                1. Billing
              </div>
              <div className="checkout-data__row">
                <div className="checkout-data__title checkout-text">Email*</div>
                <div className="checkout-data__input">
                  <input
                    autoComplete="off"
                    type="text"
                    name="form[]"
                    data-value=""
                    data-error="Error"
                    className="input email _req"
                  />
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
                      name="form[]"
                      data-value=""
                      data-error="Error"
                      className="input email _req"
                    />
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
                      name="form[]"
                      data-value=""
                      data-error="Error"
                      className="input _req"
                    />
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
                      type="tel"
                      name="form[]"
                      data-value=""
                      className="input _phone _req"
                    />
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
                      data-value=""
                      name="form[]"
                      className="input _req"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__title checkout-text">
                    Country
                  </div>
                  <div className="checkout-data__select">
                    <select name="form{}" className="country">
                      <option value="1">Ukraine</option>
                      <option value="2">France</option>
                      <option value="3">Italy</option>
                      <option value="4">Spain</option>
                    </select>
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
                      name="form[]"
                      data-value=""
                      data-error="Error"
                      className="input _req"
                    />
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
                          data-value=""
                          name="form[]"
                          className="input _req"
                        />
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
                          data-value=""
                          name="form[]"
                          className="input _req"
                        />
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
                      data-value=""
                      name="form[]"
                      className="input _req"
                    />
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
                      name="form[]"
                      data-value=""
                      data-error="Error"
                      className="input _req"
                    />
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
                      name="form[]"
                      data-value=""
                      data-error="Error"
                      className="input _req"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-data__row checkout-data__row_check">
                <div className="checkout-data__delivery">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value="Ship to a different address"
                      name="form[]"
                      className="checkbox__input"
                    />
                    <span className="checkbox__text checkout-text">
                      Ship to a different address
                    </span>
                  </label>
                </div>
                <div className="checkout-data__new-account">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value="Ship to a different address"
                      name="form[]"
                      className="checkbox__input"
                    />
                    <span className="checkbox__text checkout-text">
                      Create an account
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="checkout-data__shipping-block">
              <div className="checkout-data__label checkout-title">
                2. Shipping
              </div>
              <div className="checkout-data__row">
                <div className="checkout-data__title checkout-text">Email*</div>
                <div className="checkout-data__input">
                  <input
                    autoComplete="off"
                    type="text"
                    name="form[]"
                    data-error="Error"
                    className="input email _req"
                  />
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
                      name="form[]"
                      data-error="Error"
                      className="input email _req"
                    />
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
                      name="form[]"
                      data-error="Error"
                      className="input _req"
                    />
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
                      data-value=""
                      name="form[]"
                      className="input _req"
                    />
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
                      name="form[]"
                      className="input"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-data__body-input">
                <div className="checkout-data__first-input">
                  <div className="checkout-data__title checkout-text">
                    Country
                  </div>
                  <div className="checkout-data__select">
                    <select name="form{}" className="country">
                      <option value="1">Ukraine</option>
                      <option value="2">France</option>
                      <option value="3">Italy</option>
                      <option value="4">Spain</option>
                    </select>
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
                      name="form[]"
                      data-error="Error"
                      className="input _req"
                    />
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
                          data-value=""
                          name="form[]"
                          className="input _req"
                        />
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
                          data-value=""
                          name="form[]"
                          className="input _req"
                        />
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
                      name="form[]"
                      className="input"
                    />
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
                      name="form[]"
                      data-error="Error"
                      className="input _req"
                    />
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
                      name="form[]"
                      data-error="Error"
                      className="input _req"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-data__row checkout-data__row_check">
                <div className="checkout-data__delivery">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value="Ship to a different address"
                      name="form[]"
                      className="checkbox__input"
                    />
                    <span className="checkbox__text checkout-text">
                      Ship to a different address
                    </span>
                  </label>
                </div>
                <div className="checkout-data__new-account">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      value="Ship to a different address"
                      name="form[]"
                      className="checkbox__input"
                    />
                    <span className="checkbox__text checkout-text">
                      Create an account
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="checkout-data__payment payment-checkout">
              <div className="payment-checkout__column">
                <div className="payment-checkout__label checkout-title">
                  3. Shipping Method
                </div>
                <div className="payment-checkout__body">
                  <div className="payment-checkout__row">
                    <label>
                      <input
                        type="radio"
                        name="form[]"
                        value="USPS"
                        className="payment-checkout__radiobutton"
                      />
                      <span className="payment-checkout__text">
                        USPS / FedEx - Free shipping
                      </span>
                    </label>
                    <div className="payment-checkout__list">
                      <p>Free shipping other $125</p>
                      <p>
                        All the rules and conditions of each shipping company
                        apply to customer
                      </p>
                      <p>Free store delivery and free returns</p>
                    </div>
                  </div>
                  <div className="payment-checkout__row">
                    <label>
                      <input
                        type="radio"
                        name="form[]"
                        value="DNL"
                        className="payment-checkout__radiobutton"
                      />
                      <span className="payment-checkout__text">
                        DHL - Standart shipping
                      </span>
                    </label>
                    <div className="payment-checkout__list">
                      <p>Free shipping other $125</p>
                      <p>
                        All the rules and conditions of each shipping company
                        apply to customer
                      </p>
                      <p>Free store delivery and free returns</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-checkout__column">
                <div className="payment-checkout__label checkout-title">
                  4. Payment Method
                </div>
                <div className="payment-checkout__body">
                  <div className="payment-checkout__row">
                    <label>
                      <input
                        type="radio"
                        name="form[]1"
                        value="Pay by phone"
                        className="payment-checkout__radiobutton"
                      />
                      <span className="payment-checkout__text">
                        Pay by phone
                      </span>
                    </label>
                    <div className="payment-checkout__list">
                      <div className="payment-checkout__info">
                        <div className="payment-checkout__image">
                          <picture>
                            <source
                              srcSet="img/icons/pay.webp"
                              type="image/webp"
                            />
                            <img
                              src="img/icons/pay.png"
                              alt="content picture"
                            />
                          </picture>
                        </div>
                        <a href="#" className="payment-checkout__link">
                          What is PayPal?
                        </a>
                      </div>
                      <div className="payment-checkout__subtext">
                        Pay via PayPal; you can pay with your credit card if you
                        don’t have a PayPal account.
                      </div>
                    </div>
                  </div>
                  <div className="payment-checkout__row">
                    <label>
                      <input
                        type="radio"
                        name="form[]1"
                        value="PayPal"
                        className="payment-checkout__radiobutton"
                      />
                      <span className="payment-checkout__text">PayPal</span>
                    </label>
                    <div className="payment-checkout__list">
                      <div className="payment-checkout__info">
                        <div className="payment-checkout__image">
                          <picture>
                            <source
                              srcSet="img/icons/pay.webp"
                              type="image/webp"
                            />
                            <img
                              src="img/icons/pay.png"
                              alt="content picture"
                            />
                          </picture>
                        </div>
                        <a href="#" className="payment-checkout__link">
                          What is PayPal?
                        </a>
                      </div>
                      <div className="payment-checkout__subtext">
                        Pay via PayPal; you can pay with your credit card if you
                        don’t have a PayPal account.
                      </div>
                    </div>
                  </div>
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
                        value="1"
                        data-error="Error"
                        name="form[]"
                        className="checkbox__input"
                      />
                      <span className="checkbox__text">
                        I accept the
                        <span className="text-underline">
                          Terms and Conditions
                        </span>
                        and
                        <span className="text-underline">
                          Privacy statement
                        </span>
                      </span>
                    </label>
                  </div>
                  <div className="order-checkout__button">
                    <button type="submit" className="order-checkout__btn btn">
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
