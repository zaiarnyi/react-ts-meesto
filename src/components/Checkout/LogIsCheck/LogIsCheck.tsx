import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

interface ILogIsCheckProp {}
interface IInitValues {
  email: string;
  password: string;
}

export const LogIsCheck: React.FC<ILogIsCheckProp> = React.memo((props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as IInitValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .matches(
          /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
          "Email is not valid"
        )
        .required("Required"),
      password: Yup.string()
        .min(2, "Too Short!")
        .max(100, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values, formikHelpers) => {},
  });
  return (
    <div className="checkout-data__login-block">
      <div className="checkout-data__label checkout-title">Login</div>
      <div className="checkout-data__body-input checkout-data__body-input_login">
        <div className="checkout-data__first-input checkout-data__first-input_login">
          <div className="checkout-data__title checkout-text">Email*</div>
          <div className="checkout-data__input">
            <input
              autoComplete="off"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="input"
            />
            {formik.errors.email && formik.touched.email && (
              <div className={"checkout-error"}>{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div className="checkout-data__second-input checkout-data__second-input_login">
          <div className="checkout-data__title checkout-text">Password*</div>
          <div className="checkout-data__input">
            <input
              autoComplete="off"
              type="password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="input"
            />
            <div className={"checkout-pre-error"}>
              {formik.errors.password && formik.touched.password && (
                <div className={"checkout-error"}>{formik.errors.password}</div>
              )}
              <Link
                to={"/forgot-password"}
                className="checkout-text checkout-text_link "
              >
                Forgot password
              </Link>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="checkout-data__btn"
          disabled={!(formik.isValid && formik.dirty)}
        >
          login
        </button>
      </div>
    </div>
  );
});
