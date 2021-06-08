import React, { useState } from "react";

interface IViewItemsProp {}
const variable = [3, 4, 5];

export const ViewItems: React.FC<IViewItemsProp> = (props) => {
  const [view, setView] = useState(3);

  const onToggleVariable = (num: number) => {
    setView(num);
  };
  return (
    <>
      <div className="item-view__value">View:</div>
      <ul className="item-view__quantity">
        {variable.map((item) => (
          <li key={item} onClick={onToggleVariable.bind(null, item)}>
            <div
              className={
                view === item ? "item-view__btn _active" : "item-view__btn"
              }
              data-columns={item}
            >
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
