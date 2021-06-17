import React from "react";

interface INoMatchProp {}

const NoMatch: React.FC<INoMatchProp> = (props) => {
  return <div className={"no-page"}>Такой страницы нет</div>;
};

export default NoMatch;
