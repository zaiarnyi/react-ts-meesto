import React from "react";
import Select from "react-select";
import { IOptionsSelectCountry } from "../../Pages/Checkout";

interface ICustomSelectProp {
  title: string;
  name: string;
  value: IOptionsSelectCountry | undefined;
  defaultValue?: IOptionsSelectCountry;
  options: Array<IOptionsSelectCountry>;
  changeFunc: (field: string, value: IOptionsSelectCountry) => void;
}

export const CustomSelect: React.FC<ICustomSelectProp> = ({
  title,
  name,
  value,
  defaultValue,
  options,
  changeFunc,
}) => {
  return (
    <>
      <div className="checkout-data__title checkout-text">{title}</div>
      <div className="checkout-data__select">
        <Select
          type={"text"}
          id={name}
          defaultValue={defaultValue}
          value={value}
          className={"country"}
          name={name}
          options={options}
          onChange={(option) => {
            changeFunc(name, option as IOptionsSelectCountry);
          }}
          styles={{
            control: (base, props) => {
              return { ...base, minHeight: 47, top: 2 };
            },
          }}
        />
      </div>
    </>
  );
};
