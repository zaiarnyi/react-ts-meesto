import React, { useState } from "react";

interface ISearchMenuProp {}

export const SearchMenu: React.FC<ISearchMenuProp> = React.memo((props) => {
  const [value, setValue] = useState("");
  const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };
  const onHandlerSubmitForm = () => {};

  return (
    <form action="#" className="menu__search" onSubmit={onHandlerSubmitForm}>
      <button
        type="submit"
        className="menu__btn"
        aria-label="button for search"
      ></button>
      <input
        autoComplete="off"
        type="search"
        name="form[]"
        className="menu__input"
        value={value}
        onChange={onHandlerChange}
      />
      {value && <button type="reset" className="menu__reset"></button>}
    </form>
  );
});
