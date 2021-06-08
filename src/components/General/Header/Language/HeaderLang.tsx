import React from "react";

interface IHeaderLangProp {}

export const HeaderLang: React.FC<IHeaderLangProp> = React.memo((props) => {
  return (
    <div className={"lang-header"}>
      <button className="lang-header__view _popup-link">
        USA<span>| USD</span>
      </button>
    </div>
  );
});
