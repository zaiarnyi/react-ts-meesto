import React from "react";

interface INoMatchProp {}

export const NoMatch: React.FC<INoMatchProp> = (props) => {
  return <div className={"no-page"}>Такой страницы нет</div>;
};
