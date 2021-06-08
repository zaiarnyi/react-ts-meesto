import React, { useEffect, useRef, useState } from "react";

interface IHeaderSearchProp {}

export const HeaderSearch: React.FC<IHeaderSearchProp> = React.memo((props) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const formRef = useRef(null);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", onHandlerHide);
  }, []);

  const onHandlerHide = (e: any) => {
    const formWrapper = e.target.closest(".info-header__search");
    if (e.target && !formWrapper) {
      setToggleSearch(false);
      setSearch("");
    }
  };
  const onToggleSearch = () => {
    setToggleSearch((prevState) => !prevState);
  };
  const onValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSendSearch = () => {
    setSearch("");
  };
  return (
    <div className="info-header__search" ref={formRef}>
      <form action="#" className="search-info" onSubmit={onSendSearch}>
        <button
          type="submit"
          className="search-info__btn"
          aria-label="button for search"
        ></button>
        <input
          autoComplete="off"
          type="search"
          name="form[]"
          className={
            !toggleSearch ? "search-info__input" : "search-info__input _active"
          }
          value={search}
          onChange={onValueHandler}
          ref={inputRef}
        />
        <span className="search-info__open" onClick={onToggleSearch}></span>
      </form>
    </div>
  );
});
