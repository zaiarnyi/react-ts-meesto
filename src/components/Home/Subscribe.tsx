import React from "react";
import { FormikHelpers, useFormik } from "formik";

interface ISubscribeProp {}
interface IInitValue {
  email: string;
  check: boolean;
}

export const Subscribe: React.FC<ISubscribeProp> = (props) => {
  const formik = useFormik({
    onSubmit<IInitValue>(
      values: IInitValue,
      formikHelpers: FormikHelpers<IInitValue>
    ): void | Promise<any> {
      console.log(values);
    },
    initialValues: {
      email: "",
      check: false,
    },
    validate: (values) => {
      const errors = {
        email: "",
      };
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
  });
  return (
    <div className="page__subscribe subscribe-page">
      <div className="subscribe-page__container _container">
        <form className="subscribe-page__form" onSubmit={formik.handleSubmit}>
          <div className="subscribe-page__top">
            <div className="subscribe-page__label">Newsletter via e-mail</div>
            <div className="subscribe-page__input">
              <input
                autoComplete="off"
                type="text"
                id={"email"}
                name={"email"}
                className="input email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="subscribe-page__button">
              <button
                type="submit"
                className="subscribe-page__btn"
                disabled={
                  !!formik.errors.email &&
                  formik.isValid &&
                  !formik.touched.email
                }
              >
                subscribe
              </button>
            </div>
            {formik.errors.email && formik.touched.email ? (
              <div className={"subscribe-page__error"}>
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="subscribe-page__body">
            <label className="checkbox">
              <input
                id={"check"}
                type="checkbox"
                value="privacy policy"
                name={"check"}
                checked={formik.values.check}
                className="checkbox__input"
                onChange={formik.handleChange}
              />
              <span className="checkbox__text">
                I have been able to read and understand the information on the
                use of my personal data explained in the privacy policy.
              </span>
            </label>
          </div>
        </form>
        <div className="subscribe-page__items-label">
          <div className="label-item">
            <div className="label-item__number">06</div>
            <div className="label-item__title">News</div>
          </div>
        </div>
        <div className="subscribe-page__bottom">
          <div className="number-bottom">
            <span>06</span>
          </div>
        </div>
      </div>
    </div>
  );
};
