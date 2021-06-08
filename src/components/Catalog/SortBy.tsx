import React, { useState } from "react";
import Select from "react-select";

interface ISortByProp {}

interface defaultOptions {
  value: "desc" | "asc";
  label: string;
}

const options = [
  { value: "asc", label: "Lowest to Highest price" },
  { value: "desc", label: "Highest to Lowest price" },
] as Array<defaultOptions>;
const sort = ["asc", "desc"];

export const SortBy: React.FC<ISortByProp> = (props) => {
  const [sort, setSort] = useState<string>("desc");

  const onHandlerChange = (obj: defaultOptions | null) => {
    if (obj !== null) {
      console.log(obj);
      setSort(obj.value);
    }
  };
  return (
    <div className="item-view__select">
      <Select
        className={"show"}
        classNamePrefix="select"
        onChange={onHandlerChange}
        name="sort"
        options={options}
        placeholder={"Sort by"}
        styles={{
          control: (styles) => {
            return {
              ...styles,
              background: "white",
              width: "190px",
              minHeight: 30,
              borderColor: "#e0e0e0",
              borderLeft: "none",
              borderRight: "none",
              borderRadius: "none",
              cursor: "pointer",
              "&:hover": {
                borderColor: "#e0e0e0",
              },
            };
          },
          option(styles, { data, isDisabled, isFocused, isSelected }) {
            return {
              ...styles,
              cursor: "pointer",
            };
          },
          menu: (provided, state) => {
            return { ...provided, zIndex: 3 };
          },
        }}
      />
    </div>
  );
};
