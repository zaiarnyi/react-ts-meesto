import React from "react";
import { useFormik } from "formik";

interface ICustomInputProp {
  title: string;
  value: string | number;
  defaultValue?: string | number;
  name: string;
  error: string;
  touched: boolean;
  change: (e: React.ChangeEvent<any>) => void;
  blur: (e: React.FocusEvent<any>) => void;
  autofocus?: boolean;
}

export const CustomInput: React.FC<ICustomInputProp> = ({
  title,
  value,
  error = "",
  touched = false,
  change,
  blur,
  name,
  autofocus = false,
  defaultValue,
}) => {
  return (
    <>
      <div className="checkout-data__title checkout-text">{title}</div>
      <div className="checkout-data__input">
        <input
          autoComplete="off"
          type="text"
          name={name}
          value={!value ? defaultValue : value}
          onChange={change}
          onBlur={blur}
          className="input"
          autoFocus={autofocus}
        />
        {error && touched && <div className={"checkout-error"}>{error}</div>}
      </div>
    </>
  );
};
